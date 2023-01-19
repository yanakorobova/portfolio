import React from 'react';
import s from './Main.module.css'
import c from './../../styles/commonStyles.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={c.container}>
                <div className={s.text}>
                    <span>Welcome to my Portfolio</span>
                    <h2>
                        Hi, I'm
                        <span> Yana</span>
                    </h2>
                    <span>Frontend Developer</span>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};
