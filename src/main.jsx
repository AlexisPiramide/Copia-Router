import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./fragments/App";
import LogIn from "./fragments/LogIn";
import Registro from "./fragments/Registro";
import ListaExamenes from "./fragments/ListaExamenes";


const MainContext = createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LogIn /> },
      { path: "registro", element: <Registro />},
      { path: "examenes", element: <ListaExamenes /> },
    ],
  },
  {
    path: "/admin",
    element: <h1>hola admin</h1>,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
export { MainContext };