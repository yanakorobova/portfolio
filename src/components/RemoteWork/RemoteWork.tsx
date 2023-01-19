import React from 'react';
import s from './RemoteWork.module.css'
import c from './../../styles/commonStyles.module.css'

export const RemoteWork = () => {
    return (
        <div className={s.workBlock}>
            <div className={`${c.container} ${s.workContainer}`}>
                <h2 className={s.text}>I am considering remote work</h2>
                <button className={c.button}>Recruit me</button>
            </div>
        </div>
    );
};
