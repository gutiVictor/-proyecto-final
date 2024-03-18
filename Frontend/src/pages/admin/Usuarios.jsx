import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [filtroCorreo, setFiltroCorreo] = useState('');
  const [nuevoEstado, setNuevoEstado] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/usuario');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = usuarios.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const filtrarUsuariosPorCorreo = (usuario) => {
    return usuario.correo.toLowerCase().includes(filtroCorreo.toLowerCase());
  };

  const cambiarEstadoUsuario = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/usuario/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: nuevoEstado }),
      });
      if (!response.ok) {
        throw new Error('Error al cambiar el estado del usuario');
      }
      const updatedUsuarios = usuarios.map((usuario) => {
        if (usuario.id === id) {
          return { ...usuario, estado: nuevoEstado };
        }
        return usuario;
      });
      setUsuarios(updatedUsuarios);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">Usuarios</div>
        <Link
          to="/AgregarUsuarios"
          className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg bg-[#414241] hover:bg-blue-700"
        >
          <FaUserTie className="text-[#4791ff]" /> Agregar
        </Link>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filtrar por Correo"
          value={filtroCorreo}
          onChange={(e) => setFiltroCorreo(e.target.value)}
          className="px-4 py-2 border"
        />
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            {usuarios.length > 0 && Object.keys(usuarios[0]).map((key) => (
              <th key={key} className="px-4 py-2">{key}</th>
            ))}
            <th className="px-4 py-2">Cambiar Estado</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.filter(filtrarUsuariosPorCorreo).map((usuario, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              {Object.values(usuario).map((value, i) => (
                <td key={i} className="px-4 py-2 border">{value}</td>
              ))}
              <td className="px-4 py-2 border">
                <select
                  value={nuevoEstado}
                  onChange={(e) => setNuevoEstado(e.target.value)}
                  className="px-2 py-1 border"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
                <button
                  onClick={() => cambiarEstadoUsuario(usuario.id)}
                  className="px-2 py-1 ml-2 text-white bg-blue-500 rounded-md"
                >
                  Cambiar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {Array.from({ length: Math.ceil(usuarios.length / itemsPerPage) }).map((_, index) => (
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

export default Usuarios;
