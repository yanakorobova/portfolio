import React from 'react';
import s from './Project.module.scss'

type WorkType = {
    id: number
    title: string
    img: string
    description: string
    linkDeploy: string
}

type ProjectPropsType = {
    work: WorkType
}
export const Project: React.FC<ProjectPropsType> = ({work}) => {
    const {img, title, description, linkDeploy} = work
    const image = {
        backgroundImage: `url(${img})`
    }
    const onClickHandler = () => {

    }
    return (
        <div className={s.projectBlock} onClick={onClickHandler}>
            <a style={image} href={linkDeploy}></a>
            <div className={s.aboutProject}>
                <p className={s.development}>Development</p>
                <h3 className={s.title}>{title}</h3>
                <p className={s.description}>{description}</p>
            </div>
        </div>
    );
};
