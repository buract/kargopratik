import React, { } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../partial/customer/dashboard/page-title';
import CreditWarning from '../../../partial/customer/dashboard/credit-warning';
import Footer2 from '../../../layout/footer2';
import RecentShipment from "../../../partial/customer/dashboard/recent-shipment";



function AddBalance() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />
            
            



            <div className="content-body">
                <div className="container-fluid">
                    <div className="row col-8 m-auto">

                        <h2 className="col-12 mb-5">Paket Seç</h2>
                        
                    

                        
                        
                        <div className="col-xl-6 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card ">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Paket-1</h5>
                                        <span>50 TL</span>
                                        
                                    </div>
                                    <a href="" className="btn text-primary">Yükle<i className=" ri-arrow-right-line align-middle ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card ">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Paket-2</h5>
                                        <span>100 TL</span>
                                        
                                    </div>
                                    <a href="" className="btn text-primary">Yükle<i className=" ri-arrow-right-line align-middle ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card ">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Paket-3</h5>
                                        <span>150 TL</span>
                                        
                                    </div>
                                    <a href="" className="btn text-primary">Yükle<i className=" ri-arrow-right-line align-middle ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card ">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Paket-4</h5>
                                        <span>200 TL</span>
                                        
                                    </div>
                                    <a href="" className="btn text-primary">Yükle<i className=" ri-arrow-right-line align-middle ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card ">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Paket-5</h5>
                                        <span>2500 TL</span>
                                        
                                    </div>
                                    <a href="" className="btn text-primary">Yükle<i className=" ri-arrow-right-line align-middle ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card ">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Paket-6</h5>
                                        <span>3000 TL</span>
                                        
                                    </div>
                                    <a href="" className="btn text-primary">Yükle<i className=" ri-arrow-right-line align-middle ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card ">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Paket-7</h5>
                                        <span>4500 TL</span>
                                        
                                    </div>
                                    <a href="" className="btn text-primary">Yükle<i className=" ri-arrow-right-line align-middle ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card ">
                                <div className="media">
                                    <div className="media-body">
                                    <h5>Kendin Belirle</h5>
                                        <span>Farklı Tutar</span>
                                        
                                    </div>
                                    <a href="" className="btn text-primary">Yükle<i className=" ri-arrow-right-line align-middle ml-2"></i></a>
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

export default AddBalance;