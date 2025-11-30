import { NavLink } from "react-router-dom";

const Navlink = ({page}) => {
  return (
      <NavLink 
        to={`${page === "/" ? "/" : `/${page}`}`}
        className={({ isActive }) => (isActive ? "active" : "")}>
       {page === "/" ? "Home" : page.charAt(0).toUpperCase() + page.slice(1)}
      </NavLink>

  );
}
export default Navlink