import React, { useState, useEffect } from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
// import { FaUserTie } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          
        })
      });
      if (response.ok) {
        // usuario a la página de inicio de sesión u otra página deseada
        window.location.href = "/login"; // Cambiar la URL según tus necesidades
      } else {
        // Manejar errores de la API
        console.error("Error al cerrar sesión:", response.status);
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="flex justify-between h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 items-center bg-[#818381]">
      {/* usuario */}
      <Link
        to="/"
        className="flex items-center justify-between gap-8 text-white transition-colors rounded-lg hover:bg-secondary-900"
      >
        <IoHomeOutline className="text-[#ebf676]" /> Home
      </Link>

      <div className="flex items-center gap-4">
        <p className="text-gray-300">{currentTime.toLocaleTimeString()}</p>
      </div>
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative p-2 transition-colors rounded-lg hover:bg-secondary-100">
              <RiNotification3Line />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                2
              </span>
            </MenuButton>
          }
          align="end"
          arrow
          transition
          arrowClassName="bg-secondary-100"
          menuClassName="bg-secondary-100 p-4"
        >
          <h1 className="font-medium text-center text-gray-300">
            Notificaciones (2)
          </h1>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="flex items-center flex-1 gap-4 px-4 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900"
            >
              <img
                src="https://images.vexels.com/media/users/3/157512/isolated/preview/d737a872708b488d89d0341ac9b8bc5a-personas-contacto-icono-personas.png"
                className="object-cover w-8 h-8 rounded-full"
              />
              <div className="flex flex-col text-sm">
                <div className="flex items-center justify-between gap-4 text-white">
                  <span>Victor</span>{" "}
                  <span className="text-[8px]">28/02/2024</span>
                </div>
                <p className="text-xs text-gray-500">
                  
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="flex items-center flex-1 gap-4 px-4 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900"
            >
              <RiThumbUpLine className="box-content p-2 text-blue-700 bg-blue-200 rounded-full" />
              <div className="flex flex-col text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo like</span>{" "}
                  <span className="text-[8px]">28/02/2024</span>
                </div>
                <p className="text-xs text-gray-500">
                  Victor Gutierrez..
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="flex items-center flex-1 gap-4 px-4 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900"
            >
              <RiChat3Line className="box-content p-2 text-yellow-700 bg-yellow-200 rounded-full" />
              <div className="flex flex-col text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">28/02/2024</span>
                </div>
                <p className="text-xs text-gray-500">
                  Victor Gutierrez...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="flex justify-center p-0 cursor-default hover:bg-transparent">
            <Link
              to="/"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center p-2 transition-colors rounded-lg gap-x-2 hover:bg-red-100">
              <img
                src="https://images.vexels.com/media/users/3/157512/isolated/preview/d737a872708b488d89d0341ac9b8bc5a-personas-contacto-icono-personas.png"
                className="object-cover w-6 h-6 rounded-full"
              />
              <span className="text-white">Victor Gutierrez</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/perfil"
              className="flex items-center flex-1 px-6 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
            >
              <img
                src="https://images.vexels.com/media/users/3/157512/isolated/preview/d737a872708b488d89d0341ac9b8bc5a-personas-contacto-icono-personas.png"
                className="object-cover w-8 h-8 rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Victor</span>
                <span className="text-xs text-gray-500">Victor@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="flex items-center flex-1 px-6 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
            >
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>

          {/* cerra sesión */}
          <MenuItem className="p-0 hover:bg-transparent">
        <button
          onClick={handleLogout}
          className="flex items-center flex-1 px-6 py-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
        >
          <RiLogoutCircleRLine /> Cerrar sesión
        </button>




      </MenuItem>
        </Menu>
      </nav>

    </header>
  );
};

export default Header;
