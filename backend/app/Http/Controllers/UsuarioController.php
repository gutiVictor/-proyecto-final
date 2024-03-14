<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\Usuario;
use Exception;
use Illuminate\Contracts\Validation\Validator as ValidationValidator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Usuario::all();
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
            $validator= Validator::make($request->all(),[
                'correo'=>'required',
                'estado'=>'required',
                'fecha_creacion'=>'required',
                'id_rol'=>'required',
                 'fecha_Modificacion'=>'required',
                'cambiar_Estado'=>'required'            
            ]);
    
            if ($validator->fails()){
                return response()->json(['error'=>'Faltan datos en el formulario'],401);
            }
            
            $usuario = Usuario::create([
                'correo'=>$request->correo,
                'estado'=>$request->estado,
                'fecha_creacion'=>$request->fecha_creacion,
                'id_rol'=>$request->id_rol,
                'fecha_Modificacion'=>$request->fecha_Modificacion,
                'cambiar_Estado'=>$request->cambiar_Estado    
    
            ]);

            //  enviamos bitacora  con una variable global */
             $bitacora=Bitacora::add("Se creo el usuario con el id: {$usuario->id}");
            if (!$bitacora){
            throw new Exception("Hubo un error al crear la bitacora");
            }


            return response()->json(['success'=>'Usuario registrado correctamente'], 200);
    
        } catch (Exception $e) {
            return response()->json(['error'=>'Hubo un error interno'], 500);
            
        }




    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Usuario::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuario $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $usuario = Usuario::find($id);
        $usuario->update($request->all());
        return response()->json(['success' => 'usuario actualizado correctamente'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuario = Usuario::find($id);
        $usuario->delete();
        return response()->json(['success' => 'usuario eliminado correctamente'], 200);
    }
        
    
}
