import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AgregarPaginas = () => {
  const [url, setUrl] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleFechaCreacionChange = (event) => {
    setFechaCreacion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      url: url,
      Nombre_de_la_pagina: nombre,
      Descripcion: descripcion,
      Fecha_creacion: fechaCreacion
    };

    console.log('Datos enviados:', data);

    fetch('http://127.0.0.1:8000/api/pagina', {
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

      /* silos datos se envia redirigir a paginas */
      window.location.href = "/paginas";
      console.log('Datos enviados exitosamente:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl">Agregar Páginas</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="url">
              URL:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="url"
              type="text"
              value={url}
              onChange={handleUrlChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nombre">
              Nombre de la página:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="nombre"
              type="text"
              value={nombre}
              onChange={handleNombreChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="descripcion">
              Descripción:
            </label>
            <textarea
              className="w-full h-24 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="descripcion"
              value={descripcion}
              onChange={handleDescripcionChange}
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
          <button
            className="px-4 py-2 mr-2 font-bold text-white transition-colors rounded-lg bg-[#9ce29c] hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Agregar Página
          </button>
          {/* Enlace para cerrar */}
          <Link
            to="/paginas"
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
