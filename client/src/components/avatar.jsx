import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const UserAvatar = ({ userName }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { logoutUser } = useAuth(); 

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutUser();         
    setOpen(false);
    navigate("/");    
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 flex items-center justify-center 
        rounded-full bg-indigo-600 text-white 
        font-semibold cursor-pointer select-none"
        title={userName}
      >
        {userName?.charAt(0).toUpperCase()}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white 
        border rounded-lg shadow-lg z-50">

          <div className="px-4 py-2 text-sm text-gray-600 border-b">
            {userName}
          </div>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm 
            text-red-600 hover:bg-red-50 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
