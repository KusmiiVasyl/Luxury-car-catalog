import DatePicker from "react-datepicker";
import emailjs from "@emailjs/browser";
import { GrUpdate } from "react-icons/gr";
import styles from "./RentDateRange.module.css";
import { useState } from "react";
import { useStore } from "../../store";

const RentDateRange = ({ car }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndtDate] = useState(null);
  const [deliveryPlace, setDeliveryPlace] = useState("");
  const [returnPlace, setReturnPlace] = useState("");
  const [note, setNote] = useState("");
  const totalRentHours = calculateTotalRentHours(startDate, endDate);
  const user = useStore((state) => state.user);

  const handleStartDateChange = (date) => {
    setStartDate(auditStartDate(date));
    setEndtDate(null);
  };

  const handleEndDateChange = (date) => {
    setEndtDate(auditEndDate(startDate, date));
  };

  const handleRestAllData = () => {
    setStartDate(null);
    setEndtDate(null);
    setDeliveryPlace("");
    setReturnPlace("");
    setNote("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendEmailData = {
      ...user,
      carId: car.id,
      carBrand: car.brand,
      carModel: car.model,
      carYear: car.year,
      carColor: car.color,
      carPrice: car.price,
      startDate: `${startDate.getHours()}:00 ${startDate.toLocaleDateString()}`,
      endDate: `${endDate.getHours()}:00 ${endDate.toLocaleDateString()}`,
      totalRentHours,
      deliveryPlace,
      returnPlace,
      note,
    };

    emailjs
      .send(
        "service_nvtpucx",
        "template_43ns8s3",
        sendEmailData,
        "gUEG3qLSEX-6YkxED"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.textRangePeriodContainer}>
        <p>Choose the rental time period and delivery, return places.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="d-flex flex-sm-row flex-column w-100 start">
          <div>
            <DatePicker
              className={styles.datePicker}
              dateFormat={"dd.MM.yyyy - hh:mm a"}
              minDate={new Date()}
              minTime={calculateStartMinTime(startDate)}
              maxTime={new Date(new Date().setHours(23, 0, 0, 0))}
              selected={!!startDate && startDate}
              onChange={handleStartDateChange}
              showTimeSelect
              timeIntervals={60}
              name="startDate"
              placeholderText="Delivery date and time"
            />
          </div>
          <div>
            <DatePicker
              className={styles.datePicker}
              dateFormat={"dd.MM.yyyy - hh:mm a"}
              minDate={startDate}
              minTime={calculateEndMinTime(startDate, endDate)}
              maxTime={new Date(new Date().setHours(23, 0, 0, 0))}
              selected={!!endDate && endDate}
              onChange={handleEndDateChange}
              showTimeSelect
              timeIntervals={60}
              placeholderText="Return date and time"
              disabled={!startDate}
            />
          </div>
        </div>
        <div className={styles.placeContainer}>
          <div className="d-flex flex-sm-row flex-column">
            <input
              type="text"
              placeholder="Delivery place"
              value={deliveryPlace}
              onChange={(e) => setDeliveryPlace(e.target.value)}
            />
            <input
              type="text"
              placeholder="Return place"
              value={returnPlace}
              onChange={(e) => setReturnPlace(e.target.value)}
            />
          </div>
          <div className="d-flex w-100">
            <textarea
              type="text"
              placeholder="Note"
              className={styles.note}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.btnClearDataContainer}>
          <div onClick={handleRestAllData} title="Reset all data">
            <GrUpdate />
          </div>
        </div>
        <div className={styles.totalInfoContainer}>
          <p>
            Total rental hours:{" "}
            <span>
              {totalRentHours} hour{totalRentHours > 1 && "s"}
            </span>
          </p>
          <p>
            Total amount to be paid:
            <span> {totalRentHours * car.price}$</span>
          </p>
        </div>
        <div className={styles.btnSendContainer}>
          <input
            type="submit"
            disabled={!startDate || !endDate || !deliveryPlace || !returnPlace}
            value="send a rental request"
          />
        </div>
      </form>
    </div>
  );
};

const calculateStartMinTime = (date) => {
  const newDate = new Date(date);
  if (
    date &&
    newDate.setHours(0, 0, 0, 0) > new Date(new Date().setHours(0, 0, 0, 0))
  ) {
    return new Date(newDate);
  }
  return new Date();
};

const calculateEndMinTime = (startDate, endDate) => {
  const newDate = new Date(startDate);
  newDate.setHours(new Date(startDate).getHours() + 1, 0, 0, 0);

  if (
    startDate &&
    endDate &&
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getDate() < endDate.getDate()
  )
    newDate.setHours(0, 0, 0, 0);

  return newDate;
};

const auditStartDate = (date) => {
  let newDate = new Date(
    new Date().setHours(new Date().getHours() + 1, 0, 0, 0)
  );
  if (
    date &&
    date.getFullYear() === newDate.getFullYear() &&
    date.getMonth() === newDate.getMonth() &&
    date.getDate() === newDate.getDate()
  ) {
    if (new Date().getHours() === date.getHours()) return newDate;
    date.getHours() >= new Date().getHours() &&
      newDate.setHours(date.getHours(), 0, 0, 0);
    return newDate;
  }
  return new Date(date.setHours(date.getHours(), 0, 0, 0));
};

const auditEndDate = (startDate, endDate) => {
  if (
    startDate &&
    endDate &&
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getDate() === endDate.getDate()
  ) {
    const newDate = new Date(startDate);
    return new Date(newDate.setHours(endDate.getHours(), 0, 0, 0));
  }
  return endDate;
};

const calculateTotalRentHours = (startDate, endDate) => {
  if (startDate && endDate) {
    return (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
  }
  return 0;
};

export default RentDateRange;
