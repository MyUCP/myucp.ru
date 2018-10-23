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
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
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
						<li>
							<a href="{{ url('docs') }}">Документация</a>
						</li>
						<li>
							<a href="https://github.com/MyUCP/MyUCP">GitHub</a>
						</li>
						<li>
							<a href="https://github.com/MyUCP/MyUCP/archive/master.zip">Скачать</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="homepage hexagons text-center">
			<div class="container">
				<h1 class="c-white letter-spacing-stiff">MyUCP &mdash; php-фреймворк</h1>
				<h2 class="c-white small m-b-25">Целью создания фреймворка стало желание получение нового опыта, так же упрощение написания кода для себя не используя большие фреймворки для маленьких проектов.</h2>
				<ul class="inline">
					<li>				
						<a class="button" href="{{ url('docs') }}">Документация фреймворка</a>
					</li>
					<li>
						<a class="button" href="https://github.com/MyUCP">Другие продукты MyUCP</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="bg-white p-20-0">
		<div class="container">
			<div class="row with-border">
				<div class="callouts">
            <a href="{{ url('docs') }}" class="callout minimal third">
                <div class="callout-head">
                    <div class="callout-title">Прост в использовании</div>
                    <div class="callout-icon"></div>
                </div>
                <p>Фреймворк рассчитан на неопытных начинающих программистов, тем самы предоставляя базовые инструменты для разрабоки.</p>
            </a>
            <a href="{{ url('docs') }}" class="callout minimal third">
                <div class="callout-head">
                    <div class="callout-title">Открытый код</div>
                    <div class="callout-icon"></div>
                </div>
                <p>MyUCP есть полностью открытым проектом, вы можете изменять код как вы хотите и настроить его под себя.</p>
            </a>
            <a href="{{ url('docs') }}" class="callout minimal third">
                <div class="callout-head">
                    <div class="callout-title">Библиотеки</div>
                    <div class="callout-icon"></div>
                </div>
                <p>Вы можете расширить функциональность фреймворка при помощи различных библиотек которые подключаться и используються максимально просто.</p>
            </a>
        </div>
			</div>
		</div>
	</div>
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
							<li><a href="https://github.com/MyUCP/MyUCP/commits/master" rel="nofollow" target="_blank">Последние изменения</a></li>
						</ul>
					</section>
					<section class="col-xs-12 col-sm-4 col-md-3">
						<header>
							<h4 class="h6 text-uppercase">Ресурсы</h4>
						</header>
						<ul>
							<li><a href="http://myucp.ru" rel="nofollow" target="_blank">Официальный сайт</a></li>
							<li><a href="https://github.com/MyUCP" rel="nofollow" target="_blank">Библиотеки</a></li>
							<li><a href="http://maksa988.tech/" rel="nofollow" target="_blank">Автор</a></li>
						</ul>
					</section>
				</div>
			</div>
		</footer>
		<script src="{{ asset('js/script.js') }}"></script>
	</body>
</html>