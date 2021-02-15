import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import Footer2 from '../../../layout/footer2';
import SettingsNav from '../../../partial/customer/settings/settings-nav';



function SettingsSecurity() {

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
                            <div className="card">
                                <div className="">
                                    <div className="card-header">
                                        <h4 className="card-title">Güvenlik</h4>
                                    </div>
                                    <div className="card-body">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h3 className="col-6 mb-4">Şifre Yenileme</h3>
                                                    <div className="form-group col-xl-12">

                                                        <label className="mr-sm-2">Eski Parola</label>
                                                        <input type="text" className="form-control"
                                                            placeholder="**********"
                                                            autoComplete="off" name="dob" />
                                                    </div>
                                                    <div className="form-group col-xl-12">
                                                        <label className="mr-sm-2">Yeni Parola</label>
                                                        <input type="text" className="form-control"
                                                            placeholder="Lütfen Yeni Parolanızı Giriniz"
                                                            autoComplete="off" name="dob" />
                                                    </div>
                                                    <div className="form-group col-xl-12">
                                                        <label className="mr-sm-2">Yeni Parolanızı Tekrarlayın</label>
                                                        <input type="text" className="form-control"
                                                            placeholder="Lütfen Yeni Parolanızı Tekrarlayın"
                                                            autoComplete="off" name="dob" />
                                                    </div>
                                                    <div className="form-group col-xl-12">
                                                        <button className="btn btn-primary float-right mt-4">Kaydet</button>
                                                    </div>

                                                    

                                                </div>
                                                <div className="col-6">
                                                        <h3 className=" mb-4">Hesabı Dondur</h3>

                                                        <p>
                                                        Hesabını 24 saat içinde dondurulacaktır. Cari ve minimum bakiyeniz 3-7 iş günü içerisinde kartınıza geri aktarılacaktır. 
                                                        </p>
                                                        
                                                        <Link to={'./settings-account-freeze'} type="submit" className="btn btn-primary float-right ">Hesabımı Dondur</Link>

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

            <Footer2 />
        </>
    )
}

export default SettingsSecurity;