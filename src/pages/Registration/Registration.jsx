import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import styles from "./Registration.module.css";
import { mobileCode } from "../../data/mobileCode";

const Registration = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <h3>Register form</h3>
        <div>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="input-group">
          <select className="form-select" id="inputMobile">
            {mobileCode.map((item, index) => (
              <option key={index} value={item} selected={item === "US +1"}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control w-25"
            placeholder="Mobile"
          />
        </div>
        <div>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email address"
          />
        </div>
        <div>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Your age"
            min="18"
            max="100"
            required
          />
        </div>
        <div>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Driving experience"
            min="0"
            max="100"
            required
          />
        </div>
        <div className={styles.addPhoto}>
          <p>Add photo</p>
          <label>
            <IoMdAdd />
            <input type="file" />
          </label>
        </div>
        <div className={styles.submit}>
          <button type="submit">
            <TbArrowBigRightLineFilled />
            <span>Register</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
