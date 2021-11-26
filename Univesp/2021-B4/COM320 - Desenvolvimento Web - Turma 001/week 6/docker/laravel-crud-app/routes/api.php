<?php

use App\Http\Controllers\PaisController;
use App\Http\Controllers\UniversidadeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/paises',         [PaisController::class, 'index']);
Route::get('/paises/{id}',    [PaisController::class, 'show']);
Route::post('/paises',        [PaisController::class, 'store']);
Route::put('/paises/{id}',    [PaisController::class, 'update']);
Route::delete('/paises/{id}', [PaisController::class, 'destroy']);

Route::get('/universidades',         [UniversidadeController::class, 'index']);
Route::get('/universidades/{id}',    [UniversidadeController::class, 'show']);
Route::post('/universidades',        [UniversidadeController::class, 'store']);
Route::put('/universidades/{id}',    [UniversidadeController::class, 'update']);
Route::delete('/universidades/{id}', [UniversidadeController::class, 'destroy']);
