import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./CarSwiper.css";

// import required modules
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import { useGetData } from "../store";
import CarSlider from "./CarSlider";

const CarSwiper = () => {
  const getData = useGetData();
  const [active, setActive] = useState(false);

  useEffect(() => {
    getData.getCars();
  }, []);

  const handleToggleActive = () => {
    setActive(!active);
  };

  if (getData.loading) {
    return <div className="loading">Loading ...</div>;
  }

  if (getData.error) {
    return <div className="error">Error: {getData.errorData}</div>;
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
    >
      {getData.cars?.map((car) => (
        <SwiperSlide key={car.id} className="carSwiper">
          <CarSlider
            car={car}
            active={active}
            toggleVideo={handleToggleActive}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarSwiper;
