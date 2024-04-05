import styles from "./SideMenu.module.css";
import { IoCarSport, IoHomeOutline } from "react-icons/io5";

const SideMenu = () => {
  return (
    <div className={styles.sideMenuBlock}>
      <a href="" className="logo">
        <IoCarSport />
        <span>Luxury car</span>
      </a>
      <ul className="nav">
        <li>
          <IoHomeOutline />
          Home
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
