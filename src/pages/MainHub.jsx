import SideMenu from "../components/SideMenu";
import Header from "./Header";
import styles from "./MainHub.module.css";
import { useStore } from "../store";
import { Outlet } from "react-router-dom";

const MainHub = () => {
  const active = useStore((state) => state.activeHeaderSlideIcon);

  return (
    <div className={styles.mainBlock}>
      <SideMenu active={active} />
      <div className={styles.banner + (active ? " " + styles.active : "")}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainHub;
