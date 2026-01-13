import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function Home() {
  return <h2>Inicio</h2>;
}

function Users() {
  return <h2>Usuarios</h2>;
}

function Settings() {
  return <h2>Configuración</h2>;
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/configuracion" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
