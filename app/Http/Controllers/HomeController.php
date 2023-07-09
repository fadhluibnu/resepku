<?php

namespace App\Http\Controllers;

use App\Models\Resep;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'reseps' => Resep::
            orderBy('id', 'desc')
            ->get()
        ]);
    }
}
