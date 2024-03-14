<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $table = 'roles'; // Nombre de la tabla en la base de datos

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'Rol',
        'Estado',
        'fecha_creacion',
        'fecha_Modificacion',
        'Cambiar_Estado',
    ];
}
