import styles from "./RentCarItem.module.css";
import { GiCarKey } from "react-icons/gi";

const RentCarItem = ({ car, index }) => {
  return (
    <tr className={styles.rentCarItem}>
      <th scope="row">{index + 1}</th>
      <td>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className="img-fluid"
        />
      </td>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>${car.price.toFixed(0)}</td>
      <td>
        <GiCarKey />
      </td>
      <td>
        <i className="bi bi-trash3"></i>
      </td>
    </tr>
  );
};

export default RentCarItem;
