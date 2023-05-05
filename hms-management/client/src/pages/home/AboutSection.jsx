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
              Esse sed doloribus error ad laborum dolorem nobis? Cum, culpa?
              Distinctio natus excepturi fugit eveniet quasi animi ab obcaecati
              laudantium sit, ratione recusandae accusamus, voluptatum iste
              placeat. Esse, eos cumque. Culpa nesciunt quia qui possimus
              eveniet dolore a debitis consectetur quod. Eligendi recusandae
              placeat soluta
            </p>
            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
