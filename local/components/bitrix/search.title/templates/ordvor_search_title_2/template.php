<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true); ?>
<?
$INPUT_ID = trim($arParams["~INPUT_ID"]);
if (strlen($INPUT_ID) <= 0)
	$INPUT_ID = "title-search-input";
$INPUT_ID = CUtil::JSEscape($INPUT_ID);

$CONTAINER_ID = trim($arParams["~CONTAINER_ID"]);
if (strlen($CONTAINER_ID) <= 0)
	$CONTAINER_ID = "title-search";
$CONTAINER_ID = CUtil::JSEscape($CONTAINER_ID);

if ($arParams["SHOW_INPUT"] !== "N") : ?>
	<noindex>
		<div class="search" id="<? echo $CONTAINER_ID ?>">
			<div class="search-shell">
				<form class="group" action="<? echo $arResult["FORM_ACTION"] ?>">
					<input id="<? echo $INPUT_ID ?>" type="text" name="q" value="" size="40" maxlength="50" autocomplete="off" placeholder="Удобный поиск по каталогу" />
					<button class="search_btn fade-out" type="submit">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#EE332A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M19.25 19.2502L15.2625 15.2627" stroke="#EE332A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
					<div class="search-hide">
						<svg width="50" height="50" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.5 16.5L16.5 5.5M5.5 5.5L16.5 16.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
				</form>
				<div class="help_btn">
					<noindex>
						<a href="#find-product-popup" class="find-product-link popup-with-form">Помощь в подборе</a>
					</noindex>
				</div>
			</div>
			<div class="search-mobile">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#050505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M21.0004 20.9999L16.6504 16.6499" stroke="#050505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
			<div class="search-bg"></div>
		</div>
	</noindex>
<? endif ?>
<script>
	BX.ready(function() {
		new JCTitleSearch({
			'AJAX_PAGE': '<? echo CUtil::JSEscape(POST_FORM_ACTION_URI) ?>',
			'CONTAINER_ID': '<? echo $CONTAINER_ID ?>',
			'INPUT_ID': '<? echo $INPUT_ID ?>',
			'MIN_QUERY_LEN': 2
		});
	});
</script>