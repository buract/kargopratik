import React, { } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../partial/customer/shipments/detail-page-title';

import Footer2 from '../../../layout/footer2'
import RecentShipment from "../../../partial/admin/customer/recent-shipment";
import { Accordion, Tabs, Tab, Card } from 'react-bootstrap';
import AccountActivities from '../../../partial/admin/customer/account-activities';



function ShipmentDetailMultiple() {

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
                                    <span className="card-head text-primary">Toplam Gönderi : 4</span><div><span className=" text-primary">Toplam Ücret: 4.200TL</span></div>
                                </Accordion.Toggle>
                                <Accordion.Collapse >
                                    <Card.Body></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <span className="card-head text-primary"> <i className="mr-2 align-middle ri-lg ri-barcode-box-fill "></i> ID 12345</span> <i className="fa text-primary fa-chevron-right"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="row">
                                        <div className="col-6">
                                            <h3 className="mb-4">Gönderici Bilgileri</h3>
                                            <div className="mb-4">
                                                <h5 className="caption">İsim Soyisim</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Burak Yıldırım</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Telefon No</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> 0 (512) 123 12 13</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Adres</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3 className="mb-4">Alıcı Bilgileri</h3>
                                            <div className="mb-4">
                                                <h5 className="caption">İsim Soyisim</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Ahmet Yazar</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Telefon No</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> 0 (512) 123 12 13</h5>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <h5 className="caption">Adres</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3 className="mb-4">Paket Bilgisi</h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="mb-4">
                                                    <h5 className="caption">Paket Boyutu</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 120x30x10(cm) - 12 Kg</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Fiyat</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 1.200TL</h5>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>




                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <span className="card-head text-primary"> <i className="mr-2 align-middle ri-lg ri-barcode-box-fill "></i> ID 12345</span> <i className="fa text-primary fa-chevron-right"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="row">
                                        <div className="col-6">
                                            <h3 className="mb-4">Gönderici Bilgileri</h3>
                                            <div className="mb-4">
                                                <h5 className="caption">İsim Soyisim</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Burak Yıldırım</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Telefon No</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> 0 (512) 123 12 13</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Adres</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3 className="mb-4">Alıcı Bilgileri</h3>
                                            <div className="mb-4">
                                                <h5 className="caption">İsim Soyisim</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Ahmet Yazar</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Telefon No</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> 0 (512) 123 12 13</h5>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <h5 className="caption">Adres</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3 className="mb-4">Paket Bilgisi</h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="mb-4">
                                                    <h5 className="caption">Paket Boyutu</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 120x30x10(cm) - 12 Kg</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Fiyat</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 1.200TL</h5>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>




                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <span className="card-head text-primary"> <i className="mr-2 align-middle ri-lg ri-barcode-box-fill "></i> ID 12345</span> <i className="fa text-primary fa-chevron-right"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className="row">
                                        <div className="col-6">
                                            <h3 className="mb-4">Gönderici Bilgileri</h3>
                                            <div className="mb-4">
                                                <h5 className="caption">İsim Soyisim</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Burak Yıldırım</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Telefon No</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> 0 (512) 123 12 13</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Adres</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3 className="mb-4">Alıcı Bilgileri</h3>
                                            <div className="mb-4">
                                                <h5 className="caption">İsim Soyisim</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Ahmet Yazar</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Telefon No</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> 0 (512) 123 12 13</h5>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <h5 className="caption">Adres</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3 className="mb-4">Paket Bilgisi</h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="mb-4">
                                                    <h5 className="caption">Paket Boyutu</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 120x30x10(cm) - 12 Kg</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Fiyat</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 1.200TL</h5>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>




                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    <span className="card-head text-primary"> <i className="mr-2 align-middle ri-lg ri-barcode-box-fill "></i> ID 12345</span> <i className="fa text-primary fa-chevron-right"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className="row">
                                        <div className="col-6">
                                            <h3 className="mb-4">Gönderici Bilgileri</h3>
                                            <div className="mb-4">
                                                <h5 className="caption">İsim Soyisim</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Burak Yıldırım</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Telefon No</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> 0 (512) 123 12 13</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Adres</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3 className="mb-4">Alıcı Bilgileri</h3>
                                            <div className="mb-4">
                                                <h5 className="caption">İsim Soyisim</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Ahmet Yazar</h5>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="caption">Telefon No</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> 0 (512) 123 12 13</h5>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <h5 className="caption">Adres</h5>
                                                <div className="d-flex align-items-center">
                                                    <h5> Lorem ipsum cad. no 12/2 Tuzla/İstanbul</h5>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3 className="mb-4">Paket Bilgisi</h3>
                                            <div className="d-flex justify-content-between">
                                                <div className="mb-4">
                                                    <h5 className="caption">Paket Boyutu</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 120x30x10(cm) - 12 Kg</h5>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h5 className="caption">Fiyat</h5>
                                                    <div className="d-flex align-items-center">
                                                        <h5> 200TL</h5>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>




                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            
                            



                        </Accordion>
                    </div>














                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default ShipmentDetailMultiple;