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
    const { Icons, title, fill } = skill

    return (
        <li className={s.skillBlock}>
            <div className={s.inner}>
                <div className={s.square}>
                    <Icons size={50} color={fill} />
                </div>
                <h3 className={s.title}>{title}</h3>
            </div>
        </li>
    );
};

