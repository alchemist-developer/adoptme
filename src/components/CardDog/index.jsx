import React from 'react';
import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardContent from '../CardContent';
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";

// import { Container } from './styles';

const CardDog = (props) => (


    <>
        <Header display = {true} logo="none" background="white">
        <Logo margin = {'none'}/>
        <OptionMenu displayProfile="flex"/>
      </Header>
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