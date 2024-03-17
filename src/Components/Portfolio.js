import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css';
import Img1 from '../Images/Portfolio/portfolio-img-01.png';
import Img2 from '../Images/Portfolio/portfolio-img-02.png';
import Img3 from '../Images/Portfolio/portfolio-img-03.png';
import Img4 from '../Images/Portfolio/portfolio-img-04.png';
import Img5 from '../Images/Portfolio/portfolio-img-05.png';
import Img6 from '../Images/Portfolio/portfolio-img-06.png';
import Img7 from '../Images/Portfolio/portfolio-img-07.png';
import Img8 from '../Images/Portfolio/portfolio-img-08.png';
import Img9 from '../Images/Portfolio/portfolio-img-09.png';
import Img10 from '../Images/Portfolio/portfolio-img-10.png';
import Img11 from '../Images/Portfolio/portfolio-img-11.png';
import Img12 from '../Images/Portfolio/portfolio-img-12.png';
import Headings from './Elements/Headings';

function Portfolio() {
  return (
    <div className="container">
      <div className='flex justify-center my-4'>
        <Headings title="Portfolio" />
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 2000 }} // Add autoplay prop with 2 seconds delay
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={Img1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img12} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Portfolio;
