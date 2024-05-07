import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../Header/Header";
import styles from "./MainHub.module.css";
import { useStore, useGetData } from "../../store";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "../NotFound/NotFound";
import Modal from "../../components/Modal/Modal";

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
        {getData.loading && <div className={styles.loading}>Loading...</div>}
        {getData.error && <NotFound />}
        {getData.success && <Modal />}
      </div>
    </div>
  );
};

export default MainHub;