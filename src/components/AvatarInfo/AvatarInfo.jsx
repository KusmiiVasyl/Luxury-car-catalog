import { FaUserTie } from "react-icons/fa6";
import styles from "./AvatarInfo.module.css";
import userImg from "../../images/myFoto.PNG";
import { useStore } from "../../store";

const AvatarInfo = () => {
  const isUserRegister = useStore((state) => state.isUserRegister);

  return (
    <>
      {isUserRegister ? (
        <div className={styles.avatar}>
          <div>
            <img src={userImg} alt="User Image" />
          </div>
          <div className={styles.user}>
            <span>User Name</span>
            <span>View profile</span>
          </div>
        </div>
      ) : (
        <div className={styles.register}>
          <div className={styles.icon}>
            <FaUserTie />
          </div>
          <div className={styles.text}>
            <p>Register</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AvatarInfo;
