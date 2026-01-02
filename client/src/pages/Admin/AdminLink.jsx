import { NavLink } from "react-router";

export const AdminLink = ({ to, label, setOpen }) => (
  <NavLink
    to={to}
    onClick={() => setOpen(false)}
    className={({ isActive }) =>
      `block px-4 py-2 rounded-lg font-medium transition
      ${isActive
        ? "bg-indigo-600 text-white"
        : "text-gray-700 hover:bg-indigo-100"}`
    }
  >
    {label}
  </NavLink>
);