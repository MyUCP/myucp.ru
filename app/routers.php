<?php
/*
|--------------------------------------------------------------------------
| Маршрутизация
|--------------------------------------------------------------------------
|
| Укажите пути маршрутизации и какие контроллеры будут выполняться вместе
| с их параметрами и так же действиями которые они должны выполнять
|
*/

if (! defined('DEFAULT_VERSION')) {
    define('DEFAULT_VERSION', '5.6');
}

Router::get("/", "HomeController@welcome");
Router::get("docs", "DocumentationController@show")->name('docs');
Router::get("docs/{version:[0-9.]+}", "DocumentationController@show")->name('docs.version');
Router::get("docs/{version:[0-9.]+}/{code:[а-яА-ЯёЁa-zA-Z0-9-]+}", "DocumentationController@show")->name('docs.version.page');