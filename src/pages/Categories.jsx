import styles from "./Categories.module.css";
import { useGetData } from "../store";
import { useState } from "react";

const Categories = () => {
  const carsfilterOptions = useGetData((state) => state.filterOptions);
  const [filterOption, setFilterOption] = useState(carsfilterOptions[0].value);

  const handleChange = (e) => {
    setFilterOption(e.target.value);
  };

  return (
    <section id="categories">
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
      </div>
    </section>
  );
};

export default Categories;
