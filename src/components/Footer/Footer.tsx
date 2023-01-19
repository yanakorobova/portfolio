import React from 'react';
import s from './Footer.module.css'
import c from "../../styles/commonStyles.module.css";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${c.container} ${s.containerFooter}`}>
                <h2>Yana Korobova</h2>
                <div className={s.cubeContainer}>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                </div>
                <p>&#169; 2023 Все права защищены.</p>
            </div>

        </div>
    );
};

