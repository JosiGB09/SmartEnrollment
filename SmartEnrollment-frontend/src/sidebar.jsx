import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import './sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="d-flex">
      {/* */}
      <div
        className={`bg-dark text-white p-3 ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
        style={{
          width: isOpen ? "250px" : "60px",
          minHeight: "100vh",
          transition: "width 0.3s",
        }}
      >
        <h4 className="text-center">{isOpen ? "Menú" : "M"}</h4>
        <Nav className="flex-column mt-4">
          <Nav.Link href="#" className="text-white">Inicio</Nav.Link>
          <Nav.Link href="#" className="text-white">Usuarios</Nav.Link>
          <Nav.Link href="#" className="text-white">Config</Nav.Link>
        </Nav>

        <Button
          variant="secondary"
          onClick={toggleSidebar}
          className="mt-4 w-100"
        >
          {isOpen ? "Cerrar" : "Abrir"}
        </Button>
      </div>

      {/*  */}
      <div className="flex-grow-1 p-3">
        <h2>Cont</h2>
        <p>Aquí va el contenido </p>
      </div>
    </div>
  );
}

export default Sidebar;
