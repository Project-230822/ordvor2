<? 


echo 123;

$_SERVER["DOCUMENT_ROOT"] = "/home/bitrix/www";
$DOCUMENT_ROOT = $_SERVER["DOCUMENT_ROOT"];

//$path = $DOCUMENT_ROOT . "/cron_start_start_start_start_start.txt";

//file_put_contents($path, date("Y-m-d H:i:s"));

define("NO_KEEP_STATISTIC", true);
define("NOT_CHECK_PERMISSIONS",true);
define('BX_NO_ACCELERATOR_RESET', true);
define('CHK_EVENT', true);
define('BX_WITH_ON_AFTER_EPILOG', true);


require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

@set_time_limit(0);
@ignore_user_abort(true);

CAgent::CheckAgents();
define("BX_CRONTAB_SUPPORT", true);
define("BX_CRONTAB", true);
CEvent::CheckEvents();

if(CModule::IncludeModule('sender'))
{
	\Bitrix\Sender\MailingManager::checkPeriod(false);
	\Bitrix\Sender\MailingManager::checkSend();
}

require($_SERVER['DOCUMENT_ROOT']."/bitrix/modules/main/tools/backup.php");
CMain::FinalActions();

//$path = $DOCUMENT_ROOT . "/cron_end_end_end_end_end_end_end_end_end_end.txt";

//file_put_contents($path,"OK!");


?>