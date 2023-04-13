import React from 'react';
import Carousel from "react-multi-carousel";
import s from './Slider.module.scss'
import "react-multi-carousel/lib/styles.css";

type SliderPropsType = {
    items: any
}
export const Slider: React.FC<SliderPropsType> = ({items}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4
        },
        tablet: {
            breakpoint: {max: 1024, min: 500},
            items: 2
        },
        mobile: {
            breakpoint: {max: 500, min: 0},
            items: 1
        }
    };
    return (
        <Carousel responsive={responsive} infinite={true} className={s.skillSlider}>
            {items}
        </Carousel>
    );
};

