import React, { } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import Footer2 from '../../../layout/footer2';
import SettingsNav from '../../../partial/customer/settings/settings-nav';



function SettingsProfile() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-4">
                            <SettingsNav/>                            
                        </div>
                        <div className="col-xl-9 col-md-8">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Kişisel Bilgiler</h4>
                                        </div>
                                        <div className="card-body">
                                            <form action="#">
                                                <div className="form-row">
                                                    <div className="form-group col-xl-12">
                                                        <label className="mr-sm-2">İsim Soyisim</label>
                                                        <input type="text" className="form-control" placeholder="İsim Soyisim" />
                                                    </div>
                                                    <div className="form-group col-xl-12">
                                                        <label className="mr-sm-2">Telefon</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="+90 532 000 00 00"
                                                               autoComplete="off" name="dob"/>
                                                    </div>
                                                    <div className="form-group col-xl-12">
                                                        <label className="mr-sm-2">Email</label>
                                                        <input type="email" className="form-control"
                                                               placeholder="info@kargopratik.com" name="email"/>
                                                    </div>
                                                    <div className="form-group col-xl-12">
                                                        <label className="mr-sm-2">Adres</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="56, Old Street, Brooklyn" name="presentaddress" />
                                                    </div>

                                                    <div className="col-12">
                                                        <button className="btn btn-success waves-effect">Kaydet</button>
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

export default SettingsProfile;