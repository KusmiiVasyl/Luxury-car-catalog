import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../Header/Header";
import styles from "./MainHub.module.css";
import { useStore, useGetData } from "../../store";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "../NotFound/NotFound";
import CarDetailsModal from "../../components/Modals/CarDetailsModal";
import { ToastContainer, Zoom } from "react-toastify";

const MainHub = () => {
  const active = useStore((state) => state.activeHeaderSlideIcon);
  const isActiveModal = useStore((state) => state.isActiveModal);
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
        {isActiveModal && <CarDetailsModal />}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={4}
        theme="dark"
      />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
    </div>
  );
};

export default MainHub;
