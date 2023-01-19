import React from 'react';
import {Skill} from "./Skill/Skill";
import c from './../../styles/commonStyles.module.css'
import s from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'Detailed description of the language skill'}/>
                    <Skill title={'React'}
                           description={'Detailed description of the language skill'}/>
                    <Skill title={'HTML/CSS'}
                           description={'Detailed description of the language skill'}/>
                </div>
            </div>
        </div>
    );
};

