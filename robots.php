<?php
header("Content-Type: text/plain");
$host = $_SERVER['HTTP_HOST'];
if(mb_stripos($host, ":") !== false) {
	$host_info = explode(":", $host);
	$host = $host_info[0];
}
$protocol = $_SERVER["HTTP_HTTPS"] ? "https" : "http";
$sitemap = "sitemap.xml";

//var_dump($_SERVER);

$textRobots = "#User-agent: *
#" . "Sitemap: " . $protocol . "://" . $host . "/" . $sitemap . "

User-Agent: *
Disallow: */index.php
Disallow: /bitrix/
Disallow: /rasa_test/
Disallow: /*show_include_exec_time=
Disallow: /*show_page_exec_time=
Disallow: /*show_sql_stat=
Disallow: /*bitrix_include_areas=
Disallow: /*clear_cache=
Disallow: /*clear_cache_session=
Disallow: /*ADD_TO_COMPARE_LIST
Disallow: /*ORDER_BY
Disallow: /*PAGEN
Disallow: /*?print=
Disallow: /*&print=
Disallow: /*print_course=
Disallow: /*?action=
Disallow: /*&action=
Disallow: /*register=
Disallow: /*forgot_password=
Disallow: /*change_password=
Disallow: /*login=
Disallow: /*logout=
Disallow: /*auth=
Disallow: /*backurl=
Disallow: /*back_url=
Disallow: /*BACKURL=
Disallow: /*BACK_URL=
Disallow: /*back_url_admin=
Disallow: /*?utm_source=
Disallow: /*?bxajaxid=
Disallow: /*&bxajaxid=
Disallow: /*?view_result=
Disallow: /*&view_result=
Disallow: /*cities.php?*
Disallow: /*IN_STOCK
Disallow: /*WITH_DISCOUNT
Disallow: /*?q=
Disallow: /*USER_CHECKWORD
Disallow: */brand/*
Disallow: */clear/apply/*
Disallow: *?OFFER_ID=*
Allow: /bitrix/components/
Allow: /bitrix/cache/
Allow: /bitrix/js/
Allow: /bitrix/templates/
Allow: /bitrix/panel/


";

echo $textRobots;
//echo "Host: " . $host . "\r\n";
echo "Sitemap: " . $protocol . "://" . $host . "/" . $sitemap;

//#robots.txt
//RewriteRule ^robots.txt$ robots.php