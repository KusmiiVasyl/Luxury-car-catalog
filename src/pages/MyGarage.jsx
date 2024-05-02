import RentCarItem from "../components/RentCarItem";
import { useStore } from "../store";
import styles from "./MyGarage.module.css";

const MyGarage = () => {
  const carsInGarage = useStore((state) => state.carsInGarage);

  return (
    <section id="myGarage" className="myGarage">
      <div className="container-fluid">
        <div className="row mt-3 mb-5">
          <h1>My Garage</h1>
        </div>
        {carsInGarage.length === 0 ? (
          <div className="row">
            <h2>No cars in garage</h2>
          </div>
        ) : (
          <div className="row">
            <div className="table-responsive">
              <table className={`table table-borderless align-middle ${styles.garageCarTable}`}>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col"></th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Year</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price <span className={styles.textPrice}>$/hour</span></th>
                    <th scope="col">Rent</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {carsInGarage.map((car, index) => (
                    <RentCarItem key={car.id} car={car} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyGarage;
