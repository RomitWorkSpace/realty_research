<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('{any?}', function () {
    return view('welcome');
});

Route::get('/property/best-property', function () {
    return view('welcome');
});

Route::get('/search-property/{property_type}/{state}/{city}/{any?}', function () {
    return view('welcome');
});

Route::get('/property/{category}/{state}/{any?}', function () {
    return view('welcome');
});