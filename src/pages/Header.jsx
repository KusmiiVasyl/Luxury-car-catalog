import { BsSliders } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { IoBagSharp } from "react-icons/io5";
import styles from "./Hearder.module.css";
import userImg from "../images/myFoto.PNG";

const Header = ({toggleActive}) => {
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
          <IoBagSharp />
          <span className={styles.bag}>0</span>
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
