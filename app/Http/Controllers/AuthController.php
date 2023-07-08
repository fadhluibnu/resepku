<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function loginView()
    {
        return Inertia::render('auth/Login');
    }
    public function loginOperation(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email:dns'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('home');
        }
        return back()->with('error', 'Invalid Login');
    }
    public function registerView()
    {
        return Inertia::render('auth/Register');
    }
    public function registerOperation(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required|unique:users,username',
            'name' => 'required',
            'email' => 'required|email:dns',
            'password' => 'required|min:8',
        ]);
        $credentials['password'] = Hash::make($credentials['password']);
        if (User::create($credentials)) {
            return redirect()->route('login')->with('success', 'Registration successfull!');
        }else{
            return to_route('register')->with('fail', 'Registration failed!');
        }
    }
}
