import { BsSliders } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { PiGarageFill } from "react-icons/pi";
import styles from "./Hearder.module.css";
import userImg from "../../images/myFoto.PNG";
import { useStore } from "../../store";

const Header = () => {
  const toggleActive = useStore(
    (state) => state.handleToggleActiveHeaderSlideIcon
  );
  const countFavoriteCars = useStore((state) => state.favoriteCars.length);
  const countCarsInGarage = useStore((state) => state.carsInGarage.length);

  return (
    <header>
      <div className={styles.menu} onClick={toggleActive}>
        <BsSliders />
      </div>
      <div className={styles.userItems}>
        <div className={styles.icon}>
          <MdFavorite />
          <span className={styles.favorite}>{countFavoriteCars}</span>
        </div>
        <div className={styles.icon}>
          <PiGarageFill />
          <span className={styles.garage}>{countCarsInGarage}</span>
        </div>
        <div className={styles.avatar}>
          <div>
            <img src={userImg} alt="User Image" />
          </div>
          <div className={styles.user}>
            <span>User Name</span>
            <span>View profile</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
