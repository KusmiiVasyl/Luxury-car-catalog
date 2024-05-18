import { useForm } from "react-hook-form";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import styles from "./Registration.module.css";
import AddPhotoFieldForm from "./FormFields/AddPhotoFieldForm";
import FirstNameFieldForm from "./FormFields/FirstNameFieldForm";
import LastNameFieldForm from "./FormFields/LastNameFieldForm";
import MobileFieldForm from "./FormFields/MobileFieldForm";
import EmailFieldForm from "./FormFields/EmailFieldForm";
import AgeFieldForm from "./FormFields/AgeFieldForm";
import DrivingExperience from "./FormFields/DrivingExperience";

const Registration = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.photo[0]);
  };

  return (
    <section id="registration">
      <div className={styles.formContainer}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h3>Register form</h3>
          <FirstNameFieldForm register={register} errors={errors} />
          <LastNameFieldForm register={register} errors={errors} />
          <MobileFieldForm register={register} errors={errors} />
          <EmailFieldForm register={register} errors={errors} />
          <AgeFieldForm register={register} errors={errors} />
          <DrivingExperience register={register} errors={errors} />
          <AddPhotoFieldForm register={register} watch={watch} />
          <div className={styles.submit}>
            <button type="submit">
              <TbArrowBigRightLineFilled />
              <span>Register</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
