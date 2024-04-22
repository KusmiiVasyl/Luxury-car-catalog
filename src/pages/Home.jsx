import { useEffect } from "react";
import CarSwiper from "../components/CarSwiper";
import { useGetData } from "../store";
import styles from "./Home.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import CarCard from "../components/CarCard";

const Home = () => {
  const getData = useGetData();

  useEffect(() => {
    getData.getCars();
  }, []);

  if (getData.loading) {
    return <div className="loading">Loading ...</div>;
  }

  if (getData.error) {
    return <div className="error">Error: {getData.errorData}</div>;
  }

  return (
    <section id="home" className={styles.active}>
      <div className="container-fluid">
        <div className="row">
          <CarSwiper cars={getData.cars} />
        </div>
      </div>
      <div className="row mt-2 mb-4">
        <div className="col-lg-6">
          <h2 className={styles.sectionTitle}>Rent cars on promotion</h2>
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center">
          <a href="#" className={styles.viewMore}>
            <div>View more cars</div>
            <div className="ms-2">
              <FaArrowRightLong />
            </div>
          </a>
        </div>
      </div>
      <div className="row">
        {getData.cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default Home;
