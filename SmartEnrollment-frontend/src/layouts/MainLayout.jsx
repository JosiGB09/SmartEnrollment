import { useState } from "react";
import Sidebar from "../components/sidebar";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div
        className="flex-grow-1"
        style={{
            background: "var(--bg-main)",
            color: "var(--text-main)",
            minHeight: "100vh",
        }}
        >

        {/* Header mobile */}
        <header
            className="d-md-none p-2"
            style={{ borderBottom: "1px solid var(--text-main)" }}
            >

          <button
            className="btn btn-outline-secondary"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </header>

        <main
        className="p-3"
        style={{
            background: "var(--bg-main)",
            color: "var(--text-main)",
        }}
        >
        <Outlet />
        </main>

      </div>
    </div>
  );
}

export default MainLayout;

