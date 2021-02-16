import React, { } from 'react';
import { Link } from 'react-router-dom';



function Sidebar() {

    return (
        <>
            <div className="sidebar">
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={'./customer-dashboard'} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i className="ri-dashboard-fill"></i></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./customer-profile'} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i className="ri-user-fill"></i></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./shipment-list'} data-toggle="tooltip" data-placement="right" title="Exchange">
                                <span><i className="ri-truck-fill"></i></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./customer-billings'} data-toggle="tooltip" data-placement="right" title="Account">
                                <span><i className="ri-wallet-3-fill"></i></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./settings-profile'} data-toggle="tooltip" data-placement="right" title="Setting">
                                <span><i className="ri-settings-5-fill"></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;