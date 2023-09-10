<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SortieController extends Controller
{
    public function add($uid, $participant, $private){
        // $uid = $request->input('uid');
        // $creator = $request->input('creator');
        // $participant = $request->input('participant');
        // $private = $request->input('private');
        $user = Auth::user();
        // Utiliser DB::table pour insérer des données dans la table "sortie"
        try {
            DB::table('sortie')->insert([
                'uid' => $uid,
                'creator' => $user->id,
                'participants' => $participant,
                'private' => $private,
            ]);
        } catch (\Exception $e) {
            // Gérer l'exception (par exemple, en enregistrant le message d'erreur)
            dd($e->getMessage()); // Afficher l'erreur pour le débogage
        }
    }
}
