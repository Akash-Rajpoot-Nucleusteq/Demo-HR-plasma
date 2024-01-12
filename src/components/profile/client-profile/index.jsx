import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar.jsx";
import IMG01 from "../../../assets/images/img-1.jpg";
import IMG02 from "../../../assets/images/img-2.jpg";
import IMG03 from "../../../assets/images/img-3.jpg";
import IMG04 from "../../../assets/images/img-4.jpg";
import IMG05 from "../../../assets/images/img-5.jpg";

export const ClientProfile = () => {
  const options = [
    { value: "PHP", label: "PHP" },
    { value: "IOS", label: "IOS" },
    { value: "Design", label: "Design" },
  ];

  return (
    <div className='page-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
            <Sidebar />
          </div>
          <div className='col-xl-9 col-lg-8  col-md-12'>
            <div className='row'></div>
            {/*row */}
            <div className='row'>
              <div className='col-md-6 col-sm-12 d-flex'>
                <div className='card flex-fill ctm-border-radius shadow-sm'>
                  <div className='card-header'>
                    <h4 className='card-title mb-0'>Employee's Manager</h4>
                  </div>
                  <div className='card-body'>
                    <div className='media mb-4'>
                      <img
                        className='rounded mr-3 img-fluid'
                        src={IMG02}
                        alt='avatar'
                        width='50'
                        height='50'
                      />
                      <div className='media-body'>
                        <Link
                          to='employment'
                          className='text-dark text-ellipsis'>
                          Richard Wilson
                        </Link>
                        <p className='ctm-text-sm mb-0 text-ellipsis'>
                          richardwilson@example.com
                        </p>
                      </div>
                    </div>
                    <div className='text-center'></div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 d-flex'>
                <div className='card add-team flex-fill ctm-border-radius shadow-sm'>
                  <div className='card-header'>
                    <h4 className='card-title mb-0'>Who Reports to Employee</h4>
                  </div>
                  <div className='card-body'>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='John Gibbs'>
                        <img className='img-fluid' alt='avatar' src={IMG01} />
                      </span>
                    </Link>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Richard Wilson'>
                        <img className='img-fluid' alt='avatar' src={IMG02} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='card ctm-border-radius shadow-sm'>
              <div className='card-body'>
                <h4 className='card-title mb-2'>Info</h4>
                <div className='card-body text-center'>
                  <div className='row'>
                    <div className='col-6'>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Client Name :</span>
                        <b> Maria</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>
                          Client Contract Start Date:
                        </span>{" "}
                        <b> 14 Jan 2023</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>
                          Client Contract End Date :{" "}
                        </span>
                        <b> 14 Jan 2023</b>
                      </p>
                    </div>
                    <div className='col-6'>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>Active :</span>
                        <b> No</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>
                          Client Manager Name :
                        </span>{" "}
                        <b> Jhonny</b>
                      </p>
                      <p className='card-text mb-3'>
                        <span className='text-primary'>
                          Resource Allocated :{" "}
                        </span>
                        <b> ????</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*row */}
            <div className='row'>
              <div className='col-12'>
                <div className='card ctm-border-radius shadow-sm'>
                  <div className='card-body'>
                    <h4 className='card-title mb-2'>Members</h4>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Danny Ward'>
                        <img alt='avatar' src={IMG01} className='img-fluid' />
                      </span>
                    </Link>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Linda Craver'>
                        <img className='img-fluid' alt='avatar' src={IMG02} />
                      </span>
                    </Link>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Jenni Sims'>
                        <img className='img-fluid' alt='avatar' src={IMG03} />
                      </span>
                    </Link>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Maria Cotton'>
                        <img alt='avatar' src={IMG04} className='img-fluid' />
                      </span>
                    </Link>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='John Gibbs'>
                        <img className='img-fluid' alt='avatar' src={IMG05} />
                      </span>
                    </Link>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Richard Wilson'>
                        <img className='img-fluid' alt='avatar' src={IMG01} />
                      </span>
                    </Link>
                    <Link
                      to='#0'
                      className='btn btn-theme button-1 text-white ctm-border-radius float-right mx-2  mt-2'>
                      {" "}
                      Visit Office
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 col-sm-12 d-flex'>
                <div className='card flex-fill ctm-border-radius shadow-sm'>
                  <div className='card-header'>
                    <h4 className='card-title mb-0'>Point Of Contact</h4>
                  </div>
                  <div className='card-body'>
                    <div className='media mb-4'>
                      <img
                        className='rounded mr-3 img-fluid'
                        src={IMG02}
                        alt='avatar'
                        width='50'
                        height='50'
                      />
                      <div className='media-body'>
                        <Link
                          to='employment'
                          className='text-dark text-ellipsis'>
                          Richard Wilson
                        </Link>
                        <p className='ctm-text-sm mb-0 text-ellipsis'>
                          richardwilson@example.com
                        </p>
                      </div>
                    </div>
                    <div className='text-center'></div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 d-flex'>
                <div className='card add-team flex-fill ctm-border-radius shadow-sm'>
                  <div className='card-header'>
                    <h4 className='card-title mb-0'>Who Reports to Employee</h4>
                  </div>
                  <div className='card-body'>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='John Gibbs'>
                        <img className='img-fluid' alt='avatar' src={IMG01} />
                      </span>
                    </Link>
                    <Link to='employment'>
                      <span
                        className='avatar'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Richard Wilson'>
                        <img className='img-fluid' alt='avatar' src={IMG02} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*row*/}
          </div>
        </div>
      </div>
    </div>
  );
};
