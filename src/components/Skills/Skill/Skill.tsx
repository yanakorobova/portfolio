import React from 'react';
import s from './Skill.module.css'
type SkillPropsType = {
    title: string
    description: string
}
export const Skill: React.FC<SkillPropsType> = ({title,description}) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.icon}></div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

