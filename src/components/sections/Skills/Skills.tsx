import React from 'react';
import s from './Skills.module.scss'
import {Slider} from "components/common/Carousel/Slider";
import {skills} from "components/sections/Skills/Data";
import {Skill} from "components/sections/Skills/Skill/Skill";

export const Skills = () => {
    const mappedSkills = skills.map((skill) => {
        return <Skill key={skill.skillID} skill={skill}/>
    })
    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={s.section}>
                <div className={s.container}>
                    {/* <Title title={'MY SKILLS.'} titleBg={'TALENTS'}/>*/}
                    <div className={s.content}>
                        <div className={s.sliderBox}>
                            <h5>Skills</h5>
                            <Slider items={mappedSkills}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

