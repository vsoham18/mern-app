import { useAuth } from "../context/auth.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

const AuthModel = () => {
  const { authModal, closeAuthModal } = useAuth();

  if (!authModal) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        /> 

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        {authModal === "login" && <Login />}
        {authModal === "register" && <Register />}
      </div>
    </>
  );
};

export default AuthModel;
