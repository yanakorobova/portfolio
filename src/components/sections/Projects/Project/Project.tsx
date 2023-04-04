import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    img: string
}
export const Project: React.FC<ProjectPropsType> = ({title, description, img}) => {
    const image = {
        backgroundImage: `url(${img})`
    }
    return (
        <div className={s.projectBlock}>
            <a className={s.a} style={image}>
                <div className={s.aboutProject}>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.description}>{description}</p>
                </div>
            </a>
        </div>
    );
};
