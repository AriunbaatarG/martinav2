import Header from "../components/Header";
import Footer from "../components/Footer"
import emailjs from '@emailjs/browser'
import { useRef, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha'

function Contact() {
    const form = useRef();
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        message: ""
    })
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3o2ctco', 'template_uhan5bc', form.current, {
        publicKey: 'bRp1E_2AjdyrWol5f',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    setFormValues({
        username: "",
        email: "",
        message: ""
    });
  };
    return (
        <div>
            <Header/>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="user_name" 
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="user_email"
                    />
                    <label>Message</label>
                    <textarea name="message" />
                    <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
                    <button type="submit" value="Send">Submit</button>
                    
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;