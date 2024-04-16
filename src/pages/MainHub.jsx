import SideMenu from "../components/SideMenu";
import Header from "./Header";
import styles from "./MainHub.module.css";
import { useStore } from "../store";
import Home from "./Home";

const MainHub = () => {
  const active = useStore((state) => state.activeHeaderSlideIcon);

  return (
    <div className={styles.mainBlock}>
      <SideMenu active={active} />
      <div className={styles.banner + (active ? " " + styles.active : "")}>
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default MainHub;
