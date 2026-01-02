import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/auth.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import router from "./router.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick={false}
      pauseOnHover
      draggable
      theme="light"
      transition={Bounce}
      className="toast-body"
    />
  </AuthProvider>
);
