import React from 'react';
import classes from "../styles/contactFrom.module.css";

const ContactFrom = () => {
    return (
        <form className={`${classes.contactForm}`}>
            <div className={`${classes.contactForm_group}`}>
                <input type="text" placeholder='Your Name' />
            </div>
            <div className={`${classes.contactForm_group}`}>
                <input type="email" placeholder='Enter Email' />
            </div>
            <div className={`${classes.contactForm_group}`}>
                <textarea type="text" rows={5} placeholder='Message' />
            </div>
            <button className="primary_btn" type='submit'>Send</button>
        </form>
    );
};

export default ContactFrom;