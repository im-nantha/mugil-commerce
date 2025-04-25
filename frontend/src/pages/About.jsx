import React from "react";
import banner3 from "../assets/images/banner3.png";

function About() {
  return (
    <div>
      <main>
        <h2 className="text-center py-4">About us</h2>
        <img src={banner3} alt="banner" className="w-100" />
      </main>
    </div>
  );
}

export default About;
