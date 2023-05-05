import React from 'react';

const Testimonial = () => {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            <span className="design_dot"></span>
            Testimonial
          </h2>
        </div>
      </div>
      <div className="container px-0">
        <div
          id="customCarousel2"
          className="carousel  carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="box">
                <div className="client_info">
                  <div className="client_name">
                    <h5>Clark Norris</h5>
                    <h6>Default model text</h6>
                  </div>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Variouseditors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Variouseditors
                  now use Lorem Ipsum as their default model text, and a search
                  for 'lorem ipsum' will uncover many web sites still in their
                  infancy. Various
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="client_info">
                  <div className="client_name">
                    <h5>Chris Jonas</h5>
                    <h6>Default model text</h6>
                  </div>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Variouseditors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Variouseditors now use Lorem
                  Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy.
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="client_info">
                  <div className="client_name">
                    <h5>Brad Johns</h5>
                    <h6>Default model text</h6>
                  </div>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Variouseditors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy, editors now use Lorem Ipsum as
                  their default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Variouseditors
                  now use Lorem Ipsum as their default model text, and a search
                  for 'lorem ipsum' will uncover many web sites still in their
                  infancy. Various
                </p>
              </div>
            </div>
          </div>
          <div className="carousel_btn-box">
            <a
              className="carousel-control-prev"
              href="#customCarousel2"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#customCarousel2"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
