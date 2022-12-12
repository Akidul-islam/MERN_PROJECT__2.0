import { Link } from 'react-router-dom';
const Layout = ({ children }) => {
  return (
    <>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <h3 className="logo-color">
                Clini<span className="logo-sub">carebd</span>
              </h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse ml-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    {' '}
                    About{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">
                    {' '}
                    Services{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    {' '}
                    Login{' '}
                  </Link>
                </li>
              </ul>
              <form className="form-inline ">
                <Link to={'/searchpage'}>
                  {' '}
                  <button className="btn nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </Link>
              </form>
            </div>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <section className="info_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_menu">
                <h5>QUICK LINKS</h5>
                <ul className="navbar-nav  ">
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/appointment">
                      {' '}
                      Appointment{' '}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_course">
                <h5>Thrine Hospital</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humou
                </p>
              </div>
            </div>

            <div className="col-md-5 offset-md-1">
              <div className="info_news">
                <h5>FOR ANY QUERY, PLEASE WRITE TO US</h5>
                <div className="info_contact">
                  <Link to="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{' '}
                    Location
                  </Link>
                  <Link to="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>{' '}
                    demo@gmail.com
                  </Link>
                  <Link to="">
                    <i className="fa fa-phone" aria-hidden="true"></i> Call :
                    +01 1234567890
                  </Link>
                </div>
                <form action="">
                  <input type="text" placeholder="Enter Your email" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="container-fluid footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            Clinicarebd
          </p>
        </div>
      </footer>
    </>
  );
};
export default Layout;
