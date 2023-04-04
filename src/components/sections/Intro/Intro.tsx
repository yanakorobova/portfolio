import React from 'react';
import s from 'components/sections/Intro/Intro.module.css'
import c from '../../../assets/styles/commonStyles.module.css'

export const Intro = () => {
    return (
        <div className={s.mainBlock}>
            <div className={c.section}>
                <div className={c.container}>
                    <div className={s.containerText}>
                        <span>Welcome to my Portfolio</span>
                        <h2>
                            Hi, I'm
                            <span> Yana</span>
                        </h2>
                        <span>Frontend Developer</span>
                        <p className={s.text}>asddasdasdddddddddd asdasdasd asdasdasd asdqweqwe asdeqwe asdasdewewe</p>
                    </div>
                    <div className={s.photo}></div>
                </div>
            </div>
        </div>

    );
};
