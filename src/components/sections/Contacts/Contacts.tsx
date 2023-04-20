import React from 'react';
import s from './Contacts.module.scss'
import {Form} from "./Form/Form";
import {Title} from "../../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faSquarePhone,faLocationDot} from "@fortawesome/free-solid-svg-icons"

export const Contacts = () => {
    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <div className={s.section}>
                <div className={s.container}>
                    <Title title={'GET IN TOUCH.'} titleBg={'CONTACT'}/>
                    <div className={s.content}>
                        <div className={s.contacts}>
                            <p className={s.description}>
                                Feel free to get in touch with me.
                                I am always open to discussing new projects,
                                creative ideas or opportunities to be part of your visions.
                            </p>
                            <div className={s.contact}>
                                <FontAwesomeIcon icon={faEnvelopeOpen} className={s.icon}/>
                                <p className={s.block}>
                                    <span className={s.bText}>MAIL</span><br/>
                                    yanaheaven@yandex.ru
                                </p>
                            </div>
                            <div className={s.contact}>
                                <FontAwesomeIcon icon={faSquarePhone} className={s.icon}/>
                                <p className={s.block}>
                                    <span className={s.bText}>PHONE</span><br/>
                                    +7 (904) 330-40-66
                                </p>
                            </div>
                            <div className={s.contact}>
                                <FontAwesomeIcon icon={faLocationDot} className={s.icon}/>
                                <p className={s.block}>
                                    <span className={s.bText}>LOCATION</span><br/>
                                    St.Petersburg, Russia
                                </p>
                            </div>
                        </div>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    );
};

