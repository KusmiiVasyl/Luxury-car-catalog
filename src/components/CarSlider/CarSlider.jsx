// import icon
import { FaPause, FaPlay } from "react-icons/fa6";

import "./CarSlider.css";

const CarSlider = ({ car, active, toggleVideo }) => {
  return (
    <div className="carSlider">
      <img src={car.img} alt={car.name} />
      <div className={`video ${active ? "active" : ""}`}>
        <iframe
          src={car.trailer}
          width="1280"
          height="720"
          title={`${car.brand} ${car.model}`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content">
        <h2>{car.brand}</h2>
        <h3>{car.model}</h3>
        <div className="btns">
          <a href="#" className="btnCarDetail">
            More Details
          </a>
          <a
            href="#"
            className={`btnCarTrailer ${active ? "active" : ""}`}
            onClick={toggleVideo}
          >
            <span className="pause">
              <FaPause />
            </span>
            <span className="play">
              <FaPlay />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarSlider;
