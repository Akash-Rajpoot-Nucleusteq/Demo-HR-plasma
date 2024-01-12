import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("Current Assignments");

  const handleNavLinkClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <aside className='sidebar sidebar-user'>
      <div className='card ctm-border-radius shadow-sm'>
        <div className='card-body py-4'>
          <div className='row'>
            <div className='col-md-12 mr-auto text-left'>
              <div className='custom-search input-group'>
                <div className='custom-breadcrumb'>
                  <ol className='breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2'>
                    <li className='breadcrumb-item d-inline-block'>
                      <Link to='admin' className='text-dark'>
                        Home
                      </Link>
                    </li>
                    <li className='breadcrumb-item d-inline-block active'>
                      Profile
                    </li>
                  </ol>
                  <h4 className='text-dark'>Assignment</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card'>
        <div className='card-body'>
          <div
            className='flex-column list-group'
            id='v-pills-tab'
            role='tablist'
            aria-orientation='vertical'>
            <li
              className={`list-group-item text-center button-6 ${
                activeTab === "Current Assignments" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("Current Assignments")}>
              Current Assignments
            </li>
            <li
              className={`list-group-item text-center button-6 ${
                activeTab === "Past Assignments" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("Past Assignments")}>
              Past Assignments
            </li>
            <li
              className={`list-group-item text-center button-6 ${
                activeTab === "Future Assignments" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("Future Assignments")}>
              Future Assignments
            </li>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
