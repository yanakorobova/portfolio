import React, {useState} from 'react';
import s from 'components/sections/Header/Header.module.scss'
import {HiBars3BottomLeft} from "react-icons/hi2";
import {Connection} from "components/common/Connection/Connection";
import {Nav} from "components/sections/Header/Nav/Nav";

export const Header = () => {
    const [open, setOpen] = useState(false)
    const onClickHandler = () => {
        setOpen(!open)
    }
    const nav = s.nav +(open? ' '+s.open:'')
    const background = s.background +(open? ' '+s.backgroundOpen:'')
    return (
        <div className={s.header}>
            <div className={background}/>
            <div className={s.headerBar}>
                <div>
                    <HiBars3BottomLeft className={s.menuBurger} cursor={'pointer'} onClick={onClickHandler}/>
                </div>
                <div className={nav}><Nav setOpen={setOpen} open={open}/></div>
                <div className={s.connection}>
                    <div className={s.line}/>
                    <div className={s.icon}>
                        <Connection/>
                    </div>
                    <div className={s.line}/>
                </div>
                <p className={s.logo}>Portfolio.</p>
            </div>
        </div>

    )
};
