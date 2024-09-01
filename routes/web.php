
<?php

use Illuminate\Support\Facades\Route;

Route::view('admin/{any}', 'welcome')->where('any', '.*');
Route::get('/',[\App\Http\Controllers\Controller::class,'index']);
