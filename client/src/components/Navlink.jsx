import { NavLink } from "react-router-dom";

const Navlink = ({page}) => {
  return (
      <NavLink 
        to={`${page === "/" ? "/" : `/${page}`}`}
        className={({ isActive }) => (isActive ? "active" : "")}>
       {page === "/" ? "Home" : page}
      </NavLink>

  );
}
export default Navlink