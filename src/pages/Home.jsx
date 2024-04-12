import SideMenu from "../components/SideMenu";
import Header from "./Header";
import styles from "./Home.module.css";
import { useStore } from "../store";

const Home = () => {
  const active = useStore((state) => state.activeHeaderSlideIcon);

  return (
    <div className={styles.mainBlock}>
      <SideMenu active={active} />
      <div className={styles.banner + (active ? " " + styles.active : "")}>
        <Header />
      </div>
    </div>
  );
};

export default Home;
