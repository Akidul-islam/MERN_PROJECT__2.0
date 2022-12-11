import React from 'react';
import Layout from '../../shareUi/Layout';
import SearchTerm from '../../shareUi/SearchTerm';
const SearchTermPage = () => {
  return (
    <Layout>
      <div className="content">
        <div className="container">
          <SearchTerm />
          <div className="row">
            <div className="col-sm-4">
              <a
                href="#custom-modal"
                className="btn btn-custom waves-effect waves-light mb-4"
                data-animation="fadein"
                data-plugin="custommodal"
                data-overlayspeed="200"
                data-overlaycolor="#36404a"
              >
                <i className="mdi mdi-plus"></i> Add Member
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className="">
                    <h4>Freddie J. Plourde</h4>
                    <p className="text-muted">
                      @Founder <span>| </span>
                      <span>
                        <a href="#" className="text-pink">
                          websitename.com
                        </a>
                      </span>
                    </p>
                  </div>
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Message Now
                  </button>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>2563</h4>
                          <p className="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>6952</h4>
                          <p className="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>1125</h4>
                          <p className="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className="">
                    <h4>Julie L. Arsenault</h4>
                    <p className="text-muted">
                      @Programmer <span>| </span>
                      <span>
                        <a href="#" className="text-pink">
                          websitename.com
                        </a>
                      </span>
                    </p>
                  </div>
                  {/* social link list */}
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Message Now
                  </button>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>8471</h4>
                          <p className="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>8512</h4>
                          <p className="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>4751</h4>
                          <p className="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className="">
                    <h4>Christopher Gallardo</h4>
                    <p className="text-muted">
                      @Webdesigner <span>| </span>
                      <span>
                        <a href="#" className="text-pink">
                          websitename.com
                        </a>
                      </span>
                    </p>
                  </div>
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Message Now
                  </button>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>1021</h4>
                          <p className="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>4562</h4>
                          <p className="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>3621</h4>
                          <p className="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className="">
                    <h4>Joseph M. Rohr</h4>
                    <p className="text-muted">
                      @Webdesigner <span>| </span>
                      <span>
                        <a href="#" className="text-pink">
                          websitename.com
                        </a>
                      </span>
                    </p>
                  </div>
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Message Now
                  </button>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>7845</h4>
                          <p className="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>1254</h4>
                          <p className="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>5846</h4>
                          <p className="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className="">
                    <h4>Mark K. Horne</h4>
                    <p className="text-muted">
                      @Director <span>| </span>
                      <span>
                        <a href="#" className="text-pink">
                          websitename.com
                        </a>
                      </span>
                    </p>
                  </div>
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Message Now
                  </button>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>4851</h4>
                          <p className="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>10250</h4>
                          <p className="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>895</h4>
                          <p className="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  {/* break */}
                  <div className="">
                    <h4>James M. Fonville</h4>
                    <p className="text-muted">
                      @Manager <span>| </span>
                      <span>
                        <a href="#" className="text-pink">
                          websitename.com
                        </a>
                      </span>
                    </p>
                  </div>
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Message Now
                  </button>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>4560</h4>
                          <p className="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>12350</h4>
                          <p className="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>742</h4>
                          <p className="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className="">
                    <h4>Jade M. Walker</h4>
                    <p className="text-muted">
                      @Webdeveloper <span>| </span>
                      <span>
                        <a href="#" className="text-pink">
                          websitename.com
                        </a>
                      </span>
                    </p>
                  </div>
                  {/* map throw */}
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Message Now
                  </button>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>3520</h4>
                          <p className="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>4587</h4>
                          <p className="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>423</h4>
                          <p className="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className="">
                    <h4>Mathias L. Lassen</h4>
                    <p className="text-muted">
                      @Webdesigner <span>| </span>
                      <span>
                        <a href="#" className="text-pink">
                          websitename.com
                        </a>
                      </span>
                    </p>
                  </div>
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Message Now
                  </button>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>7851</h4>
                          <p className="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>10020</h4>
                          <p className="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>1036</h4>
                          <p className="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                  <div className="thumb-lg member-thumb mx-auto">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      className="rounded-circle img-thumbnail"
                      alt="profile-image"
                    />
                  </div>
                  <div className="">
                    <h4>Alfred M. Bach</h4>
                    <p className="text-muted">
                      @Manager <span>| </span>
                      <span>
                        <a href="#" className="text-pink">
                          websitename.com
                        </a>
                      </span>
                    </p>
                  </div>
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        className="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Message Now
                  </button>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>7421</h4>
                          <p className="mb-0 text-muted">Wallets Balance</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>14754</h4>
                          <p className="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-3">
                          <h4>11525</h4>
                          <p className="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-right">
                <ul className="pagination pagination-split mt-0 float-right">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>{' '}
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>{' '}
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchTermPage;
