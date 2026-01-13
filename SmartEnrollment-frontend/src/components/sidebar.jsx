import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBars, FaChevronLeft, FaMoon, FaSun } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { appRoutes } from "../routes/appRoutes";

function Sidebar({ isOpen, setIsOpen }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  return (
    <>
      {/* Overlay mobile */}
      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        />
      )}

      <aside
        style={{
          width: isOpen ? isMobile ? "200px" : "240px" : isMobile ? "0px" : "90px",
          minHeight: "100vh",
          background: "var(--bg-sidebar)",
          color: "var(--text-main)",
          borderRight: "1px solid #ccc",
          overflow: "hidden",
          position: isMobile ? "fixed" : "relative",
          top: 0,
          left: 0,
          zIndex: 1000,
          transition: "width 0.3s",
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between p-3 gap-2">
          {isOpen && <strong>Dashboard</strong>}

          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-light"
              onClick={toggleTheme}
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
            .filter((r) => r.showInMenu)
            .map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                onClick={() => isMobile && setIsOpen(false)}
                className={({ isActive }) =>
                  `sidebar-link d-flex align-items-center gap-3 rounded px-3 py-2
                   ${isActive ? "active-link" : ""}`
                }
              >
                <route.icon size={18} />
                {isOpen && route.label}
              </NavLink>
            ))}
        </Nav>
      </aside>
    </>
  );
}

export default Sidebar;
