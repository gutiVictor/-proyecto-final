import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DiAndroid } from "react-icons/di";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/role');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
          
        }
        const data = await response.json();
        setRoles(data);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = roles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">Roles</div>
        <Link
          to="/agregarol"
          className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg bg-[#414241] hover:bg-blue-700"
        >
          <DiAndroid className="text-[#4791ff]" /> Agregar
        </Link>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            {roles.length > 0 && Object.keys(roles[0]).map((key) => (
              <th key={key} className="px-4 py-2">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((rol, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              {Object.values(rol).map((value, i) => (
                <td key={i} className="px-4 py-2 border">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {Array.from({ length: Math.ceil(roles.length / itemsPerPage) }).map((_, index) => (
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

export default Roles;
