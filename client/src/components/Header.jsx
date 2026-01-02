import { Link } from "react-router-dom";
import { MobileNavItem, NavItem } from "./Navlink";
import { useAuth } from "../context/auth";
import { useState } from "react";
import UserAvatar from "./avatar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const {user, isloggedin, openLogin, openRegister} = useAuth();
   
  return (
   <header className="bg-white shadow-md sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/contact" label="Contact" />
          <NavItem to="/service" label="Services" />

          {isloggedin ? (
            <UserAvatar userName={user?.userName} />
          ) : (
            <>
              <button
                onClick={openLogin}
                className="text-gray-700 font-medium hover:text-indigo-600 transition"
              >
                Login
              </button>

              <button
                onClick={openRegister}
                className="text-gray-700 font-medium hover:text-indigo-600 transition"
              >
                Register
              </button>
              
            </>
          )}
        </div>

        {/* Mobile Right Section */}
        <div className="md:hidden flex items-center gap-3">

          {!isloggedin && (
            <button
              onClick={openLogin}
              className="px-3 py-1.5 rounded-md bg-indigo-600 
              text-white text-sm font-medium hover:bg-indigo-700 transition"
            >
              Login
            </button>
          )}

          {isloggedin && (
            <UserAvatar userName={user?.userName} />
          )}

          <button
            className="text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          <MobileNavItem to="/" label="Home" setMenuOpen={setMenuOpen} />
          <MobileNavItem to="/about" label="About" setMenuOpen={setMenuOpen} />
          <MobileNavItem to="/contact" label="Contact" setMenuOpen={setMenuOpen} />
          <MobileNavItem to="/service" label="Services" setMenuOpen={setMenuOpen} />

          {isloggedin && (
            <MobileNavItem to="/logout" label="Logout" setMenuOpen={setMenuOpen} />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
