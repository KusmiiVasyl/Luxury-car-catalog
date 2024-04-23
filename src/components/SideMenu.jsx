import styles from "./SideMenu.module.css";
import { IoCarSport, IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";
import Social from "./Social";
import { useStore } from "../store";

const SideMenu = () => {
const active = useStore((state) => state.activeHeaderSlideIcon);

  return (
    <div className={styles.sideMenuBlock + (active ? " " + styles.active : "")}>
      <a href="" className={styles.logo}>
        <IoCarSport />
        <span>Luxury car</span>
      </a>
      <ul className={styles.nav}>
        <li>
          <a href="#">
            <span>
              <IoHomeOutline />
            </span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <TbCategory2 />
            </span>
            <span>Categories</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <MdOutlineFavoriteBorder />
            </span>
            <span>My Favorites</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <MdOutlineShoppingBag />
            </span>
            <span>My Garage</span>
          </a>
        </li>
      </ul>
      <Social />
    </div>
  );
};

export default SideMenu;
