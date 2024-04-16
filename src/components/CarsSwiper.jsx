import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import styles from "./CarsSwiper.module.css";

// import required modules
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// import icon
import { FaPause, FaPlay } from "react-icons/fa6";

import { useGetData } from "../store";

const CarsSwiper = () => {
  const getData = useGetData();
  const [active, setActive] = useState(false);

  const handleToggleVideo = () => {
    setActive(!active);
  };

  useEffect(() => {
    getData.getCars();
  }, []);

  if (getData.loading) {
    return <div className={styles.loading}>Loading ...</div>;
  }

  if (getData.error) {
    return <div className={styles.error}>Error: {getData.errorData}</div>;
  }

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className={styles.carSwiper}
    >
      {getData.cars?.map((car) => (
        <SwiperSlide key={car.id}>
          <div className="carSlider">
            <img src={car.img} alt={car.name} />
            <div className="content">
              <h2>{car.brand}</h2>
              <h3>{car.model}</h3>
              <div className={styles.btns}>
                <a href="#" className={styles.btnCarDetail}>
                  More Details
                </a>
                <a
                  href="#"
                  className={styles.btnCarTrailer}
                  onClick={handleToggleVideo}
                >
                  {active ? (
                    <span className={styles.pause}>
                      <FaPause />
                    </span>
                  ) : (
                    <span className={styles.play}>
                      <FaPlay />
                    </span>
                  )}
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarsSwiper;
