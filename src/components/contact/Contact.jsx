import React, { useRef } from "react";
import "./contact.css";
import {
  AiTwotoneMail,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Contact = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    if (captchaVerified) {
      await emailjs
        .sendForm(
          "service_bzha0cz",
          "template_yhmljto",
          form.current,
          "XgsFTpU8a1Bz84jMw"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Please verify the captcha");
    }

    await e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch With Me</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/*Emails*/}
          <article className="contact__option">
            <AiTwotoneMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Hinatsukkii@gmail.com</h5>
            <a href="mailto:Hinatsukkii@gmail.com ">Send me an email</a>
          </article>
          {/**Instagram */}
          <article className="contact__option">
            <AiFillInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>hinatsukki</h5>
            <a href="https://www.instagram.com/hinatsukki/">Send me a DM</a>
          </article>
          {/**Twitter */}
          <article className="contact__option">
            <AiFillTwitterCircle className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@hinatsukkii</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=4686100315">
              Send me a DM
            </a>
          </article>
          {/**END OF CONTACT OPTIONS */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <ReCAPTCHA
            sitekey={
              process.env.REACT_APP_SITE_KEY
            }
            onChange={() => setCaptchaVerified(true)}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Send Me A Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
