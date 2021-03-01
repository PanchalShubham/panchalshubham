import React  from 'react';
import Navbar from './Navbar';
import '../styles/Contact.scss';

export default function Contact() {
    return (
        <div id="contact_page">
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
                                <i className="fa fa-twitter icon-twitter"></i><span></span></a>
                            <a href="https://www.facebook.com/shubham.panchal.92351995"
                                className="icon-button facebook">
                                <i className="fa fa-facebook icon-facebook"></i><span></span></a>
                            <a href="https://www.instagram.com/shubhampanchal400/" className="icon-button github">
                                <i className="fa fa-instagram icon-github"></i><span></span></a>
                            <a href="https://www.linkedin.com/in/shubham-panchal-18bb6b187/"
                                className="icon-button twitter">
                                <i className="fa fa-linkedin icon-twitter"></i><span></span></a>
                        </div>
                        <div id="contactForm">
                            <form autoComplete="off" id="submissionForm">
                                <input className="textfield" type="text" placeholder="Name"
                                    name="name" required id="name" />
                                <input className="textfield" type="email" placeholder="Email"
                                    name="email" required id="email" />
                                <textarea className="textarea" name="message" placeholder="Message"
                                    required id="message"></textarea>
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