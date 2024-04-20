import styles from "./CarCard.module.css";
import { FaHeart } from "react-icons/fa6";

const CarCard = ({ car }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className={styles.carCard}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className="img-fluid"
        />
        <a href="#" className={styles.like}>
          <FaHeart />
        </a>
        <div className="carFeature">
          <span className="carType"></span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
