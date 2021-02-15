import React, { useState } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../partial/customer/shipments/page-title';
import Footer2 from '../../../layout/footer2';




function NewShipment() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-xl-12 col-md-8">
                            <div className="row">
                            <div className="col-xl-4 col-lg-4 col-xxl-4">
                    <div className="card balance-widget profile-card ">
                        <div className="media">
                            <div className="media-body">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between">
                                        <span className="card-title text-primary">Gönderici Bilgileri</span>
                                        
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h5 className="caption">İsim Soyisim</h5>
                                    <div className="d-flex align-items-end">
                                        <h5> Burak Yıldırım</h5>
                                    </div>
                                </div>
                                <div className="media-body mb-4">
                                    <h5 className="caption">Telefon No</h5>
                                    <div className="d-flex align-items-end">
                                        <h5> 0(567) 123 12 13</h5>
                                    </div>
                                </div>
                                <div className="media-body mb-4">
                                    <h5 className="caption">E-Posta</h5>
                                    <div className="d-flex align-items-end">
                                        <h5> burakyildirim@eposta.com.tr</h5>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="caption">Adres</h5>
                                    <div className="d-flex align-items-end">
                                        <h5> Lorem mah. ipsum cad. dolor sokak No:12/7 Tuzla/Istanbul</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            <div className="col-xl-8">
                                    <div className="card input-card">
                                        <div className="card-header">
                                            <h4 className="card-title">Alıcı Bilgileri</h4>
                                        </div>
                                        <div className="card-body">
                                            <form action="#">
                                                <div className="form-row">
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">İsim Soyisim</label>
                                                        <input type="text" className="form-control" placeholder="İsim Soyisim" />
                                                    </div>
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">Telefon</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="+90 532 000 00 00"
                                                               autoComplete="off" name="dob"/>
                                                    </div>
                                                    <div className="form-group col-xl-6">
                                                    <label htmlFor="City">İl</label>
                                                        <select className="form-control nice-select" id="City">
                                                        <option>İstanbul</option>
                                                        <option>Ankara</option>
                                                        <option>İzmir</option>
                                                        <option>Antalya</option>
                                                        <option>Sinop</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-xl-6">
                                                    <label htmlFor="State">İlçe</label>
                                                        <select className="form-control nice-select" id="State">
                                                        <option>Tuzla</option>
                                                        <option>Pendik</option>
                                                        <option>Kartal</option>
                                                        <option>Maltepe</option>
                                                        <option>Kadıköy</option>
                                                        </select>
                                                    </div>
                                                    
                                                    <div className="form-group col-xl-12">
                                                        <label className="mr-sm-2">Adres</label>
                                                        <textarea type="text" className="form-control"
                                                               placeholder="56, Old Street, Brooklyn" name="presentaddress" rows="3"/>
                                                    </div>

                                                    <div className="form-group col-xl-3">
                                                        <label className="mr-sm-2">En</label>
                                                        <input type="number" className="form-control"
                                                               placeholder="0"
                                                               />
                                                    </div>
                                                    <div className="form-group col-xl-3">
                                                        <label className="mr-sm-2">Boy</label>
                                                        <input type="number" className="form-control"
                                                               placeholder="0"
                                                               />
                                                    </div>
                                                    <div className="form-group col-xl-3">
                                                        <label className="mr-sm-2">Yükseklik</label>
                                                        <input type="number" className="form-control"
                                                               placeholder="0"
                                                               />
                                                    </div>
                                                    <div className="form-group col-xl-3">
                                                        <label className="mr-sm-2">Ağırlık</label>
                                                        <input type="number" className="form-control"
                                                               placeholder="0"
                                                               />
                                                    </div>
                                                   

                                                    
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                                        <button className="btn col-3 btn-primary mb-5 float-right waves-effect">Gönder</button>
                                                        <button className="btn col-3 btn text-primary mb-5 float-right waves-effect">Hesapla</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default NewShipment;