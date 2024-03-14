<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'usuarios';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'correo',
        'estado',
        'fecha_creacion',
        'id_rol',
        'fecha_Modificacion',
        'cambiar_Estado',
    ];

    /**
     * Define la relación con el modelo `Rol`.
     */
    public function rol()
    {
        return $this->belongsTo(Role::class, 'id_rol');
    }
}