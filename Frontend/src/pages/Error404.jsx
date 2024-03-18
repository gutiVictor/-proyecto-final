import React from "react";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-red-600">Error 404</h1>
        <p className="text-lg text-gray-800">La página que buscas no existe.</p>
      </div>
    </div>
  );
};

export default Error404;
