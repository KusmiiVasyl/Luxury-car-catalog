import CarSwiper from "../components/CarSwiper";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.active}>
      <div>
        <div>
          <CarSwiper />
        </div>
      </div>
    </section>
  );
};

export default Home;
