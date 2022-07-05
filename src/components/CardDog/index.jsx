import React from 'react';
import { Button } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardContent from '../CardContent';

// import { Container } from './styles';

const CardDog = (props) => (


    <>
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <CardContent/>
            </SwiperSlide>
            <SwiperSlide>
                <CardContent/>
            </SwiperSlide>
            <SwiperSlide>
                <CardContent/>
            </SwiperSlide>
        </Swiper>


    </>
)
export default CardDog;