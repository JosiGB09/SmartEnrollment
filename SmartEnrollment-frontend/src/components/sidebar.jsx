
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBars, FaChevronLeft,FaMoon, FaSun } from "react-icons/fa";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { appRoutes } from "../routes/appRoutes";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <aside
      style={{
        width: isOpen ? "240px" : "90px",
        transition: "width 0.3s",
        minHeight: "100vh",
        background: "var(--bg-sidebar)",
        color: "var(--text-main)",
        borderRight: "1px solid #ccc",
      }}
    >


      {/* Header */}
      <div className="d-flex align-items-center justify-content-between p-3 gap-2">
        {isOpen && <strong>Dashboard</strong>}

        <div className="d-flex gap-2">
          <button
            className="btn btn-sm btn-light"
            onClick={toggleTheme}
            title="Cambiar tema"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <button
            className="btn btn-sm btn-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaChevronLeft /> : <FaBars />}
          </button>
        </div>
      </div>


      {/* Links */}
      <Nav className="flex-column gap-1 px-2">
        {appRoutes
          .filter((route) => route.showInMenu)
          .map((route) => {
            const Icon = route.icon;

            return (
              <NavLink
                to={route.path}
                key={route.path}
                className={({ isActive }) =>
                  `sidebar-link d-flex align-items-center gap-3 rounded px-3 py-2
                  ${isActive ? "active-link" : ""}`
                }
              >
                <route.icon size={18} />
                {isOpen && route.label}
              </NavLink>

            );
          })}
      </Nav>
      
    </aside>
  );
}

export default Sidebar;
