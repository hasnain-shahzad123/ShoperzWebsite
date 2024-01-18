import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef, useEffect, useState } from 'react';
import slider1 from './images-icons/Frame 5.png';

const Slider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const nextIndex = activeIndex === 0 ? 1 : 0;
        swiperRef.current.swiper.slideTo(nextIndex);
        setActiveIndex(nextIndex);
      }
    }, 4000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
