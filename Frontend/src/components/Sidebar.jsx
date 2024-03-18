import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
/*   RiBarChart2Line, */
  // RiEarthLine,
  // RiCustomerService2Line,
  // RiCalendarTodoLine,
  RiLogoutCircleRLine,
  // RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
 
} from "react-icons/ri";

import { DiAndroid } from "react-icons/di";
import { FaUserTie } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import { MdOutlineRestorePage } from "react-icons/md";


const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-[#414241] p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="mb-10 text-2xl font-bold text-center text-white">
            Admin<span className="text-4xl text-[#4791ff] hover:">.</span>
          </h1>

          <h2 className="mb-10 text-2xl font-bold text-center text-white">
            Dashboard<span className="text-4xl text-[#4791ff]">.</span>
          </h2>
          <ul>
            <li>


              {/* roles */}
              <Link
                to="/roles"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <DiAndroid className="text-[#4791ff]" /> Roles
              </Link>

          {/* usuario */}
              <Link
                to="/usuarios"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <FaUserTie className="text-[#4791ff]" /> Usuario
              </Link>



          {/* bitacora */}
              <Link
                to="/bitacoras"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <GiCompass  className="text-[#4791ff]" /> Bitácoras
              </Link>


          {/* paginas */}
              <Link
                to="/paginas"
                className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
              >
                <MdOutlineRestorePage className="text-[#4791ff]" /> Páginas
              </Link>




            </li>
            <li>
              
              <ul
                className={` ${
                  showSubmenu ? "h-[130px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-[#4791ff] before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-white-100 text-white transition-colors hover:text-gray-500"
                  >
                   Categoria
                  </Link>
                </li>
                <li>
                 
                </li>
                <li>
                 
                </li>
              </ul>
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
          </ul>
        </div>
        <nav>


          {/* cerrar sesion */}
          <Link
            to="/home"
            className="flex items-center gap-4 px-4 py-2 text-white transition-colors rounded-lg hover:bg-secondary-900"
          >
            <RiLogoutCircleRLine className="text-[#4791ff]" /> Agradecimientos
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed z-50 p-3 text-black rounded-full xl:hidden bottom-4 right-4 bg-[#4791ff]"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;