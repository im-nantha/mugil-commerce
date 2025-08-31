import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import IframeMap from "../components/IframeMap/IframeMap";
import ContactForm from "../components/ContactForm/ContactForm";

function ContactUs() {
  return (
    <div>
      <TextBanner bannerText={"Contact Us"} />
      <IframeMap/>
      <ContactForm/>
    </div>
  );
}


export default ContactUs;
