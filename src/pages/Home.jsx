import CarsSwiper from "../components/CarsSwiper";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.active}>
      <div>
        <div>
          <CarsSwiper />
        </div>
      </div>
    </section>
  );
};

export default Home;
