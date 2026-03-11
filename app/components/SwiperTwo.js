'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperTwoComponent = () => {
    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={6}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
             loop={true}
            modules={[Navigation, Pagination]}
        >
            <SwiperSlide>

                <Image
                    src="/images/category-thumb.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={100}
                />

            </SwiperSlide>
            <SwiperSlide>

                <Image
                    src="/images/category.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={100}
                />

            </SwiperSlide>
         
        <SwiperSlide>

                <Image
                    src="/images/category-thumby.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={100}
                />

            </SwiperSlide>
        <SwiperSlide>

                <Image
                    src="/images/category-thumby.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={100}
                />

            </SwiperSlide>
        <SwiperSlide>

                <Image
                    src="/images/category-thumby.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={100}
                />

            </SwiperSlide>
        <SwiperSlide>

                <Image
                    src="/images/category-thumby.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={100}
                />

            </SwiperSlide>
        <SwiperSlide>

                <Image
                    src="/images/category-thumby.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={100}
                />

            </SwiperSlide>
        <SwiperSlide>

                <Image
                    src="/images/category-thumby.jpg"
                    alt="Picture of the author"
                    width={200}
                    height={100}
                />

            </SwiperSlide>
          
         
          
           
           

        </Swiper>
    )
}

export default SwiperTwoComponent