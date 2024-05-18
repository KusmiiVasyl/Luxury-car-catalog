import styles from "./FirstNameFieldForm.module.css";

const FirstNameFieldForm = ({ register, errors }) => {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        id="firstName"
        placeholder="First Name"
        {...register("firstName", {
          required: { value: true, message: "First Name is required" },
          maxLength: { value: 20, message: "Max length is 20" },
        })}
      />
      <p>{errors.firstName?.message}</p>
    </div>
  );
};

export default FirstNameFieldForm;
