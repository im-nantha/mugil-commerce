import React from "react";
import "./IframeMap.scss"

const IframeMap = () => {
  return (
    <div className="iframe">
      <iframe
        title="Mugil Elite Mart Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.3924422640143!2d78.9990676!3d11.737378999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab67ab242e46ef%3A0x1fe174fd64ad47f9!2sVasi%20Glass%20And%20Plywoods%20(%20Mugil%20Elite%20Mart%20)!5e0!3m2!1sen!2sin!4v1756108515393!5m2!1sen!2sin"
        className="map"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default IframeMap;