import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTelegram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {SiCodewars} from 'react-icons/si'


export const Connection= () => {
    return (
        <>
            <a rel='noreferrer' href={''} target={'_blank'}>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a rel='noreferrer' href={''} target={'_blank'}>
                <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a rel='noreferrer' href={''} target={'_blank'}>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a rel='noreferrer' href={''} target={'_blank'}>
                <SiCodewars />
            </a>
        </>
    );
};
