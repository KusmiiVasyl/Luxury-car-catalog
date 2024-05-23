import styles from "./RentCarForm.module.css";

const RentCarForm = ({ car }) => {
  return (
    <div className={styles.mainContainer}>
      <h3>Request rent form</h3>
      <div className={`d-flex flex-column flex-sm-row ${styles.carContainer}`}>
        <div className={`d-flex flex-column w-100 ${styles.infoContainer}`}>
          <h6>Your rent car:</h6>
          <p>
            Brand: <span>{car.brand}</span>{" "}
          </p>
          <p>
            Model: <span>{car.model}</span>{" "}
          </p>
          <p>
            Color: <span>{car.color}</span>{" "}
          </p>
          <p>
            Year: <span>{car.year}</span>{" "}
          </p>
          <p>
            Price: <span>{car.price}$/hour</span>{" "}
          </p>
        </div>
        <div className={`d-flex w-100 ${styles.imgContainer}`}>
          <img src={car.img} alt="" />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="">
        </form>
      </div>
    </div>
  );
};

export default RentCarForm;
