<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
// use Illuminate\Contracts\Auth;
// use Auth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\User as Authenticatable;
// string $name_sortie, int $id_creator, int $id_events, string $visibility
// $_POST[''],,
class CreateSortieController extends Controller
{
    public function CreateSortie()
    {
        $name_sortie = $_POST['nom_sortie'];
        $id_creator = Auth::user();
        $id_events = $_POST['id_events'];
        $visibility = $_POST['visibility'];


        echo $name_sortie . '<br>';
        echo $id_creator. '<br>';
        echo $id_events. '<br>';
        echo $visibility. '<br>';
    }
}
