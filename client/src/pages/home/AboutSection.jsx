import React from 'react';

const AboutSection = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            <span className="design_dot"></span>
            About Our Hospital
          </h2>
        </div>
        <div className="col-md-7 mx-auto px-0">
          <div className="img-box b2">
            <img src="images/about-img.png" alt="about" />
          </div>
        </div>
        <div className="col-md-9 mx-auto px-0">
          <div className="detail-box">
            <p>
              About
              A online based clinic system where you will be able to find your desired doctor in online and take necessary suggetion through video call alongside the facilities of E-prescription & your previous medical
              documents upload.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
