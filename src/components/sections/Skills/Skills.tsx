import React from 'react';
import {Skill} from "./Skill/Skill";
import s from './Skills.module.scss'
import {Title} from "../../common/Title/Title";
import {skills} from "./Data";

export const Skills = () => {
    const mappedSkills = skills.map((skill) => {
        return <Skill key={skill.skillID} skill={skill}/>
    })
    return (
        <div className={s.skillsBlock}>
            <div className={s.section}>
                <Title title={'MY SKILLS.'} titleBg={'TALENTS'}/>
                <div className={s.container}>
                    <ul className={s.skills}>{mappedSkills}</ul>
                </div>
            </div>
        </div>

    );
};

