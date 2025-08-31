import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="content-left">
          <div className="title fw-medium display-md-2">Contact Us</div>
          <p className="sub-title text-main">
            Have a question? Please contact us using the customer support <br />{" "}
            channels below.
          </p>
          <ul className="contact-list">
            <li>
              <p>
                Address:{" "}
                <a
                  className="link"
                  href="https://www.google.com/maps?q=15Yarranst,Punchbowl,NSW,Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  15 Yarran st, Punchbowl, NSW, Australia
                </a>
              </p>
            </li>
            <li>
              <p>
                Phone number:{" "}
                <a className="link" href="tel:123456">
                  +1 234 567
                </a>
              </p>
            </li>
            <li>
              <p>
                Email:{" "}
                <a className="link" href="mailto:contact@vineta.com">
                  contact@vineta.com
                </a>
              </p>
            </li>
            <li>
              <p>
                Open:{" "}
                <span className="text-main">8am - 7pm, Mon - Sat</span>
              </p>
            </li>
          </ul>
          <ul className="tf-social-icon style-large">
            <li>
              <a
                href="https://www.facebook.com/"
                className="social-item social-facebook"
              >
                <i className="icon icon-fb"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="social-item social-instagram"
              >
                <i className="icon icon-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/" className="social-item social-x">
                <i className="icon icon-x"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.snapchat.com/"
                className="social-item social-snapchat"
              >
                <i className="icon icon-snapchat"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="content-right">
          <div className="title fw-medium display-md-2">Get In Touch</div>
          <p className="sub-title text-main">
            Please submit&nbsp;all general enquiries&nbsp;in the contact form
            below and we look forward to hearing from you soon.
          </p>

          <div className="form-contact-wrap">
            <form
              method="post"
              className="form-default"
              id="contactform"
              action="./contact/contact-process.php"
              noValidate
            >
              <div className="wrap">
                <div className="cols">
                  <fieldset>
                    <label htmlFor="name">Your name*</label>
                    {/* <input
                      name="name"
                      id="name"
                      className="radius-8"
                      type="text"
                      required
                    /> */}
                  </fieldset>
                  <fieldset>
                    <label htmlFor="email">Your email*</label>
                    {/* <input
                      name="email"
                      id="email"
                      className="radius-8"
                      type="email"
                      required
                    /> */}
                  </fieldset>
                </div>

                <div className="cols">
                  <fieldset className="textarea">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      className="radius-8"
                    ></textarea>
                  </fieldset>
                </div>

                <div className="button-submit send-wrap">
                  <button className="tf-btn animate-btn" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;