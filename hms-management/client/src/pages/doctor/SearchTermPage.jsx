import React, { useState } from 'react';
import Layout from '../../shareUi/Layout';
import SearchTerm from '../../shareUi/SearchTerm';
const doctorDesk = [
  {
    id: 1,
    name: 'Freddie',
    spann: ' @Founder',
    website: 'websitename.com',
    image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    path: 'doctor',
    rate: 'rate',
    category: 'adis',
  },
  {
    id: 2,
    name: 'Dr Plourde',
    spann: ' @Founder',
    website: 'websitename.com',
    image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    path: 'doctor',
    rate: 'rate',
    category: 'cancer',
  },
  {
    id: 3,
    name: 'Dr Alisa',
    spann: ' @Founder',
    website: 'websiteallisa.com',
    image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    path: 'doctor',
    rate: 'rate',
    category: 'algeria',
  },
];
const SearchTermPage = () => {
  const [docData, setDocData] = useState(doctorDesk);
  const searchItem = (inputValue) => {
    const queryItem = docData.filter((item) =>
      item.name.toLowerCase().includes(inputValue)
    );
    setDocData(queryItem);
  };
  return (
    <Layout>
      <div className="content">
        <div className="container">
          <div>
            <SearchTerm docData={docData} searchItem={searchItem} />
          </div>

          {docData.length == '0' ? (
            <h2>not found </h2>
          ) : (
            <>
              <div className="row">
                {docData.map((item) => {
                  return (
                    <div className="col-lg-4" key={item.id}>
                      <div className="text-center card-box">
                        <div className="member-card pt-2 pb-2">
                          <div className="thumb-md member-thumb mx-auto">
                            <img
                              src={item.image}
                              className="rounded-circle img-thumbnail"
                              alt="profile-image"
                            />
                          </div>
                          <div className="">
                            <h4>{item.name}</h4>
                            <p className="text-muted">
                              {item.spann} <span>| </span>
                              <span>
                                <a href="#" className="text-pink">
                                  {item.website}
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
                        </div>
                      </div>
                    </div>
                  );
                })}
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
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchTermPage;
