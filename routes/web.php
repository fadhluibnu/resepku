<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['guest'])->group(function () {
    Route::get('/login', [AuthController::class, 'loginView'])->name('login');
    Route::post('/login', [AuthController::class, 'loginOperation']);
    Route::get('/register', [AuthController::class, 'registerView'])->name('register');
    Route::post('/register', [AuthController::class, 'registerOperation']);
});

Route::middleware(['auth'])->group(function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::post('/dashboard/{resep:slug}', [DashboardController::class, 'update']);
    Route::get('/dashboard/{resep:slug}/edit', [DashboardController::class, 'edit'])->name('dashboard.edit');
    Route::delete('/dashboard/{resep:slug}', [DashboardController::class, 'destroy']);
    Route::resource('/dashboard', DashboardController::class)->except([
        'show', 'edit', 'destroy', 'update'
    ]);
});
