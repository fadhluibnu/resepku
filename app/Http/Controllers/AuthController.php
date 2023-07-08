<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function loginView(){
        return Inertia::render('auth/Login');
    }
    public function loginOperation(Request $request){
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return redirect()->intended('home');
        }
        return back()->with('error', 'Invalid Login');
    }
    public function registerView(){
        return Inertia::render('auth/Register');
    }
}
