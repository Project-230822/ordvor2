<?

use Bitrix\Main\Application;
use Bitrix\Main\Loader;
use Bitrix\Sale;
use Bitrix\Main\SystemException;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

class DeliveryPrice extends CBitrixComponent
{
	protected $arDeliveryServiceAll;
	protected $arUserResult;


	public function onPrepareComponentParams($arParams)
	{

		return $arParams;
	}

	public function executeComponent()
	{
		$request = Application::getInstance()->getContext()->getRequest();
		$this->arResult["ZIP"] = $request->get("zip");
		$this->arResult["WEIGHT"] = $request->get("weight");
		if (floatval($this->arResult["WEIGHT"]) <= 0) {
			$this->arResult["WEIGHT"] = $this->arParams["DEFAULT_WEIGHT"];
		}
		try {
			if ($this->arResult["ZIP"]) {
				Loader::includeModule("sale");
				if ($location = Bitrix\Sale\Location\Admin\LocationHelper::getLocationsByZip($this->arResult["ZIP"], array('limit' => 1))->fetch()) {
					$order = Sale\Order::create(SITE_ID);
					$order->setPersonTypeId($this->arParams["PERSON_TYPE"]);
					$basket = Sale\Basket::create(SITE_ID);

					$item = $basket->createItem('catalog', $this->arParams["DEFAULT_PRODUCT_ID"]);

					$item->setFields(array(
						'QUANTITY' => 1,
						'CURRENCY' => "RUB",
						'LID' => SITE_ID,
						'CUSTOM_PRICE' => 'Y',
						'PRICE' => '1000',
						"WEIGHT" => $this->arResult["WEIGHT"] * 1000
					));

					$this->arResult['$item->getWeight();'] = $item->getWeight();;
					$order->setBasket($basket);

					$arLocation = Sale\Location\LocationTable::getById($location["LOCATION_ID"])->fetch();

					$this->arResult["LOCATION"] = Bitrix\Sale\Location\Admin\LocationHelper::getLocationStringById($location["LOCATION_ID"]);
					$propertyCollection = $order->getPropertyCollection();
					
					$locationProperty = $propertyCollection->getDeliveryLocation();

					$locationProperty->setValue($arLocation["CODE"]);
					$zipProperty = $propertyCollection->getDeliveryLocationZip();
					$zipProperty->setValue($this->arResult["ZIP"]);

					$this->initShipment($order);
					$this->arDeliveryServiceAll = \Bitrix\Sale\Delivery\Services\Manager::getRestrictedObjectsList($this->getCurrentShipment($order), Sale\Services\Base\RestrictionManager::MODE_CLIENT);
					$this->calculateDeliveries($order);
				} else {
					$this->arResult["ERRORS"][] = "Не удалось найти индекс";
				}
			} else {
				\Bitrix\Main\Loader::includeModule("sale");
				$geoLocationResult = \Bitrix\Main\Service\GeoIp\Manager::getDataResult('95.78.7.106', "ru");
				if ($geoLocationResult->isSuccess()) {
					$geoLocation = Bitrix\Sale\Location\Search\Finder::find([
						"select" => ["ID", "NAME", "CODE"],
						"filter" => [
							"PHRASE" => $geoLocationResult->getGeoData()->cityName
						],
						"limit" => 1
					])->fetch();
					if ($geoLocation) {
						$geoLocation["NAME"] = Bitrix\Sale\Location\Admin\LocationHelper::getLocationStringById($geoLocation["ID"]);
						$geoLocation["ZIP"] = Bitrix\Sale\Location\Admin\LocationHelper::getZipByLocation($geoLocation["CODE"], ['limit' => 1])->fetch();
						if ($geoLocation["ZIP"]) {
							$this->arResult["GEOLOCATION"] = $geoLocation;
						}
					}
				}
			}
		} catch (\Exception $e) {
			$this->arResult["ERRORS"][] = "Не удалось найти индекс";
		}


		$this->includeComponentTemplate();
	}

