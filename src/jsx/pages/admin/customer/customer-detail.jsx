import React, { } from 'react';
import Header2 from '../../../layout/header-admin';
import Sidebar from '../../../layout/sidebar-admin';
import PageTitle from '../../../partial/admin/customer/page-title';

import Footer2 from '../../../layout/footer2'
import RecentShipment from "../../../partial/admin/customer/recent-shipment";
import { Accordion, Tabs, Tab, Card } from 'react-bootstrap';
import AccountActivities from '../../../partial/admin/customer/account-activities';



function CustomerDetail() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />
            




            <div className="content-body">
                <div className="container-fluid">
                    
                        
                            <div className="card-body m-auto col-8 ">

                                <Accordion defaultActiveKey="0" id="accordion-faq" className="accordion">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} >
                                            <span className="card-head text-primary">ID: 123456</span><div><span className=" text-primary">Bakiye 12.000TL</span></div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse >
                                            <Card.Body></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <span className="card-head text-primary">Müşteri Bilgileri</span>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <div className="mb-4">
                                                    <h5 className="caption">İsim Soyisim</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Burak Yıldırım</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Şirket Tipi</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Şahıs Şirketi</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Şirket Adı</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Yıldırım Ticaret Turizm</h5>
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
                                                <div className="media-body mb-4">
                                                    <h5 className="caption">Adres</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Lorem mah. ipsum cad. dolor sokak No:12/7 Tuzla/Istanbul</h5>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <div className="d-flex justify-content-between">
                                                        <h5 className="caption">Müşteri Kategorisi</h5>
                                                        <p className="caption text-primary">Düzenle</p>

                                                    </div>

                                                    <div className="d-flex align-items-center">
                                                        <i className="ri-checkbox-blank-circle-fill text-danger"></i><h5 className="mb-0 ml-2" > Kırmızı</h5>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <span className="card-head text-primary">Fatura Bilgileri</span>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <div className="mb-4">
                                                    <h5 className="caption">İşletme Adı</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Yıldırım Ticaret Turizm</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Vergi Dairesi</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Anadolu Kurumlar</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Vergi No</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 3334 111 223</h5>
                                                    </div>
                                                </div>


                                                <div className="media-body mb-4">
                                                    <h5 className="caption">Adres</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> Lorem mah. ipsum cad. dolor sokak No:12/7 Tuzla/Istanbul</h5>
                                                    </div>
                                                </div>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>



                                </Accordion>
                            </div>
                            <RecentShipment />
                            <AccountActivities />

                        

                        
                    








                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default CustomerDetail;