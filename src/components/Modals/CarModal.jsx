import { VscChromeClose } from "react-icons/vsc";
import styles from "./CarModal.module.css";
import { useStore } from "../../store";
import CarDetails from "../CarDetails/CarDetails";

const CarModal = () => {
  const carForDetail = useStore((state) => state.carForDetail);
  const carForRent = useStore((state) => state.carForRent);
  const chooseModalContent = useStore((state) => state.chooseModalContent);
  const toggleActiveModal = useStore((state) => state.handleToggleActiveModal);

  return (
    <div className={styles.modal}>
      <div className="d-flex flex-column">
        <div className={styles.close}>
          <span>
            <VscChromeClose onClick={toggleActiveModal} />
          </span>
        </div>
        <div className={styles.content}>
          {chooseModalContent.carDetail && <CarDetails car={carForDetail} />}
          {chooseModalContent.rentCar && <h4>Rent car</h4>}
        </div>
      </div>
    </div>
  );
};

export default CarModal;
