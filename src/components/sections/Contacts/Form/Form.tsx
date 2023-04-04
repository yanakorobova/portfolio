import React from 'react';
import s from "./Form.module.scss";
import {Button} from "../../../common/Button/Button";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"


export const Form = () => {
    return (
        <div className={s.formBlock}>
            <form className={s.form}>
                <div className={s.inputSet}>
                    <input type={'text'} placeholder={'YOUR NAME'}/>
                    <input type={'email'} placeholder={'YOUR EMAIL'}/>
                    <input type={'text'} placeholder={'YOUR SUBJECT'}/>
                </div>
                <textarea placeholder={'YOUR MESSAGE'}></textarea>
                <Button type={'submit'} iconType={faPaperPlane}>SEND MESSAGE</Button>
            </form>
        </div>
    );
};


