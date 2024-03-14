<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Role;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Role::all();
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
                'Rol' => 'required',
                'Estado' => 'required',
                'fecha_creacion' => 'required',
                'fecha_Modificacion' => 'required',
                'Cambiar_Estado' => 'required'            
            ]);

        if ($validator->fails()){
            return response()->json(['error'=>'Faltan datos en el formulario'],401);
        }

        $role = Role::create([
            'Rol'=>$request->Rol,
            'Estado'=>$request->Estado,
            'fecha_creacion'=>$request->fecha_creacion,
            'fecha_Modificacion'=>$request->fecha_Modificacion,
            'Cambiar_Estado'=>$request->Cambiar_Estado]);

        //  enviamos bitacora  con una variable global */
        $bitacora=Bitacora::add("Se creo Rol con el id: {$role->id}");
        if (!$bitacora){
        throw new Exception("Hubo un error al crear la bitacora");
        }


        return response()->json(['success'=>'Rol registrado correctamente'], 200);


    } catch (Exception $e) {
        return response()->json(['error'=>'Hubo un error interno'], 500);
        
    }






    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Role::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $role = Role::find($id);
        $role->update($request->all());
        return response()->json(['success' => 'Rol actualizado correctamente'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $role = Role::find($id);
        $role->delete();
        return response()->json(['success' => 'Rol eliminado correctamente'], 200);
    }
}
