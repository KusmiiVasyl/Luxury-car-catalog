import { IoMdAdd } from "react-icons/io";
import styles from "./AddPhotoFieldForm.module.css";
import { useState } from "react";

const AddPhotoFieldForm = ({ register, watch }) => {
  const [image, setImage] = useState("");

  const handleImageChange = () => {
    setImage(watch("photo")[0]);
  };

  return (
    <div className={styles.addPhoto}>
      <p>Add photo</p>
      <label onChange={handleImageChange}>
        {image ? <img src={URL.createObjectURL(image)} alt="" /> : <IoMdAdd />}
        <input type="file" id="photo" {...register("photo")} />
      </label>
    </div>
  );
};

export default AddPhotoFieldForm;
