import SideMenu from "../components/SideMenu";
import Header from "./Header";
import styles from "./MainHub.module.css";
import { useStore, useGetData } from "../store";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const MainHub = () => {
  const active = useStore((state) => state.activeHeaderSlideIcon);
  const getData = useGetData();

  useEffect(() => {
    getData.getCars();
  }, []);

  return (
    <div className={styles.mainBlock}>
      <SideMenu active={active} />
      <div className={styles.banner + (active ? " " + styles.active : "")}>
        <Header />
        {getData.cars && getData.cars.length > 0 && <Outlet />}
        {/* TODO Loading & Error page */}
      </div>
    </div>
  );
};

export default MainHub;
