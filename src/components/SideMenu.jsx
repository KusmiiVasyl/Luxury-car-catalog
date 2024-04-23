import styles from "./SideMenu.module.css";
import { IoCarSport } from "react-icons/io5";
import Social from "./Social";
import { useStore } from "../store";
import NavItemMenu from "./NavItemMenu";
import { navItemsList } from "../data/navItemsList";
import { useState } from "react";

const SideMenu = () => {
  const isExpandSideMenu = useStore((state) => state.activeHeaderSlideIcon);
  const [navItems, setNavItems] = useState(navItemsList);

  const handleNavItemOnClick = (id) => {
    setNavItems(
      navItems.map((item) => {
        if (item.id === id) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      })
    );
  };

  return (
    <div
      className={
        styles.sideMenuBlock + (isExpandSideMenu ? " " + styles.active : "")
      }
    >
      <a href="" className={styles.logo}>
        <IoCarSport />
        <span>Luxury car</span>
      </a>
      <ul className={styles.nav}>
        {navItems.map((item) => (
          <NavItemMenu
            key={item.id}
            item={item}
            navOnClick={handleNavItemOnClick}
          />
        ))}
      </ul>
      <Social />
    </div>
  );
};

export default SideMenu;
