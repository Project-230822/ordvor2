<?php require $_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php';
if ($_SERVER['REMOTE_ADDR'] !== '212.19.14.106')
	LocalRedirect("/");

/*

$iblockId = 18;
$step = 10;
$timeout = 1000;

if ($_REQUEST["clear"] == 'Y') {
	$_SESSION["RASA_ALL_COUNT"] = false;
	$_SESSION["RASA_CUR_PAGE"] = false;
}


$filter = array(
	"IBLOCK_ID" => $iblockId,
	"ACTIVE" => "Y",
	"=PROPERTY_PROTSENT_SKIDKI" => false
);

$allCount = $_SESSION["RASA_ALL_COUNT"] ?: false;
if (!$allCount) {
	$allCount = CIBlockElement::GetList([], $filter, []);
	$_SESSION["RASA_ALL_COUNT"] = $allCount;
}
$curPage = $_SESSION["RASA_CUR_PAGE"] ?: 1;

$nav = array(
	"iNumPage" => $curPage,
	"nPageSize" => $step
);
$dbItems = CIBlockElement::GetList([], $filter, false, $nav, ["ID"]);
$ids = array();
while ($item = $dbItems->fetch())
	CIBlockElement::SetPropertyValuesEx($item["ID"], $iblockId, array("PROTSENT_SKIDKI" => 0));

$percent = $curPage * $step / $allCount * 100;

echo $percent . "% (" . $curPage * $step . "/$allCount)";

$curPage++;
$_SESSION["RASA_CUR_PAGE"] = $curPage;
?>

<script>
	setTimeout(() => {
		window.location.href = "<?php echo $_SERVER['SCRIPT_URL'];?>";
  }, <?php echo $timeout;?>)
</script>

<?php

die();
