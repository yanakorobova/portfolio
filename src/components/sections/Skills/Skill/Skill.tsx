import React from 'react';
import s from './Skill.module.scss'
import {IconType} from "react-icons";

type SkillType = {
    skillID: number
    title: string
    Icons: IconType
    fill: string
}

type SkillPropsType = {
    skill: SkillType
}

export const Skill: React.FC<SkillPropsType> = ({skill}) => {
    const {Icons, title, fill} = skill

    return (
        <div className={s.skillBlock} >
            <div className={s.square}>
                <Icons color={fill}/>
            </div>
            <h3>{title}</h3>
        </div>
    );
};

