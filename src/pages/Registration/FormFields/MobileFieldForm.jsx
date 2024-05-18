import styles from "./MobileFieldForm.module.css";
import { mobileCode } from "../../../data/mobileCode";

const MobileFieldForm = ({ register, errors }) => {
  return (
    <div className="input-group">
      <div className={styles.phoneNumberContainer}>
        <select
          className="form-select rounded-end-0"
          id="codeMobile"
          defaultValue={"US +1"}
          {...register("codeMobile")}
        >
          {mobileCode.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="phoneNumber"
          className="form-control rounded-start-0"
          placeholder="Mobile"
          {...register("phoneNumber", {
            required: { value: true, message: "Mobile is required" },
            maxLength: { value: 10, message: "Max length is 10" },
          })}
        />
      </div>
      <p>{errors.phoneNumber?.message}</p>
    </div>
  );
};

export default MobileFieldForm;
