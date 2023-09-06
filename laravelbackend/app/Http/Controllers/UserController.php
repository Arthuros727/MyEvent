<?php

namespace App\Http\Controllers;
// use Auth;
use Exception;
use Socialite;
// use Symfony\Component\Routing\Route;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getuser(){
        // $user = Socialite::driver('github')->user();
        $user = User::all();
        return $user;
    }

    public function addfriend($id){
        // if (Auth::check()) {
            $user = Auth::user();
        // $user = User::find(1); 
    
        if ($user) {
            $currentFriends = $user->friends;
    
            $newFriendId = $id; 
            if (!in_array($newFriendId, explode(',', $currentFriends))) {
                $currentFriends .= ',' . $newFriendId;
                $user->update(['friends' => $currentFriends]);
            }
        }
        return redirect('http://localhost:3000/');
    }}
