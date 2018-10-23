@extends("_common/main")

@section('title', $documentation['name'])
@section($documentation['url'], "class='active'")

@section('content')
<h1>{{ $documentation['name'] }}</h1>
{{ $documentation['content'] }}
@stop