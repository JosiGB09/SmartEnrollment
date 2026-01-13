import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="d-flex">
      <Sidebar />
      
      <main
        className="flex-grow-1 p-4"
        style={{
            background: "var(--bg-main)",
            color: "var(--text-main)",
        }}
        >

        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
