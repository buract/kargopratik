import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function SettingsNav() {

    return (
        <>
            <div className="settings_menu">
                <div className="card-header">
                    <h4 className="card-title">Ayarlar</h4>
                </div>
                <div className="card-body">
                    <ul>
                        <li className="nav-item">
                            <Link to={'./settings-profile'} className="nav-link active">
                                <i className="la la-user"></i>
                                <span>Profil Bilgileri</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'./settings-company'} className="nav-link">
                                <i className="la la-university"></i>
                                <span>Şirket Bilgileri</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'./settings-preferences'} className="nav-link">
                                <i className="la la-cog"></i>
                                <span>Tercihler</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'./settings-security'} className="nav-link">
                                <i className="la la-lock"></i>
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