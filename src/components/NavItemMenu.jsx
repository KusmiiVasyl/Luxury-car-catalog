import { NavLink } from "react-router-dom";
import styles from "./NavItemMenu.module.css";

const NavItemMenu = ({ item, navOnClick }) => {
  return (
    <NavLink
      className={item.active ? styles.active : ""}
      to={item.path}
      onClick={() => navOnClick(item.id)}
      title={item.name}
    >
      <span>
        <i className={item.icon}></i>
      </span>
      <span>{item.name}</span>
    </NavLink>
  );
};

export default NavItemMenu;
