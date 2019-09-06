<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require 'app/home.html';
        break;
    case '' :
        require 'app/home.html';
        break;
    case '/dicoding/' :
        require 'app/home.html';
        break;
    case '/dicoding' :
        require 'app/home.html';
        break;
    case '/dicoding/?=profile' :
        require 'app/profile.html';
        break;
    case '/?=profile' :
        require 'app/profile.html';
        break;
    default:
        require 'app/404.html';
        break;
}
?>
<script>
if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js');
};</script>
