import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function SettingsNav() {

    return (
        <>
            <div className="settings_menu card">
                <div className="card-header">
                    <h4 className="card-title">Ayarlar</h4>
                </div>
                <div className="card-body">
                    <ul>
                        <li className="nav-item">
                            <Link to={'./admin-settings-customer'} className="nav-link active">
                                <i className="ri-user-fill"></i>
                                <span>Müşteri Ayarları</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'./admin-settings-preferences'} className="nav-link">
                                <i className="ri-settings-3-fill"></i>
                                <span>Tercihler</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'./admin-settings-security'} className="nav-link">
                                <i className=" ri-lock-2-fill"></i>
                                <span>Güvenlik</span>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SettingsNav;