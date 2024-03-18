import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AgregarRol = () => {
  const [rol, setRol] = useState('');
  const [estado, setEstado] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [fechaModificacion, setFechaModificacion] = useState('');
  const [cambiarEstado, setCambiarEstado] = useState('');
  

  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleFechaCreacionChange = (event) => {
    setFechaCreacion(event.target.value);
  };

  const handleFechaModificacionChange = (event) => {
    setFechaModificacion(event.target.value);
  };

  const handleCambiarEstadoChange = (event) => {
    setCambiarEstado(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Rol: rol,
      Estado: estado,
      fecha_creacion: fechaCreacion,
      fecha_Modificacion: fechaModificacion,
      Cambiar_Estado: cambiarEstado
    };

    fetch('http://127.0.0.1:8000/api/role', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {


        throw new Error('Error al enviar los datos');
        
       
      }
      return response.json();
    })
    .then(data => {
     /* si los datos se envia redirigir a roles */
      window.location.href = "/roles";
      console.log('Datos enviados exitosamente:', data);
      
    })
    .catch(error => {
      console.error('Error:', error);
     
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl">Agregar Rol</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="rol">
              Rol:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="rol"
              type="text"
              value={rol}
              onChange={handleRolChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="estado">
              Estado:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="estado"
              type="text"
              value={estado}
              onChange={handleEstadoChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fechaCreacion">
              Fecha de Creación:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="fechaCreacion"
              type="date"
              value={fechaCreacion}
              onChange={handleFechaCreacionChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fechaModificacion">
              Fecha de Modificación:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="fechaModificacion"
              type="date"
              value={fechaModificacion}
              onChange={handleFechaModificacionChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="cambiarEstado">
              Cambiar Estado:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="cambiarEstado"
              type="text"
              value={cambiarEstado}
              onChange={handleCambiarEstadoChange}
            />
          </div>

          
           
        
          <button 
            className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick="window.location.href='/roles'"
          >
            Agregar Rol
          </button>

          
          {/* Enlace para cerrar */}
          <Link
            to="/roles"
            className="px-4 py-2 font-bold text-white transition-colors rounded-lg bg-[#414241]  hover:bg-red-700 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cerrar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AgregarRol;
