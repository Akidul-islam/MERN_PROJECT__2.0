const SubHome = () => {
  return (
    <div className="hero_area">
      <section className=" slider_section position-relative">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <div>
                        <h1>CLINICARE </h1>
                        <p>
                          A online based clinic system where you will be able to find your desired doctor in online and take necessary suggetion through video call alongside the facilities of E-prescription & your previous medical documents upload.
                        </p>
                        <a>Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="slider-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <div>
                        <h1>health care</h1>
                        <p>
                          Excepturi quam cum ex, expedita inventore adipisci
                          reprehenderit incidunt doloribus delectus quod,
                          placeat nulla culpa nemo, mollitia natus! Beatae illo
                          quas nemo omnis ullam placeat, obcaecati ducimus rem
                          id. Consectetur.
                        </p>
                        <a href="">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <div>
                        <h1>health care</h1>
                        <p>
                          Excepturi quam cum ex, expedita inventore adipisci
                          reprehenderit incidunt doloribus delectus quod,
                          placeat nulla culpa nemo, mollitia natus! Beatae illo
                          quas nemo omnis ullam placeat, obcaecati ducimus rem
                          id. Consectetur.
                        </p>
                        <a href="">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="sliderImg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        </div>
      </section>
    </div>
  );
};
export default SubHome;
