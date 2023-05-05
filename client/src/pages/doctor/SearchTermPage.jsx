import React, { useState, useEffect } from 'react';
import Layout from '../../shareUi/Layout';
import SearchTerm from '../../shareUi/SearchTerm';
import api from '../../ContextApi/Api/apiCrudOperation'
import { Link } from 'react-router-dom';

const SearchTermPage = () => {
  const [docData, setDocData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [inputValue, setValue] = useState('');
  const DOCTOR__URL = `gigs`
  const changeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const Time = 1000
  useEffect(() => {
    const d = setTimeout(async () => {
      try {
        setLoading(true)
        // const { data: { Gigs } } = await axios.get('http://localhost:3000/api/v1/gigs')
        const { data: { Gigs } } = await api.getAll(`${DOCTOR__URL}?title=${inputValue}`)
        setDocData(Gigs)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    }, Time)
    return () => clearTimeout(d)
  }, [inputValue])

  return (
    <Layout>
      <div className="content">
        <div className="container">
          <div>
            <SearchTerm changeHandler={changeHandler} inputValue={inputValue} />
          </div>

          {docData && docData.length == '0' ? (
            <h2>not found </h2>
          ) : loading ? <h1>Loading.....</h1> : (
            <>
              <div className="row">
                {docData && docData.map((item) => {
                  return (
                    <div className="col-lg-4" key={item._id}>
                      <div className="text-center card-box">
                        <div className="member-card pt-2 pb-2">
                          <div className="thumb-md member-thumb mx-auto">
                            <img
                              src={item?.Image}
                              className="rounded-circle img-thumbnail"
                              alt="profile-image"
                            />
                          </div>
                          <div className="">
                            <Link to={`/preview${item._id}`}>{item.title}</Link>
                            <p className="text-muted">
                              {item.price} <span>| </span>
                              <span>
                                <a href="#" className="text-pink">
                                  {item.title}
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
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {docData.length > 9 && <div className="row">
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
              </div>}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchTermPage;
