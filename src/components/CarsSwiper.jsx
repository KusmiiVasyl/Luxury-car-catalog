// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import styles from "./CarsSwiper.module.css";

// import required modules
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import { useGetData } from "../store";
import { useEffect } from "react";

const CarsSwiper = () => {
  const getData = useGetData();

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
          <img src={car.img} alt={car.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarsSwiper;
