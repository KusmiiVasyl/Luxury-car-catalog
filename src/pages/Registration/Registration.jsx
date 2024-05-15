import { useForm } from "react-hook-form";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import styles from "./Registration.module.css";
import { mobileCode } from "../../data/mobileCode";
import { DevTool } from "@hookform/devtools";

const Registration = () => {
  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h3>Register form</h3>
        <div>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            {...register("firstName", {
              required: { value: true, message: "First Name is required" },
            })}
          />
          <p>{errors.firstName?.message}</p>
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName", {
              required: { value: true, message: "Last Name is required" },
            })}
          />
          <p>{errors.lastName?.message}</p>
        </div>
        <div className="input-group">
          <select
            className="form-select"
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
            className="form-control w-25"
            placeholder="Mobile"
            {...register("phoneNumber", {
              required: { value: true, message: "Mobile is required" },
            })}
          />
          <p>{errors.phoneNumber?.message}</p>
        </div>
        <div>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email address"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          <p>{errors.email?.message}</p>
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
            {...register("age", {
              required: {
                value: true,
                message: "Age is required",
              },
              min: 18,
              max: 100,
            })}
          />
          <p>{errors.age?.message}</p>
        </div>
        <div>
          <input
            type="number"
            className="form-control"
            id="drivingExperience"
            placeholder="Driving experience"
            min="0"
            max="100"
            {...register("drivingExperience", {
              required: {
                value: true,
                message: "Driving experience is required",
              },
              min: 0,
              max: 100,
            })}
          />
          <p>{errors.drivingExperience?.message}</p>
        </div>
        <div className={styles.addPhoto}>
          <p>Add photo</p>
          <label>
            <IoMdAdd />
            <input type="file" id="photo" {...register("photo")} />
          </label>
        </div>
        <div className={styles.submit}>
          <button type="submit">
            <TbArrowBigRightLineFilled />
            <span>Register</span>
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Registration;
