import { BsSliders } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { PiGarageFill } from "react-icons/pi";
import styles from "./Hearder.module.css";
import userImg from "../images/myFoto.PNG";
import { useStore } from "../store";

const Header = () => {
  const toggleActive = useStore(
    (state) => state.handleToggleActiveHeaderSlideIcon
  );

  return (
    <header>
      <a href="#" className={styles.menu} onClick={toggleActive}>
        <BsSliders />
      </a>
      <div className={styles.userItems}>
        <a href="#" className={styles.icon}>
          <MdFavorite />
          <span className={styles.favorite}>0</span>
        </a>
        <a href="#" className={styles.icon}>
          <PiGarageFill />
          <span className={styles.garage}>0</span>
        </a>
        <div className={styles.avatar}>
          <a href="#">
            <img src={userImg} alt="User Image" />
          </a>
          <div className={styles.user}>
            <span>User Name</span>
            <a href="#">View profile</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
