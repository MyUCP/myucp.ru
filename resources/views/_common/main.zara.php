@inject("docs", "Documentation")
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>MyUCP — php-фреймворк</title>
        <meta name="description" content="Описание">
        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <nav class="no-margin" role="navigation">
            <div class="container">
                <div class="header">
                    <div class="brand">
                        <a href="/">MyUCP</a>
                    </div>
                    <div class="float-right toggle-button">
                        <i class="fa fa-lg fa-bars"></i>
                    </div>
                </div>
                <div class="collapse">
                    <ul>
                        <li class="active">
                            <a href="/docs">Документация</a>
                        </li>
                        <li>
                            <a href="https://github.com/MyUCP">GitHub</a>
                        </li>
                        <li>
                            <a href="https://github.com/MyUCP/MyUCP/archive/5.x.zip">Скачать</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="subnav">
            <div class="container">
                <ul class="inline">
                    <li class="docs-menu-button"><i class="fa fa-bars"></i></li>
                    <li class="hidden-xs hidden-sm">
                        <span>Версия фреймворка:</span>
                    </li>
                    <li @if($docs->version() == 5.7) class="active" @endif>
                        <a href="{{ url('docs.version', ['version' => '5.7']) }}">5.7</a>
                    </li>
                    <li @if($docs->version() == 5.6) class="active" @endif>
                        <a href="{{ url('docs.version', ['version' => '5.6']) }}">5.6</a>
                    </li>
                    <li @if($docs->version() == 5.5) class="active" @endif>
                        <a href="{{ url('docs.version', ['version' => '5.5']) }}">5.5</a>
                    </li>
                    <li @if($docs->version() == 5.4) class="active" @endif>
                        <a href="{{ url('docs.version', ['version' => '5.4']) }}">5.4</a>
                    </li>
                </ul>
            </div>
        </div>
        <main class="container docs no-gutter-xs">
            <div class="row">
                <div class="col-xs-12 col-md-3 sidebar normal-padding">
                    <section>
                        <ul>
                            <li>Вступление
                                <ul>
                                    <li @yield("releases")><a href="{{ url('docs.version.page', ['version' => $docs->version(), 'code' => 'releases']) }}">Версии фреймворка</a></li>
                                    <li @yield("upgrade")><a href="{{ url('docs.version.page', ['version' => $docs->version(), 'code' => 'upgrade']) }}">Руководство по обновлению</a></li>
                                </ul>
                            </li>
                            <li>Установка и настройка
                                <ul>
                                    <li @yield("installation")><a href="{{ url('docs.version.page', ['version' => $docs->version(), 'code' => 'installation']) }}">Установка</a></li>
                                    <li @yield("configs")><a href="{{ url('docs.version.page', ['version' => $docs->version(), 'code' => 'configs']) }}">Конфигурация</a></li>
                                </ul>
                            </li>
                            <li>HTTP
                                <ul>
                                    <li @yield("routing")><a href="/docs/{{ $docs->version() }}/routing">Маршрутизация</a></li>
                                    @if($docs->version() == 5.7)
                                    <li @yield("session")><a href="/docs/{{ $docs->version() }}/csrf">CSRF защита</a></li>
                                    @endif
                                    <li @yield("requests")><a href="/docs/{{ $docs->version() }}/requests">Запросы</a></li>
                                    <li @yield("responses")><a href="/docs/{{ $docs->version() }}/responses">Ответ (RESPONSE)</a></li>
                                    @if($docs->version() == 5.5 || $docs->version() == 5.6 || $docs->version() == 5.7)
                                    <li @yield("session")><a href="/docs/{{ $docs->version() }}/session">Сессия</a></li>
                                    @endif
                                </ul>
                            </li>
                            <li>База данных
                                <ul>
                                    <li @yield("database")><a href="/docs/{{ $docs->version() }}/database">Работа с базой данных</a></li>
                                    <li @yield("builder")><a href="/docs/{{ $docs->version() }}/builder">Конструктор запросов</a></li>
                                    <li @yield("models")><a href="/docs/{{ $docs->version() }}/models">Модели</a></li>
                                </ul>
                            </li>
                            <li>Основы
                                <ul>
                                    @if($docs->version() == 5.7)
                                    <li @yield("container")><a href="/docs/{{ $docs->version() }}/container">Контейнер</a></li>
                                    @endif
                                    <li @yield("controllers")><a href="/docs/{{ $docs->version() }}/controllers">Контроллеры</a></li>
                                    <li @yield("helpers")><a href="/docs/{{ $docs->version() }}/helpers">Помощники</a></li>
                                    @if($docs->version() != 5.7)
                                    <li @yield("libraries")><a href="/docs/{{ $docs->version() }}/libraries">Библиотеки</a></li>
                                    @endif
                                    <li @yield("views")><a href="/docs/{{ $docs->version() }}/views">Шаблоны</a></li>
                                    <li @yield("zara")><a href="/docs/{{ $docs->version() }}/zara">Шаблонизатор Zara</a></li>
                                </ul>
                            </li>
                            @if($docs->version() == 5.5 || $docs->version() == 5.6 || $docs->version() == 5.7)
                            <li>Сервисы
                                <ul>
                                    <li @yield("localization")><a href="/docs/{{ $docs->version() }}/localization">Локализация</a></li>
                                    @if($docs->version() == 5.7)
                                    <li @yield("extensions")><a href="/docs/{{ $docs->version() }}/extensions">Расширения</a></li>
                                    @endif
                                </ul>
                            </li>
                            @endif
                        </ul>
                    </section>
                </div>
                <div class="col-xs-12 col-md-9 main m-b-30">
                    <article class="bg-white p-35-45 status-red">
                        @yield("content")
                    </article>
                </div>
            </div>
        </main>
        <footer class="bg-dark-grey">
            <div class="container">
                <div class="row">
                    <section class="col-xs-12 col-sm-4 col-md-3">
                        <header>
                            <h4 class="h6 text-uppercase">Разработка</h4>
                        </header>
                        <ul>
                            <li><a href="https://github.com/MyUCP/MyUCP/issues" rel="nofollow" target="_blank">Сообщить о баге</a></li>
                            <li><a href="https://github.com/MyUCP" rel="nofollow" target="_blank">Другие проекты</a></li>
                            <li><a href="https://github.com/MyUCP/MyUCP/commits" rel="nofollow" target="_blank">Последние изменения</a></li>
                        </ul>
                    </section>
                    <section class="col-xs-12 col-sm-4 col-md-3">
                        <header>
                            <h4 class="h6 text-uppercase">Ресурсы</h4>
                        </header>
                        <ul>
                            <li><a href="http://myucp.ru" rel="nofollow" target="_blank">Официальный сайт</a></li>
                            <li><a href="https://github.com/MyUCP" rel="nofollow" target="_blank">Расширения</a></li>
                            <li><a href="http://maksa988.tech/" rel="nofollow" target="_blank">Автор</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
        <script src="{{ asset('/js/script.js') }}"></script>
    </body>
</html>