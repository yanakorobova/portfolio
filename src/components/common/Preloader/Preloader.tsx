import React, {useState} from 'react';
import s from './Preloader.module.scss'
import {Oval} from "react-loader-spinner";

export const Preloader = () => {
    const [isPreloader, setIsPreloader] = useState(false)
    setTimeout(() => {
        setIsPreloader(true)
    }, 700)

    const body = document.body

    if (!isPreloader) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }

    return (
        <div className={isPreloader ? `${s.preloaderContainer} ${s.active}` : s.preloaderContainer}>
            <div className={s.loading}>
                <Oval color={'#2fbf71'} secondaryColor={'#2fbf71'} strokeWidth={4}/>
            </div>
        </div>
    );
}