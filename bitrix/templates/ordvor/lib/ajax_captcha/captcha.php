<?
include $_SERVER['DOCUMENT_ROOT']."/config.php";
header("Content-type: text/html; charset={$conf['encoding']}");
if ((empty($request))||($request != 'XMLHttpRequest')) exit;

$status_captcha = 0;
if (($_GET["code"] == $_SESSION["security_code"])&&(!empty($_GET["code"]) && !empty($_SESSION["security_code"])) ) 
	{
	$status_captcha = 1;
	}
echo $status_captcha;
exit;

?>