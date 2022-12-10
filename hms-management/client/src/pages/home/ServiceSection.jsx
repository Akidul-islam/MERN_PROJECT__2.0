import React from 'react';

const ServiceSection = () => {
  return (
    <section className="service_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            <span className="design_dot"></span>
            Our Services
          </h2>
          <p>It is a long established fact that a reader will be distracted</p>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 mx-auto">
            <div className="box">
              <img src="images/s1.png" alt="" />
              <a href="#">Cardiology</a>
            </div>
          </div>
          <div className="col-md-4 mx-auto">
            <div className="box">
              <img src="images/s2.png" alt="" />
              <a href="#">Diagnosis</a>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 mx-auto">
            <div className="box">
              <img src="images/s3.png" alt="" />
              <a href="#">Surgery</a>
            </div>
          </div>
          <div className="col-md-4 mx-auto">
            <div className="box">
              <img src="images/s4.png" alt="" />
              <a href="#">First Aid</a>
            </div>
          </div>
          <div className="col-md-4 mx-auto">
            <div className="box">
              <img src="images/s5.png" alt="" />
              <a href="#">Therapy</a>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">View All</a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
