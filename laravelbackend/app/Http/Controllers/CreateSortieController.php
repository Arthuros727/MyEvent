<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
// use Illuminate\Contracts\Auth;
// use Auth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;

class CreateSortieController extends Controller
{
    public function CreateSortie()
    {
        // $user = Auth::user();


        $name_sortie = $_POST['nom_sortie'];
        // $id_creator = Auth::getUser();
        $id_creator = 3;
        $id_events = $_POST['id_events'];
        $visibility = $_POST['visibility'];

        $users = DB::insert("INSERT INTO sorties (name_sortie, id_creator, id_events, visibility) VALUES ('$name_sortie', $id_creator, $id_events, '$visibility');");
 
        // redirect()
    }
}
