import styles from "./Categories.module.css";
import { useGetData } from "../store";

const Categories = () => {
  const carsFilterItems = useGetData((state) => state.filterItems);

  return (
    <section id="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <ul className={styles.filters}></ul>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
