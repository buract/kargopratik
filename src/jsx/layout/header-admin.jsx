import React, { } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, } from 'react-bootstrap'



function Header2() {

    return (
        <>
            <div className="header dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                <Link className="navbar-brand" to={'/'}>Kargo<b>Pratik</b></Link>

                                <div className="dashboard_log my-2">
                                    <div className="d-flex align-items-center">
                                        

                                        <DropdownButton
                                            alignRight
                                            title="Burak Yıldırım"
                                            className="profile_log"
                                        >
                                            <Link to={'./accounts'} className="dropdown-item">
                                                <i className="ri-user-fill"></i> Profil
                                            </Link>
                                            <Link to={'./history'} className="dropdown-item">
                                                <i className="ri-truck-fill"></i> Gönderiler
                                            </Link>
                                            <Link to={'./settings'} className="dropdown-item">
                                                <i className="ri-wallet-3-fill"></i> Bakiye
                                            </Link>
                                            <Link to={'./lock'} className="dropdown-item">
                                                <i className="ri-settings-5-fill"></i> Ayarlar
                                            </Link>
                                            <Link to={'./signin'} className="dropdown-item logout">
                                                <i className="ri-logout-circle-fill"></i> Çıkış
                                            </Link>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header2;