import React from 'react';
import s from 'components/sections/Intro/Intro.module.scss'
import {Button} from "components/common/Button/Button";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import avatar from 'assets/images/avatar.jpg'
import {Connection} from "../../common/Connection/Connection";


export const Intro = () => {
    return (
        <div className={s.mainBlock} id={'intro'}>
            <div className={s.section}>
                <div className={s.container}>
                    <div className={s.content}>
                        <div className={s.containerText}>
                            <p className={s.title}>Welcome to my Portfolio</p>
                            <div className={s.description}>
                                <h1>
                                    Hello, I'm <p>Yana.</p>
                                </h1>
                                <p className={s.text}>I'm a front-end developer with experience in creating SPA, using
                                    React/Redux/TypeScript. Now I am improving my skills in this direction and expanding
                                    them with new technologies. Open to your suggestions!</p>
                            </div>
                            <div className={s.connection}>
                                <Connection/>
                            </div>
                            <a href={'https://drive.google.com/file/d/141Db7sFS56IwHKQBG0d_tZGC2Cgr1PSF/view?usp=sharing'}
                               target={'_blank'}
                               rel='noreferrer'
                            >
                                <Button type={'button'} iconType={faDownload}>DOWNLOAD CV</Button>
                            </a>
                        </div>

                        <div className={s.photo}>
                            <img src={avatar} alt={'avatar'}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};
