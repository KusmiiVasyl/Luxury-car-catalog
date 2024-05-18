import styles from "./EmailFieldForm.module.css";

const EmailFieldForm = ({ register, errors }) => {
  return (
    <div>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Email address"
        {...register("email", {
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address",
          },
          required: { value: true, message: "Email is required" },
        })}
      />
      <p>{errors.email?.message}</p>
    </div>
  );
};

export default EmailFieldForm;
