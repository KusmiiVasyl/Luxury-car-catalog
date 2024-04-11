import { useState } from "react";
import SideMenu from "../components/SideMenu";
import Header from "./Header";
import styles from "./Home.module.css";

const Home = () => {
  const [active, setActive] = useState(false);

  const handleToggleActive = () => {
    setActive(!active);
  };

  return (
    <div className={styles.mainBlock}>
      <SideMenu active={active} />
      <div className={styles.banner + (active ? " " + styles.active : "")}>
        <Header toggleActive={handleToggleActive} />
      </div>
    </div>
  );
};

export default Home;
