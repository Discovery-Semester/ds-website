<?php
    $current_page = $_SERVER['REQUEST_URI'];

    $filtered_page =  filter_var($current_page, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
    $stripped_page =  str_replace(">","",$filtered_page);

    if(strlen($stripped_page) > 100) {
        $short_page = "index.php";
    } else {
        $short_page = $stripped_page;
    }

    $page = substr($short_page, 3);

    $de_link = "../de{$page}";
    $en_link = "../en{$page}";

?>

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3"></script>

<p id="languageselect">
  <a href="<?php echo $de_link;?>">de</a>
  <a href="<?php echo $en_link;?>">en</a>
</p>
<header>
  <h1>DISCOVERY SEMESTER</h1>
  <!--<img src="../images/logo_header.png" alt="Logo" id="headerlogo" />-->
</header>
