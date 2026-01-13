import { LuHouse, LuUser, LuSettings, LuBarcode  } from "react-icons/lu";

import Home from "../views/home";
import User from "../views/users";
import Settings from "../views/settings";
import Reports from "../views/reports";
export const appRoutes = [
  {
    path: "/",
    element: <Home />,
    label: "Inicio",
    icon: LuHouse,
    showInMenu: true,
  },
  {
    path: "/usuarios",
    element: <User />,
    label: "Usuarios",
    icon: LuUser,
    showInMenu: true,
  },
  {
    path: "/configuracion",
    element: <Settings />,
    label: "Configuración",
    icon: LuSettings,
    showInMenu: true,
  },
  {
    path: "/reportes",
    element: <Reports />,
    label: "Reportes",
    icon: LuBarcode,
    showInMenu: true, 
  },
];
