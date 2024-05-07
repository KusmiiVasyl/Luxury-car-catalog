import { VscChromeClose } from "react-icons/vsc";
import styles from "./Modal.module.css";
import { useStore } from "../../store";

const Modal = () => {
  const isActive = useStore((state) => state.isActiveModal);
  const car = useStore((state) => state.carForModal);
  const toggleActiveModal = useStore((state) => state.handleToggleActiveModal);

  return (
    <div className={`${styles.modal} ${isActive ? styles.active : ""}`}>
      <div className="d-flex flex-column">
        <div className={styles.close}>
          <VscChromeClose onClick={toggleActiveModal} />
        </div>
        <div className={styles.content}>{car?.brand}</div>
      </div>
    </div>
  );
};

export default Modal;
