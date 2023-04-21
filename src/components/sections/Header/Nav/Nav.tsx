import React from 'react';
import s from 'components/sections/Header/Nav/Nav.module.scss'
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HiXMark} from "react-icons/hi2";

type NavPropsType = {
    open: boolean
    setOpen: (open: false) => void
}
export const Nav: React.FC<NavPropsType> = ({setOpen, open}) => {

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
                    <a href={"#intro"}>
                        <p>Main</p>
                        <FontAwesomeIcon icon={faChevronRight} className={s.arr}/>
                    </a>
                </li>
                <li>
                    <a href={"#skills"}>
                        <p>Skills</p>
                        <FontAwesomeIcon icon={faChevronRight} className={s.arr}/>
                    </a>
                </li>
                <li>
                    <a href={"#projects"}>
                        <p>Projects</p>
                        <FontAwesomeIcon icon={faChevronRight} className={s.arr}/>
                    </a>
                </li>
                <li>
                    <a href={"#contacts"}>
                        <p>Contacts</p>
                        <FontAwesomeIcon icon={faChevronRight} className={s.arr}/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

