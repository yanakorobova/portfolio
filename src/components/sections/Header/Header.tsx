import React from 'react';
import s from 'components/sections/Header/Header.module.scss'
import {HiBars3BottomLeft} from "react-icons/hi2";
import {Connection} from "components/common/Connection/Connection";

export const Header = () => {

    return (
        <div className={s.header}>
            <div className={s.headerBar}>
                <div>
                    <HiBars3BottomLeft className={s.menuBurger} cursor={'pointer'}/>
                </div>
                <div className={s.connection}>
                    <div className={s.line}></div>
                    <div className={s.icon}>
                        <Connection/>
                    </div>
                    <div className={s.line}></div>
                </div>
                <p className={s.logo}>Portfolio.</p>
            </div>
        </div>

    )
};
