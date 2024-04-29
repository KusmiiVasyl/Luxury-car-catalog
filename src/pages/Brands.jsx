import styles from "./Brands.module.css";
import { useGetData } from "../store";
import { useState } from "react";
import CarCard from "../components/CarCard";

const Brands = () => {
  const carsfilterOptions = useGetData((state) => state.filterOptions);
  const [filterOption, setFilterOption] = useState(carsfilterOptions[0].value);
  const [cars] = useState(useGetData((state) => state.cars));

  const handleChange = (e) => {
    setFilterOption(e.target.value);
  };

  return (
    <section id="brands">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-start align-items-center">
            <select className={styles.filters} onChange={handleChange}>
              {carsfilterOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col d-flex align-items-center justify-content-lg-end justify-content-sm-start">
            <div className={styles.search}>
              <i className="bi bi-search"></i>
              <input type="text" name="search" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="row">
          {filterOption === carsfilterOptions[0].value
            ? cars.map((car) => <CarCard key={car.id} car={car} />)
            : cars
                .filter((car) => car.brand === filterOption)
                .map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      </div>
    </section>
  );
};

export default Brands;
