'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponent = () => {
    return(
        <Swiper
        spaceBetween = {10}
        slidesPerView = {1}
        navigation = {true}
        pagination = {{ clickable : true }}
        scrollbar = {{ draggable : true }}
         loop = {true}
        modules = {[Navigation, Pagination ]}
        >
     <SwiperSlide>
         <Image
      src="/images/bannerthre.jpg"
      alt="Picture of the author"
      width={1400}
      height={500}
    />

     </SwiperSlide>
     <SwiperSlide>
         <Image
      src="/images/bannertw.jpg"
      alt="Picture of the author"
      width={1200}
      height={500}
    />

       

     </SwiperSlide>
     <SwiperSlide>
         <Image
      src="/images/bannerthre.jpg"
      alt="Picture of the author"
      width={1200}
      height={500}
    />

       

     </SwiperSlide>
    
        
        </Swiper>
    )
}

export default SwiperComponent