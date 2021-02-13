import React, { } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../partial/customer/profile/page-title';
import CreditWarning from '../../../partial/customer/dashboard/credit-warning';
import Footer2 from '../../../layout/footer2'
import RecentShipment from "../../../partial/customer/dashboard/recent-shipment";



function CustomerDashboard() {

return (
<>
    <Header2 />
    <Sidebar />
    <PageTitle />
    <CreditWarning />




    <div className="content-body">
        <div className="container-fluid">
            

            <div className="row">
                <div className="col-xl-4 col-lg-4 col-xxl-4">


                    <div className="card balance-widget profile-card ">
                        <div className="media">
                            <div className="media-body ">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between"><span className="card-head text-primary">Kişisel Bilgiler</span><a className="caption text-primary">Düzenle</a></div>
                                </div>
                                <div className="mb-4">
                                    <h5 className="caption">İsim Soyisim</h5>
                                    <div className="d-flex align-items-center">
                                        <h5 className="card-head"> Burak Yıldırım</h5>
                                    </div>
                                </div>
                                <div className="media-body mb-4">
                                    <h5 className="caption">Telefon No</h5>
                                    <div className="d-flex align-items-center"><i className="mr-2 ri-phone-fill"></i>
                                        <h5> 0(567) 123 12 13</h5>
                                    </div>
                                </div>
                                <div className="media-body mb-4">
                                    <h5 className="caption">E-Posta</h5>
                                    <div className="d-flex align-items-center"><i className="mr-2 ri-mail-fill"></i>
                                        <h5> burakyildirim@eposta.com.tr</h5>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="caption">Adres</h5>
                                    <div className="d-flex align-items-center">
                                        <h5> Lorem mah. ipsum cad. dolor sokak No:12/7 Tuzla/Istanbul</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-4 col-xxl-4">
                <div className="card balance-widget profile-card ">
                        <div className="media">
                            <div className="media-body ">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between">
                                        <span className="card-head text-primary">İşletme Bilgileri</span>
                                        <a className="caption text-primary">Düzenle</a>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    
                                    <div className="d-flex justify-content-between">
                                        
                                        <div className="col-6 p-0">
                                            <h5 className="caption">İşletme Adı</h5>
                                            <h5> Burak Ticaret</h5>

                                        </div>
                                        <div className="col-6 p-0">
                                        <h5 className="caption">Üyelik Tipi</h5>
                                            
                                            <h5>Şahıs Şirketi</h5>

                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="mb-4">
                                    
                                    <div className="d-flex justify-content-between">
                                        
                                        <div className="col-6 p-0">
                                            <h5 className="caption">Vergi Dairesi</h5>
                                            <h5> Anadolu Kurumlar</h5>

                                        </div>
                                        <div className="col-6 p-0">
                                        <h5 className="caption">Vergi No</h5>
                                            
                                            <h5>12345</h5>

                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="media-body">
                                    <h5 className="caption">Adres</h5>
                                    <div className="d-flex align-items-center">
                                        <h5> Lorem mah. ipsum cad. dolor sokak No:12/7 Tuzla/Istanbul</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-xxl-4">
                    <div className="card balance-widget  profile-card">
                        <div className="media">
                            <div className="media-body ">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between">
                                        <span className="card-head text-primary">Gönderici Bilgileri</span>
                                        <a className="caption text-primary">Düzenle</a>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h5 className="caption">İsim Soyisim</h5>
                                    <div className="d-flex align-items-center">
                                        <h5> Burak Yıldırım</h5>
                                    </div>
                                </div>
                                <div className="media-body mb-4">
                                    <h5 className="caption">Telefon No</h5>
                                    <div className="d-flex align-items-center">
                                        <h5> 0(567) 123 12 13</h5>
                                    </div>
                                </div>
                                <div className="media-body mb-4">
                                    <h5 className="caption">E-Posta</h5>
                                    <div className="d-flex align-items-center">
                                        <h5> burakyildirim@eposta.com.tr</h5>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="caption">Adres</h5>
                                    <div className="d-flex align-items-center">
                                        <h5> Lorem mah. ipsum cad. dolor sokak No:12/7 Tuzla/Istanbul</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RecentShipment />

        </div>
    </div>

    <Footer2 />
</>
)
}

export default CustomerDashboard;