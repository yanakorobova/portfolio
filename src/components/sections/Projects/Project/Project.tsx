import React, {useRef} from 'react';
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
    const inputRef = useRef<HTMLAnchorElement>(null)
    const onClickHandler = () => {
        inputRef && inputRef.current?.click();
    };
    const image = {
        backgroundImage: `url(${img})`
    }
    return (
        <div className={s.projectBlock} onClick={onClickHandler}>
            <a style={image} href={linkDeploy} target={'_blank'} ref={inputRef}></a>
            <div className={s.aboutProject}>
                <p className={s.development}>Development {title==='Learning cards' && '(command)'}</p>
                <h3 className={s.title}>{title}</h3>
                <p className={s.description}>{description}</p>
            </div>
        </div>
    );
};
