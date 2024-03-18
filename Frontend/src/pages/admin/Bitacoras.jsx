import React, { useState, useEffect } from 'react';

const Bitacoras = () => {
  const [bitacoras, setBitacoras] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/bitacora');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setBitacoras(data);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bitacoras.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-4 text-3xl">Bitácoras</div>
      {bitacoras.length > 0 ? (
        <>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                {Object.keys(bitacoras[0]).map((key) => (
                  <th key={key} className="px-4 py-2">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((bitacora, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {Object.values(bitacora).map((value, i) => (
                    <td key={i} className="px-4 py-2 border">{value}</td>
                  ))}
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
        </>
      ) : (
        <p>No hay datos para mostrar.</p>
      )}
    </div>
  );
};

export default Bitacoras;
