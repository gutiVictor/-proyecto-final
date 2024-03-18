import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
// import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";

import Error404 from "./pages/Error404";

import Roles from "./pages/admin/Roles";
import Paginas from "./pages/admin/Paginas";
import Usuarios from "./pages/admin/Usuarios";
import Bitacoras from "./pages/admin/Bitacoras";
import AgregarRol from "./pages/admin/AgregarRol";
import AgregarUsuarios from "./pages/admin/AgregarUsuarios";
import AgregarPaginas from "./pages/admin/AgregarPaginas";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Register />} index /> {/* Página inicial */}
        <Route path="/login" element={<Login />} />

        <Route path="/olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAdmin />}>


          <Route path="roles" element={<Roles />} />
          <Route path="paginas" element={<Paginas />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="bitacoras" element={<Bitacoras />} />

          <Route path="agregarol" element={<AgregarRol />} />
          <Route path="agregarusuarios" element={<AgregarUsuarios />} />
          <Route path="agregarpaginas" element={<AgregarPaginas />} />
        




          <Route path="home"element={<Home />} />

       
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;