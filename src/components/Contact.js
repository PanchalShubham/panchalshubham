import React, { useState }  from 'react';
import Navbar from './Navbar';
import {sendEmail} from '../utility/SendMail';
import '../styles/Contact.scss';

export default function Contact() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (name.trim() === '') {setErrorMessage(`Please provide your name!`);return;}
        if (!validateEmail(email)) {setErrorMessage(`Please provide a valid email!`); return;}
        if (message.trim() === '') {setErrorMessage(`Please provide a message!`);return;}
        setErrorMessage(null);
        let text = `Hello Shubham!\n` + 
                    `${email} messaged you!\n` + 
                    `${message}\n` + 
                    `Regards,\n` + 
                    `Panchal Programming Academy\n`;
        sendEmail(`shubhampanchal9773@gmail.com`, `New Message`, text, ``)
        .then(()=> setSuccessMessage(`Your message was delivered!`))
        .catch(() => setErrorMessage(`Failed to deliver your message!`));
    };
 
    return (
        <div id="contact_page">
            {successMessage && <div className="toast success">
                {successMessage}
                <button onClick={() => setSuccessMessage(null)}>
                    <i className="fa fa-times"></i>
                </button> 
            </div>}
            {errorMessage && <div className="toast error">
                {errorMessage}
                <button onClick={() => setErrorMessage(null)}>
                    <i className="fa fa-times"></i>
                </button> 
            </div>}
            <div className="container">
                <Navbar />
                <div className="item" id="contact">
                    <div className="contact-item-box">
                        <div id="contactInfo">
                            <p className="contact-details">
                                <span>CONTACT ME</span> <br />
                                        If you'd like to make an enquiry, please feel free to get in touch,
								and I will respond as soon as possible. <br />
                            </p>
                            <p className="contact-details">
                                If you prefer to contact me directly, send your email to <em><u>shubhampanchal9773 @gmail.com</u></em>
                            </p>
                            <a href="https://www.twitter.com/Shubham99437563" className="icon-button twitter">
                                <i className="fa fa-twitter icon"></i><span></span></a>
                            <a href="https://www.facebook.com/shubham.panchal.92351995"
                                className="icon-button facebook">
                                <i className="fa fa-facebook icon"></i><span></span></a>
                            <a href="https://www.instagram.com/shubhampanchal400/" className="icon-button github">
                                <i className="fa fa-instagram icon"></i><span></span></a>
                            <a href="https://www.linkedin.com/in/shubham-panchal-18bb6b187/"
                                className="icon-button twitter">
                                <i className="fa fa-linkedin icon"></i><span></span></a>
                        </div>
                        <div id="contactForm">
                            <form autoComplete="off" id="submissionForm"
                                onSubmit={onSubmitHandler}>
                                <input className="textfield" type="text" placeholder="Name"
                                    name="name" id="name" 
                                    value={name} onChange={(event) => setName(event.target.value)}/>
                                <input className="textfield" type="email" placeholder="Email"
                                    name="email" id="email" 
                                    value={email} onChange={event => setEmail(event.target.value)}/>
                                <textarea className="textarea" name="message" 
                                    placeholder="Message" id="message"
                                    value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                                <button className="send-button hvr-sweep-to-left">
                                    Send <i className="fa fa-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};