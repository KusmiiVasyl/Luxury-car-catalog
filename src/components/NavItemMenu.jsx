import styles from "./NavItemMenu.module.css";

const NavItemMenu = ({ item, navOnClick }) => {
  return (
    <li
      key={item.id}
      className={item.active ? styles.active : ""}
      onClick={() => navOnClick(item.id)}
      title={item.name}
    >
      <a href={item.path}>
        <span>
          <i className={item.icon}></i>
        </span>
        <span>{item.name}</span>
      </a>
    </li>
  );
};

export default NavItemMenu;
