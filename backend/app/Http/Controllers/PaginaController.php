<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Pagina;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaginaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Pagina::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {

            $validator = Validator::make($request->all(), [
                'url' => 'required',
                'Nombre_de_la_pagina' => 'required',
                'Descripcion' => 'required',
                'Fecha_creacion' => 'required',


            ]);

            if ($validator->fails()) {
                return response()->json(['error'=>'Faltan datos en el formulario'],401);
            }


            $pagina = Pagina::create([
                'url' => $request->url,
                'Nombre_de_la_pagina' => $request->Nombre_de_la_pagina,
                'Descripcion' => $request->Descripcion,
                'Fecha_creacion' => $request->Fecha_creacion
            ]);


            /* enviamos bitacora  con una variable global */
            $bitacora = Bitacora::add("Pagina creada : {$pagina->id}");
            if (!$bitacora) {
                throw new Exception("Hubo un error al crear la bitacora");
            }


            return response()->json(['success' => 'pagina registrado correctamente'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Hubo un error interno'], 500);
        }
    }



    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Pagina::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pagina $pagina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $pagina = Pagina::find($id);
        $pagina->update($request->all());
        return response()->json(['success' => 'pagina actualizado correctamente'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pagina = Pagina::find($id);
        $pagina->delete();
        return response()->json(['success' => 'pagina eliminado correctamente'], 200);
    }
}
