import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AgregarPaginas = () => {
  const [correo, setCorreo] = useState('');
  const [estado, setEstado] = useState('');
  const [fecha_creacion, setFecha_creacion] = useState('');
  const [id_rol, setId_rol] = useState('');
  const [fecha_Modificacion, setFecha_Modificacion] = useState('');
  const [cambiar_Estado, setCambiar_Estado] = useState('');

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleFechaCreacionChange = (event) => {
    setFecha_creacion(event.target.value);
  };

  const handleIdRolChange = (event) => {
    setId_rol(event.target.value);
  };

  const handleFechaModificacionChange = (event) => {
    setFecha_Modificacion(event.target.value);
  };

  const handleCambiarEstadoChange = (event) => {
    setCambiar_Estado(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      correo: correo,
      estado: estado,
      fecha_creacion: fecha_creacion,
      id_rol: id_rol,
      fecha_Modificacion: fecha_Modificacion,
      cambiar_Estado: cambiar_Estado
    };

    console.log('Datos enviados:', data);

    fetch('http://127.0.0.1:8000/api/usuario', {
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
      /* si los datos se envia redirigir a usuarios */
      window.location.href = "/usuarios";
      console.log('Datos enviados exitosamente:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl">Agregar Usuarios</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="correo">
              Correo:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="correo"
              type="text"
              value={correo}
              onChange={handleCorreoChange}
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
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fecha_creacion">
              Fecha de Creación:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="fecha_creacion"
              type="date"
              value={fecha_creacion}
              onChange={handleFechaCreacionChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="id_rol">
              ID de Rol:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="id_rol"
              type="text"
              value={id_rol}
              onChange={handleIdRolChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fecha_Modificacion">
              Fecha de Modificación:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="fecha_Modificacion"
              type="date"
              value={fecha_Modificacion}
              onChange={handleFechaModificacionChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="cambiar_Estado">
              Cambiar Estado:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="cambiar_Estado"
              type="text"
              value={cambiar_Estado}
              onChange={handleCambiarEstadoChange}
              required
            />
          </div>
          <button
            className="px-4 py-2 mr-2 font-bold text-white transition-colors rounded-lg bg-[#9ce29c] hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Agregar Página
          </button>
          {/* Enlace para cerrar */}
          <Link
            to="/usuarios"
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

export default AgregarPaginas;
