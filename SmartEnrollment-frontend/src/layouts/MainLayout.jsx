import { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaBars } from "react-icons/fa";

function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex-grow-1">
        {/* Header mobile */}
        <header className="d-md-none p-2 border-bottom">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </header>

        <main className="p-3">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;

