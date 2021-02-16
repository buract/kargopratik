import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import Footer2 from '../../../layout/footer2';
import SettingsNav from '../../../partial/admin/settings/settings-nav';



function AdminSettingsCustomer() {

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
                                        <h4 className="card-title">Müşteri Ayarları</h4>
                                    </div>
                                    <div className="card-body row">
                                        <form action="#" className="col-6">

                                            <div className="form-group ">
                                                <label className="mr-sm-2">Minimum Bakiye</label>
                                                <input type="text" className="form-control"
                                                    placeholder="Minimum Bakiye"
                                                    autoComplete="off" name="dob" />
                                                <button className="btn btn-primary float-right mt-4">Güncelle</button>
                                            </div>

                                        </form>
                                        <div className="col-6">


                                            <div className="form-group ">
                                                <label htmlfor="customerCategory">Müşteri Kategorisi</label>
                                                <select class="form-control" id="customerCategory">
                                                    <option>Kırmızı Kategori</option>
                                                    <option>Sarı Kategori</option>
                                                    <option>Mavi Kategori</option>
                                                    <option>Yeşil Kategori</option>

                                                </select>

                                            </div>
                                            <div>
                                                <button className="btn btn-primary ml-4 float-right">Güncelle</button>

                                                <Link to={'./settings-account-freeze'} type="submit" className="btn btn-outline-primary text-primary float-right ">Yeni ekle</Link>

                                            </div>


                                        </div>
                                        <form action="#" className="col-6">
                                            <div className="form-group ">
                                                <label className="mr-sm-2">Yıllık Hedef</label>
                                                <input type="text" className="form-control"
                                                    placeholder="Lütfen Yeni Parolanızı Giriniz"
                                                    autoComplete="off" name="dob" />
                                                <button className="btn btn-primary float-right mt-4">Kaydet</button>
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

export default AdminSettingsCustomer;