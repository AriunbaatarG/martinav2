import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
    const form = useRef();
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        message: ""
    });
    const [recaptchaFilled, setRecaptchaFilled] = useState(false); // State to track ReCAPTCHA filled status
    const [submitted, setSubmitted] = useState(false); // State to track form submission

    const sendEmail = (e) => {
        e.preventDefault();

        if (!recaptchaFilled) { // Check if ReCAPTCHA is filled
            alert("Please fill in the ReCAPTCHA.");
            return;
        }

        emailjs
            .sendForm('service_3o2ctco', 'template_uhan5bc', form.current, {
                publicKey: 'bRp1E_2AjdyrWol5f',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormValues({ // Reset formValues state to empty values
                        username: "",
                        email: "",
                        message: ""
                    });
                    setSubmitted(true); // Set submitted state to true after successful submission
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleRecaptchaChange = (value) => {
        if (value) {
            setRecaptchaFilled(true);
        }
    };

    return (
        <div>
            <Header/>
            <div className="contact-form">
                {!submitted ? (
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="user_name"
                            value={formValues.username}
                            onChange={(e) => setFormValues({...formValues, username: e.target.value})}
                        />
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="user_email"
                            value={formValues.email}
                            onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                        />
                        <label>Message</label>
                        <textarea 
                            name="message"
                            value={formValues.message}
                            onChange={(e) => setFormValues({...formValues, message: e.target.value})}
                        />
                        <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={handleRecaptchaChange} />
                        <button type="submit" value="Send">Submit</button>
                    </form>
                ) : (
                    <p>Thank you for contacting me! I will get back to you as soon as I can.</p>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
