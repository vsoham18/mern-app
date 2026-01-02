import { NavLink } from "react-router-dom";

export const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `font-medium transition ${
        isActive
          ? "text-indigo-600"
          : "text-gray-700 hover:text-indigo-600"
      }`
    }
  >
    {label}
  </NavLink>
);

export const MobileNavItem = ({ to, label, setMenuOpen }) => (
  <NavLink
    to={to}
    onClick={() => setMenuOpen(false)}
    className={({ isActive }) =>
      `block font-medium ${
        isActive
          ? "text-indigo-600"
          : "text-gray-700 hover:text-indigo-600"
      }`
    }
  >
    {label}
  </NavLink>
);