	function calculateDeliveries($order)
	{
		$this->arResult['DELIVERY'] = array();
		$this->arResult['arDeliveryServiceAll'] = $this->arDeliveryServiceAll;
		$problemDeliveries = array();

		if (!empty($this->arDeliveryServiceAll)) {
			/** @var Sale\Order $orderClone */
			$orderClone = null;
			$anotherDeliveryCalculated = false;
			/** @var Sale\Shipment $shipment */
			$shipment = $this->getCurrentShipment($order);

			/** @var Bitrix\Sale\Delivery\Services\Base $deliveryObj */
			foreach ($this->arDeliveryServiceAll as $deliveryId => $deliveryObj) {
				$calcResult = false;
				$calcOrder = false;
				$arDelivery = array();
				$arDelivery["NAME"] = $deliveryObj->getNameWithParent();
				// $arDelivery['$deliveryObj'] = $deliveryObj;

				if ((int)$shipment->getDeliveryId() === $deliveryId) {
					$arDelivery['CHECKED'] = 'Y';
					$mustBeCalculated = true;
					$calcResult = $deliveryObj->calculate($shipment);
					$calcOrder = $order;
				} else {
					$mustBeCalculated = true;

					if ($mustBeCalculated) {
						$anotherDeliveryCalculated = true;

						if (empty($orderClone)) {
							$orderClone = $this->getOrderClone($order);
						}

						$orderClone->isStartField();

						$clonedShipment = $this->getCurrentShipment($orderClone);
						$clonedShipment->setField('DELIVERY_ID', $deliveryId);

						$calculationResult = $orderClone->getShipmentCollection()->calculateDelivery();

						if ($calculationResult->isSuccess()) {
							$calcDeliveries = $calculationResult->get('CALCULATED_DELIVERIES');
							$calcResult = reset($calcDeliveries);
						}

						if (empty($calcResult)) {
							$calcResult = new Sale\Delivery\CalculationResult();
							$calcResult->addError(new \Bitrix\Main\Error("Не удалось расчитать стоимость доставки"));
						}

						$orderClone->doFinalAction(true);

						$calcOrder = $orderClone;
					}
				}

				if ($mustBeCalculated) {
					if ($calcResult->isSuccess()) {
						$arDelivery['PRICE'] = Sale\PriceMaths::roundPrecision($calcResult->getPrice());
						$arDelivery['PRICE_FORMATED'] = SaleFormatCurrency($arDelivery['PRICE'], $calcOrder->getCurrency());

						$currentCalcDeliveryPrice = Sale\PriceMaths::roundPrecision($calcOrder->getDeliveryPrice());
						if ($currentCalcDeliveryPrice >= 0 && $arDelivery['PRICE'] != $currentCalcDeliveryPrice) {
							$arDelivery['DELIVERY_DISCOUNT_PRICE'] = $currentCalcDeliveryPrice;
							$arDelivery['DELIVERY_DISCOUNT_PRICE_FORMATED'] = SaleFormatCurrency($arDelivery['DELIVERY_DISCOUNT_PRICE'], $calcOrder->getCurrency());
						}

						if (strlen($calcResult->getPeriodDescription()) > 0) {
							$arDelivery['PERIOD_TEXT'] = $calcResult->getPeriodDescription();
						}
					} else {
						if (count($calcResult->getErrorMessages()) > 0) {
							foreach ($calcResult->getErrorMessages() as $message) {
								$arDelivery['CALCULATE_ERRORS'] .= $message . '<br>';
							}
						} else {
							$arDelivery['CALCULATE_ERRORS'] = "Ошибка вычисления стоимости доставки";
						}


						if ($this->arParams['SHOW_NOT_CALCULATED_DELIVERIES'] === 'N') {
							unset($this->arDeliveryServiceAll[$deliveryId]);
							continue;
						} elseif ($this->arParams['SHOW_NOT_CALCULATED_DELIVERIES'] === 'L') {
							$problemDeliveries[$deliveryId] = $arDelivery;
							continue;
						}
					}

					$arDelivery['CALCULATE_DESCRIPTION'] = $calcResult->getDescription();
				}

				$this->arResult['DELIVERY'][$deliveryId] = $arDelivery;
			}

			if ($anotherDeliveryCalculated) {
				$order->doFinalAction(true);
			}
		}

		if (!empty($problemDeliveries)) {
			$this->arResult['DELIVERY'] += $problemDeliveries;
		}
	}

	function getCurrentShipment(Sale\Order $order)
	{
		/** @var Sale\Shipment $shipment */
		foreach ($order->getShipmentCollection() as $shipment) {
			if (!$shipment->isSystem())
				return $shipment;
		}

		return null;
	}

	/**
	 * @param Sale\Order $order
	 *
	 * @return Sale\Order
	 */
	protected function getOrderClone(Sale\Order $order)
	{
		/** @var Sale\Order $orderClone */
		$orderClone = $order->createClone();

		$clonedShipment = $this->getCurrentShipment($orderClone);
		if (!empty($clonedShipment)) {
			$clonedShipment->setField('CUSTOM_PRICE_DELIVERY', 'N');
		}

		return $orderClone;
	}

	/**
	 * Initialization of shipment object. Filling with basket items.
	 *
	 * @param Sale\Order $order
	 * @return Sale\Shipment
	 * @throws \Bitrix\Main\ArgumentTypeException
	 * @throws \Bitrix\Main\NotSupportedException
	 */
	public function initShipment(Sale\Order $order)
	{
		$shipmentCollection = $order->getShipmentCollection();
		$shipment = $shipmentCollection->createItem();
		$shipmentItemCollection = $shipment->getShipmentItemCollection();
		$shipment->setField('CURRENCY', $order->getCurrency());

		/** @var Sale\BasketItem $item */
		foreach ($order->getBasket() as $item) {
			/** @var Sale\ShipmentItem $shipmentItem */
			$shipmentItem = $shipmentItemCollection->createItem($item);
			$shipmentItem->setQuantity($item->getQuantity());
		}

		return $shipment;
	}
}
