@extends('home')
@section('content')
<div class="container">
    <div class="row">
        <div class="col">
            <p>Yeah! it's a second page</p>
        </div>
        <div class="col">
            @yield('seccontent')
        </div>
    </div>
</div>
@endsection