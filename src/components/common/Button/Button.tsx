import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Button.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    iconType: IconDefinition
    type: string
}

export const Button: React.FC<ButtonPropsType> = ({type, iconType, children}) => {
    return (
        <button type={type} className={s.button}>
            <span>{children}</span>
            <span className={s.buttonIcon}>
                    <FontAwesomeIcon icon={iconType}/>
            </span>
        </button>
    );
};

