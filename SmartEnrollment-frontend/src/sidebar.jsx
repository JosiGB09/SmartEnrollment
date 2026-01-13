import { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import { LuHouse, LuUser, LuSettings } from "react-icons/lu";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className="d-flex flex-column border-end"
      style={{
        width: isOpen ? "250px" : "60px",
        transition: "width 0.5s",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa", 
        color: "#212529", 
      }}
    >
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
        {isOpen && <h5 className="m-0 text-dark">Menú</h5>}

        <button
          className="btn btn-sm btn-outline-secondary border-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaChevronLeft /> : <FaBars />}
        </button>
      </div>

      {/* Links */}
      <Nav className="flex-column gap-1 px-2 mt-2">
        <Nav.Link className="sidebar-link d-flex align-items-center gap-3 rounded px-3 py-2">
          <LuHouse size={18} />
          {isOpen && "Inicio"}
        </Nav.Link>

        <Nav.Link className="sidebar-link d-flex align-items-center gap-3 rounded px-3 py-2">
          <LuUser size={18} />
          {isOpen && "Usuarios"}
        </Nav.Link>

        <Nav.Link className="sidebar-link d-flex align-items-center gap-3 rounded px-3 py-2">
          <LuSettings size={18} />
          {isOpen && "Configuración"}
        </Nav.Link>
      </Nav>
    </aside>
  );
}

export default Sidebar;
