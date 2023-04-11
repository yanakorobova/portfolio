import React from 'react';
import s from "./Form.module.scss";
import {Button} from "../../../common/Button/Button";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import {useFormik} from "formik";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string(),
            subject: Yup.string().max(50, 'Max length subject 50 symbols'),
            email: Yup.string().email('Email must be a valid!').required('email required'),
            message: Yup.string().min(15, 'Message should be of minimum 15 characters length')
        }),
        onSubmit: (values) => {
            emailjs.send('service_inbdbds', 'template_mhz1t7m', values, '3Q7jQeWC5jpPdpMTi')
                .then(() => {
                    toast('Your message has been sent successfully!', {
                        position: 'top-right',
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                })
                .catch(() => {
                    toast('Something went wrong, please try again', {
                        position: 'top-right',
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                })
            formik.resetForm()
        }
    })
    return (
        <div className={s.formBlock}>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <div className={s.inputSet}>
                    <input type={'text'} placeholder={'YOUR NAME'}  {...formik.getFieldProps('name')}/>
                    <input type={'email'} placeholder={'YOUR EMAIL'} required {...formik.getFieldProps('email')}/>
                    <input type={'text'} placeholder={'YOUR SUBJECT'} required {...formik.getFieldProps('subject')}/>
                </div>
                {formik.touched.subject && formik.errors.subject &&
                    <span style={{color: 'red',fontSize:'14px'}}>{formik.errors.subject}</span>}
                <textarea placeholder={'YOUR MESSAGE'} required {...formik.getFieldProps('message')}></textarea>
                {formik.touched.message && formik.errors.message &&
                    <span style={{color: 'red',fontSize:'14px'}}>{formik.errors.message}</span>}
                <Button type={'submit'} iconType={faPaperPlane}>SEND MESSAGE</Button>
            </form>
            <ToastContainer />
        </div>
    );
};


