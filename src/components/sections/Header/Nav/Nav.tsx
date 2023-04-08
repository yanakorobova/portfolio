import React from 'react';
import s from 'components/sections/Header/Nav/Nav.module.scss'
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HiXMark} from "react-icons/hi2";

type NavPropsType = {
    open: boolean
    setOpen: (open: false) => void
}
export const Nav: React.FC<NavPropsType> = ({setOpen,open}) => {

    const closeMenu = () => {
        setOpen(false)
    }
    const links = s.links + (open ? ' ' + s.open : '')
    const x = s.x + (open ? ' ' + s.open : '')
    return (
        <nav className={s.nav}>
            <HiXMark className={x} onClick={closeMenu}/>
            <ul className={links} onClick={closeMenu}>
                <li>
                    <div>
                        <a href={"#intro"}>Main</a>
                        <FontAwesomeIcon icon={faChevronRight} className={s.arr}/>
                    </div>
                </li>
                <li>
                    <div>
                        <a href={"#skills"}>Skills</a>
                        <FontAwesomeIcon icon={faChevronRight} className={s.arr}/>
                    </div>
                </li>
                <li>
                    <div>
                        <a href={"#projects"}>Projects</a>
                        <FontAwesomeIcon icon={faChevronRight} className={s.arr}/>
                    </div>
                </li>
                <li>
                    <div>
                        <a href={"#contacts"}>Contacts</a>
                        <FontAwesomeIcon icon={faChevronRight} className={s.arr}/>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

