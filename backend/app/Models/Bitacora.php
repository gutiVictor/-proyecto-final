<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bitacora extends Model
{
    use HasFactory;

    public $fillable=[

        'bitacora',
        'fecha',
        'hora',

    ];

    public static function add($mensaje) {
        $bitacora = new Bitacora();
        $bitacora->bitacora = $mensaje; // Solo asigna el mensaje
        $bitacora->fecha = date('Y-m-d');
        $bitacora->hora = date('H:i:s');
        $bitacora->save();
      
        return $bitacora;
      }
}

