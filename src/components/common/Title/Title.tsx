import React from 'react';
import s from "./Title.module.scss";

type TitlePropsType = {
    title:string
    titleBg:string
}

export const Title: React.FC<TitlePropsType> = ({title,titleBg}) => {
    const endTitle = title.split(' ').at(-1)
    const beginTitle = title.split(' ').slice(0,-1).join(' ')

    return (
        <div className={s.titleBlock}>
            <h2 className={s.title}>
                {beginTitle}
                <span className={s.lastWord}>{' '+endTitle}</span>
            </h2>
            <span className={s.titleBg}>{titleBg}</span>
        </div>

    );
};

