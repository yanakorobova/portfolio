import React from 'react';
import s from './Project.module.css'
import c from './../../../styles/commonStyles.module.css'


type ProjectPropsType = {
    title: string
    description: string
}
export const Project: React.FC<ProjectPropsType> = ({title, description}) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.imageContainer}>
                <button className={c.button}>View</button>
            </div>
            <div className={s.aboutProject}>
                <h3 className={s.title}>{title}</h3>
                <div className={s.description}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};
