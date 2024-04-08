import styles from "./Social.module.css";
import { BsFacebook } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { MdShare } from "react-icons/md";

const Social = () => {
  return (
    <>
      <ul className={styles.social}>
        <li>
          <a href="#" title="Facebook">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="#" title="Youtube">
            <IoLogoYoutube />
          </a>
        </li>
        <li>
          <a href="#" title="Twitter">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#" className={styles.share} title="Share Link">
            <MdShare />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Social;
