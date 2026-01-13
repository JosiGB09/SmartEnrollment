import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { appRoutes } from "./routes/appRoutes.jsx";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
