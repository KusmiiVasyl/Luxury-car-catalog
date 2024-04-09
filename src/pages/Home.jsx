import SideMenu from "../components/SideMenu";
import Header from "./Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.mainBlock}>
      <SideMenu />
      <div className={styles.banner}>
        <Header/>
      </div>
    </div>
  );
};

export default Home;
