import CarSwiper from "../components/CarSwiper";
import styles from "./Home.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <section id="home" className={styles.active}>
      <div className="container-fluid">
        <div className="row">
          <CarSwiper />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h2 className={styles.sectionTitle}>Rent cars on promotion</h2>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <a href="#" className={styles.viewMore}>
            <div className="d-flex">
              <div>View more cars</div>
              <div className="ms-2">
                <FaArrowRightLong />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
