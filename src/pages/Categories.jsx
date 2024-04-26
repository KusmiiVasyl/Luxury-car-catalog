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
          <div className="col-lg-8">
            <select className={styles.filters} onChange={handleChange}>
              {carsfilterOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
