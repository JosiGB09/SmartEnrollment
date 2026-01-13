
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import { LuHouse, LuUser, LuSettings } from "react-icons/lu";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <aside
      style={{
        width: isOpen ? "240px" : "70px",
        transition: "width 0.3s",
        minHeight: "100vh",
        background: "#f4f5f7",
        borderRight: "1px solid #ddd",
      }}
    >
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between p-3">
        {isOpen && <strong>Dashboard</strong>}
        <button
          className="btn btn-sm btn-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaChevronLeft /> : <FaBars />}
        </button>
      </div>

      {/* Links */}
      <Nav className="flex-column gap-1 px-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-3 rounded px-3 py-2
             ${isActive ? "bg-primary text-white" : "text-dark"}`
          }
        >
          <LuHouse />
          {isOpen && "Inicio"}
        </NavLink>

        <NavLink
          to="/usuarios"
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-3 rounded px-3 py-2
             ${isActive ? "bg-primary text-white" : "text-dark"}`
          }
        >
          <LuUser />
          {isOpen && "Usuarios"}
        </NavLink>

        <NavLink
          to="/configuracion"
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-3 rounded px-3 py-2
             ${isActive ? "bg-primary text-white" : "text-dark"}`
          }
        >
          <LuSettings />
          {isOpen && "Configuración"}
        </NavLink>
      </Nav>
    </aside>
  );
}

export default Sidebar;
