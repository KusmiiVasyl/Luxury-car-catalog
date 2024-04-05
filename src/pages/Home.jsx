import SideMenu from "../components/SideMenu";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.mainBlock}>
      <SideMenu />
    </div>
  );
};

export default Home;
