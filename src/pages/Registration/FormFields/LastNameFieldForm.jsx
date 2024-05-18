import styles from "./LastNameFieldForm.module.css";

const LastNameFieldForm = ({ register, errors }) => {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        id="lastName"
        placeholder="Last Name"
        {...register("lastName", {
          required: { value: true, message: "Last Name is required" },
          maxLength: { value: 20, message: "Max length is 20" },
        })}
      />
      <p>{errors.lastName?.message}</p>
    </div>
  );
};

export default LastNameFieldForm;
