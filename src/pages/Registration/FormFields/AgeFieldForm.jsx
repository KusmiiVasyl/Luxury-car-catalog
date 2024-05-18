import styles from "./AgeFieldForm.module.css";

const AgeFieldForm = ({ register, errors }) => {
  return (
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
          min: { value: 18, message: "Age is less than 18" },
          max: { value: 100, message: "Age is more than 100" },
        })}
      />
      <p>{errors.age?.message}</p>
    </div>
  );
};

export default AgeFieldForm;
