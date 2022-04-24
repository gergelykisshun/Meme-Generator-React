import React, { useState } from "react";
import './NewsLetterForm.css';
import ToastMessage from "../ToastMessage.jsx/ToastMessage";

const NewsLetterForm = (props) => {
    const { email } = props.userData;

    const emptyForm = {
        email: '',
        password: '',
        confirmPassword: '',
        confirmNewsletter: false
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        confirmNewsletter: false
    });

    // TOAST MSG LOGIC
    const [toastContent, setToastContent] = useState({
        isShown: false,
        message: ''
    })

    const toggleShownHandler = (e) => {
        e.target.parentNode.classList.add('fade-out');
        setTimeout(() => {
            setToastContent(prevState => ({
                ...prevState,
                isShown: !prevState.isShown
            }))
        },205);
    }

    const throwToastMessage = (msg) => {
        setToastContent(prevState => ({
            ...prevState,
            isShown: true,
            message: msg
        }));
    };


    // HANDLES THE FORM SUBMIT EVENT
    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.email === email){
            throwToastMessage('User already exists');
        } else {
            const {email, password, confirmNewsletter} = formData;
            if (email && password){
                //EMAIL FORMAT CHECK
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!regex.test(email)){
                    throwToastMessage('Please enter a valid e-mail address!')
                    return
                }
                // PASSWORD CHECK
                if(formData.password === formData.confirmPassword){
                    throwToastMessage('Successfully signed up!');
                    setFormData(emptyForm);
                } else {
                    throwToastMessage('Passwords do not match!');
                    return
                }
                // NEWSLETTER CHECK
                if(confirmNewsletter){
                    throwToastMessage('Successfully signed up! Thanks for signing up for our newsletter!');
                    setFormData(emptyForm);
                }
            } else {
                if (!email){
                    throwToastMessage('Please fill in your e-mail address!')
                } else {
                    throwToastMessage('Please set a password!')
                }
            }
        };
    };

    // UPDATE FORM DATA STATE FOR INPUT CHANGE
    const inputHandler = (e) => {
        const { name, type, checked, value } = e.target;

        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            };
        });
    };


    return(
        <section className="form-container" id="newsletter-section">
            { toastContent.isShown && <ToastMessage toggleShown={toggleShownHandler} message={toastContent.message}/>}
            <form className="sign-up-form">
                <input className="input-style" onChange={inputHandler} value={formData.email} type="email" name="email" />
                <input className="input-style" onChange={inputHandler} value={formData.password} type="password" name="password" />
                <input className="input-style" onChange={inputHandler} value={formData.confirmPassword} type="password" name="confirmPassword" />
                <div className="label-style">
                    <input onChange={inputHandler} type="checkbox" name="confirmNewsletter" checked={formData.confirmNewsletter} id="newsletter"/>
                    <label className="new-input-field" htmlFor="newsletter">
                        <div className="tick-rect"></div>
                    </label>
                    I want to join the newsletter
                </div>
                <button className="submit-btn" onClick={submitHandler}>Sign up</button>
            </form>
        </section>
    )
};

export default NewsLetterForm;