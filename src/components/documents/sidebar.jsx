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
                                            Document
                                        </li>
                                    </ol>
                                    <h4 className='text-dark'>Document</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    );
};

export default SideBar;
