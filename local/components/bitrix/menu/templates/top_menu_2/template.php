<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<? if (!empty($arResult)) : ?>
	<nav>
		<ul>
			<? $previousLevel = 0;
			foreach ($arResult as $arItem) : ?>
				<? if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel) : ?>
					<?= str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"])); ?>
				<? endif ?>
				<? if ($arItem["IS_PARENT"]) : ?>
					<? if ($arItem["DEPTH_LEVEL"] == 1) : ?>
						<li class="info_item">
							<a href="<?= $arItem["LINK"] ?>" class="name dropdown_array">
								<?= $arItem["TEXT"] ?>
								<svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" fill="none">
									<path d="M0.5 0.75L3 3.25L5.5 0.75" stroke="#9B9B9B" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</a>
							<ul class="dropdown_block">
							<? else : ?>
								<li class="dropdown_item">
									<a href="<?= $arItem["LINK"] ?>">
										<?= $arItem["TEXT"] ?>
									</a>
									<ul>
									<? endif ?>
								<? else : ?>
									<? if ($arItem["PERMISSION"] > "D") : ?>
										<? if ($arItem["DEPTH_LEVEL"] == 1) : ?>
											<li class="info_item">
												<a href="<?= $arItem["LINK"] ?>" class="name dropdown_array">
													<?= $arItem["TEXT"] ?>
												</a>
											</li>
										<? else : ?>
											<li class="dropdown_item">
												<a href="<?= $arItem["LINK"] ?>">
													<?= $arItem["TEXT"] ?>
												</a>
						</li>
					<? endif ?>
				<? else : ?>
					<? if ($arItem["DEPTH_LEVEL"] == 1) : ?>
						<li class="info_item">
							<a href="" class="name dropdown_array">>
								<?= $arItem["TEXT"] ?>
							</a>
						</li>
					<? else : ?>
						<li>
							<a href="" class="denied" title="<?= GetMessage("MENU_ITEM_ACCESS_DENIED") ?>">
								<?= $arItem["TEXT"] ?>
							</a>
						</li>
					<? endif ?>
				<? endif ?>
			<? endif ?>
			<? $previousLevel = $arItem["DEPTH_LEVEL"]; ?>
		<? endforeach ?>
		<? if ($previousLevel > 1) : //close last item tags 
		?>
			<?= str_repeat("</ul></li>", ($previousLevel - 1)); ?>
		<? endif ?>
		</ul>
	</nav>
<? endif ?>