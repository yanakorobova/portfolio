import React from 'react';
import c from "../../styles/commonStyles.module.css";
import s from './Projects.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${c.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.project}>
                    <Project title={'Title'}
                             description={'Short description'}
                    />
                    <Project title={'Title'}
                             description={'Short description'}
                    />
                </div>
            </div>
        </div>
    );
};
