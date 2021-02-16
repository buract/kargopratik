import React, { } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import Footer2 from '../../../layout/footer2';
import SettingsNav from '../../../partial/admin/settings/settings-nav';



function AdminPreferences() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-4">
                            <SettingsNav />
                        </div>
                        <div className="col-xl-9 col-md-8">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Bildirimler</h4>
                                        </div>
                                        <div className="card-body">
                                            <form action="#">
                                                <div className="form-row col-6">
                                                    <div className="form-group mb-0">
                                                        <label className="toggle">
                                                            <input className="toggle-checkbox" type="checkbox" defaultChecked={true} />
                                                            <span className="toggle-switch"></span>
                                                            <span className="toggle-label">E-Posta Bildirimlerini Aç</span>
                                                        </label>
                                                        <label className="toggle">
                                                            <input className="toggle-checkbox" type="checkbox" />
                                                            <span className="toggle-switch"></span>
                                                            <span className="toggle-label">Gönderi Bildirimlerini Aç</span>
                                                        </label>
                                                        <label className="toggle">
                                                            <input className="toggle-checkbox" type="checkbox" />
                                                            <span className="toggle-switch"></span>
                                                            <span className="toggle-label">Bakiye Bildirimlerini Aç</span>
                                                        </label>
                                                    </div>

                                                    <div className="col-12">
                                                        <button className="btn btn-primary">Kaydet</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default AdminPreferences;