<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pagina extends Model
{
    use HasFactory;

    protected $table = 'paginas';


    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'url',
        'Nombre_de_la_pagina',
        'Descripcion',
        'Fecha_creacion',
    ];
}
