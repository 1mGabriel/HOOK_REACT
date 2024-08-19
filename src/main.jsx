import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Contact from "./routes/Contact.jsx";
import Home from "./routes/Home.jsx";
import HookUseContext  from "./components/HookUseContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // componente base:
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HookUseContext>
      <RouterProvider router={router} />
    </HookUseContext>
  </StrictMode>
);
