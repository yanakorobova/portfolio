import React from 'react';
import s from './Contacts.module.css'
import c from './../../styles/commonStyles.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${c.container} ${s.containerContacts}`}>
                <h2>Contacts</h2>
                <form className={s.form}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea></textarea>
                </form>
                <button className={c.button}>Send</button>
            </div>
        </div>
    );
};

