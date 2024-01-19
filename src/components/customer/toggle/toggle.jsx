import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const Toggle = () => {
  return (
    <div className='card shadow-sm ctm-border-radius'>
      <div className='card-body align-center'>
        <ul className='nav nav-tabs  border-0 tab-list-emp'>
          <li className='nav-item pl-3'>
            <NavLink
              to='/client/customer'
              activeClassName='active'
              className='btn btn-theme button-1 text-white ctm-border-radius p-2 add-person ctm-btn-padding'>
              {/* <i className='fa fa-plus'></i>*/} All Client
            </NavLink>
          </li>
          <li className='nav-item pl-3'>
            <NavLink
              to='/client/client-active'
              activeClassName='active'
              className='btn btn-theme button-1 text-white ctm-border-radius p-2 add-person ctm-btn-padding'>
              {/* <i className='fa fa-plus'></i>*/} Active Client 
            </NavLink>
          </li>
          <li className='nav-item pl-3'>
            <NavLink
              to='/client/customer-add'
              activeClassName='active'
              className='btn btn-theme button-1 text-white ctm-border-radius p-2 add-person ctm-btn-padding'>
              <i className='fa fa-plus'></i> Add Client
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
