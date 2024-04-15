import SideMenu from "../components/SideMenu";
import Header from "./Header";
import styles from "./MainHub.module.css";
import { useStore } from "../store";
import Home from "./Home";
import { useEffect, useState } from "react";

const MainHub = () => {
  const active = useStore((state) => state.activeHeaderSlideIcon);
  const [cars, setCars] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5173/api/carsData.json");
    const data = await response.json();
    setCars(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.mainBlock}>
      <SideMenu active={active} />
      <div className={styles.banner + (active ? " " + styles.active : "")}>
        <Header />
        <Home cars={cars}/>
      </div>
    </div>
  );
};

export default MainHub;
