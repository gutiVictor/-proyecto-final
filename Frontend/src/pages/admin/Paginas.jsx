import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MdOutlineRestorePage } from "react-icons/md";

const Paginas = () => {
  const [paginas, setPaginas] = useState([]);
  const [filtroURL, setFiltroURL] = useState('');
  const [filtroNombre, setFiltroNombre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/pagina');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setPaginas(data);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paginas.slice(indexOfFirstItem, indexOfLastItem);

  const filtrarPaginas = (pagina) => {
    return (
      pagina.url.toLowerCase().includes(filtroURL.toLowerCase()) &&
      pagina.Nombre_de_la_pagina.toLowerCase().includes(filtroNombre.toLowerCase())
    );
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">Páginas</div>
        <Link
          to="/AgregarPaginas"
          className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg bg-[#414241] hover:bg-blue-700"
        >
          <MdOutlineRestorePage className="text-[#4791ff]" /> Agregar
        </Link>
      </div>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Filtrar por URL"
          value={filtroURL}
          onChange={(e) => setFiltroURL(e.target.value)}
          className="px-4 py-2 border"
        />
        <input
          type="text"
          placeholder="Filtrar por Nombre de la Página"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
          className="px-4 py-2 border"
        />
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID Página</th>
            <th className="px-4 py-2">URL</th>
            <th className="px-4 py-2">Nombre de la Página</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Fecha Creación</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.filter(filtrarPaginas).map((pagina) => (
            <tr key={pagina.id} className="bg-white">
              <td className="px-4 py-2 border">{pagina.id}</td>
              <td className="px-4 py-2 border">{pagina.url}</td>
              <td className="px-4 py-2 border">{pagina.Nombre_de_la_pagina}</td>
              <td className="px-4 py-2 border">{pagina.Descripcion}</td>
              <td className="px-4 py-2 border">{pagina.Fecha_creacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className="mx-1">
              <button
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-400`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Paginas;
