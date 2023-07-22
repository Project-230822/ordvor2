<? require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php"); ?>
<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die(); ?>
<?

use Bitrix\Main\Engine\ActionFilter\Authentication;
use Bitrix\Main\Engine\ActionFilter\Scope;
use Bitrix\Main\Engine\Response;
use Bitrix\Main\Config\Option;
use Bitrix\Main\Error;
use Bitrix\Catalog;
use Bitrix\Main\Loader;
use Bitrix\Main\Engine\Controller;
use Bitrix\Sale;
use \Bitrix\Main;

class CatalogItemController extends Controller
{
	public function configureActions()
	{
		return [
			'addViewedProduct' => [
				'-prefilters' => [
					Authentication::class
				],
				'+prefilters' => [new Scope(Scope::AJAX)]
			],
		];
	}

	/**
	 * @param $skuId
	 * @param $siteId
	 * @param int $productId
	 */
	public function addViewedProductAction(int $skuId, string $siteId, int $productId = 0): void
	{
		if (!Loader::includeModule('catalog')) {
			$this->addError(new Error("Catalog isn't included", 'MODULE_CATALOG_IS_NOT_INCLUDED'));
			return;
		}

		if (!Loader::includeModule('sale')) {
			$this->addError(new Error("Sale isn't included", 'MODULE_SALE_IS_NOT_INCLUDED'));
			return;
		}

		if (!Catalog\Product\Basket::isNotCrawler()) {
			$this->addError(new Error("Not allowed", 'SEARCHER'));
			return;
		}

		if (Option::get('catalog', 'enable_viewed_products') === 'N') {
			return;
		}

		$request = \Bitrix\Main\Context::getCurrent()->getRequest();
		$recommendationCookie = $request->getCookie(Bitrix\Main\Analytics\Catalog::getCookieLogName());

		$recommendationId = '';
		if (!empty($recommendationCookie) && $productId) {
			$recommendations = \Bitrix\Main\Analytics\Catalog::decodeProductLog($recommendationCookie);

			if (is_array($recommendations) && isset($recommendations[$productId])) {
				$recommendationId = $recommendations[$productId][0];
			}
		}

		Catalog\CatalogViewedProductTable::refresh(
			$skuId,
			CSaleBasket::GetBasketUserID(),
			$siteId,
			$productId,
			$recommendationId
		);
	}
}

$request = Main\Application::getInstance()->getContext()->getRequest();
$operation = $request->getPost('operation');
if ($operation == 'quantityChange') {
	$action = $request->getPost('action');
	$quantity = $request->getPost('quantity');
	$productId = $request->getPost('productId');

	$basket = Sale\Basket::loadItemsForFUser(
		Sale\Fuser::getId(),
		Main\Context::getCurrent()->getSite()
	);

	foreach ($basket as $basketItem) {
		if ($productId == $basketItem->getField('PRODUCT_ID')) $productItemId = $basketItem->getField('ID');
	}

	if ($item = $basket->getItemById($productItemId)) {
		if ($action == 'quantityDown') {
			$actionString = $item->getQuantity() - (int)$quantity;
		} else if ($action == 'quantityUp') {
			$actionString = $item->getQuantity() + (int)$quantity;
		} else {
			$actionString = (int)$quantity;
		}
		$item->setField('QUANTITY', $actionString);
	} else {
		$item = $basket->createItem('catalog', $productId);
		$item->setFields([
			'QUANTITY' => (int)$quantity,
			'CURRENCY' => \Bitrix\Currency\CurrencyManager::getBaseCurrency(),
			'LID' => \Bitrix\Main\Context::getCurrent()->getSite(),
			'PRODUCT_PROVIDER_CLASS' => \Bitrix\Catalog\Product\Basket::getDefaultProviderName(),
		]);
	}
	$basket->save();
}