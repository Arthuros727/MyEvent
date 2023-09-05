<?php

namespace App\Http\Controllers;
use Auth;
use Exception;
use Socialite;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getuser(){
        // $user = Socialite::driver('github')->user();
        $user = User::all();
        return $user;
    }
}
