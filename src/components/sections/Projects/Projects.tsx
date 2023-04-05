import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./Project/Project";
import {works} from "./Data";
import {Title} from "../../common/Title/Title";

export const Projects = () => {
    const projects = works.map((work) => {
        return <Project work={work}/>
    })

    return (
        <div className={s.projectsBlock}>
            <div className={s.section}>
                <div className={s.container}>
                    <Title title={'MY PROJECTS.'} titleBg={'PORTFOLIO'}/>
                    <div className={s.content}>
                        <div className={s.projects}>
                            {projects}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
