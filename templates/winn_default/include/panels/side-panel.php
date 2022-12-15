<?php
use \Bitrix\Main\Localization\Loc;
use Bitrix\Main\Page\Asset;

$rs = new \Bitrix\Main\Type\RandomSequence();
$sId = 'side-panel';
?>
<div class="side-panel" id="<?=$sId?>">

	<div class="side-panel__container" id="<?=$sId?>-container">
		<div class="side-panel__inner" id="<?=$sId?>-inner">

			<button class="side-panel__close" data-panel-close>
				<svg class="icon-svg"><use xlink:href="#svg-cross"></use></svg>
			</button>
		</div>
	</div>	
</div>
