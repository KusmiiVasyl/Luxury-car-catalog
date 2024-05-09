import { VscChromeClose } from "react-icons/vsc";
import styles from "./CarDetailsModal.module.css";
import { useStore } from "../../store";
import CarDetails from "../CarDetails/CarDetails";

const CarDetailsModal = () => {
  const car = useStore((state) => state.carForModal);
  const toggleActiveModal = useStore((state) => state.handleToggleActiveModal);

  return (
    <div className={styles.modal}>
      <div className="d-flex flex-column">
        <div className={styles.close}>
          <VscChromeClose onClick={toggleActiveModal} />
        </div>
        <div className={styles.content}>
          <CarDetails car={car} />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;
