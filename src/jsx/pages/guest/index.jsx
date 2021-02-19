import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../../layout/header1';
import Footer1 from '../../layout/footer1';
import Bottom from '../../element/bottom';
import hero from '../../../images/svg/hero.png'; 
import Testimonial from '../../element/testimonial';
import { Accordion, Tabs, Tab, Card } from 'react-bootstrap';
import bg from '../../../images/linearbg.png';

function LandingPage() {

    return (
        <>
            <Header1 />
            <div className="intro">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-12 col-lg-12 col-12">
                            <div className="intro-content text-center">
                                <h1>Ship your package together <br/> <span className="text-bg-gradient"> <i className="act-svg"></i> Pay Less</span> Ship More
                            </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                        
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <img src={hero} alt="" className="img-fluid" />
                                <div className="dot-grad-1 "></div>
                                <div className="dot-grad-2 "></div>
                                <div className="dot-grad-3 "></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="row pt-5">
                        <div className="col-xl-12">
                            <div className="trusted-business py-5 ">
                                <h3>Türkiye’nin önde gelen butik eticaret şirketleri, ürünlerini kargo pratik’le gönderiyor.</h3>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('../../../images/brand/customer-logo-5.svg').default} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('../../../images/brand/customer-logo-4.svg').default} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('../../../images/brand/customer-logo-3.svg').default} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('../../../images/brand/customer-logo-2.svg').default} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('../../../images/brand/customer-logo-1.svg').default} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            

            

            <div className="getstart section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title">
                                <h2>Birkaç dakika içinde <span>göndermeye</span> başla</h2>
                                <h4  className="text-center">Uygun fiyatlı gönderilerini oluşturman için tek yapman <br/> gereken bir kaç adımdan oluşan üyeliği tamamlaman!</h4>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                                <img className="img-fluid" src={require('../../../images/step-1.png').default} alt="" />
                                <h3>KargoPratik’e <br/> Üye ol.</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                            <img className="img-fluid" src={require('../../../images/step-2.png').default} alt="" />
                                <h3>Şirket bilgilerini <br/> sisteme yükle.</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                            <img className="img-fluid" src={require('../../../images/step-3.png').default} alt="" />
                                <h3>Gönderilerini <br/> oluştur.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-content my-5">
                                <h3 className="">Gönderi ücretinizi  saniyeler  içerisinde <span>hızlıca</span>  öğrenin</h3>
                                <p className="my-lg-4">10,90’dan başlayan fiyatlarla gönderilerinizde <br/> %50’ye varan indirimlerden faydalanın.</p>
                                <Link to={'#'} className="btn  btn-primary">Gönderi Hesapla</Link>
                                <Link to={'#'} className="btn  text-primary">Tüm Fiyatları Keşfet</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={require('../../../images/calculator.png').default} alt="" className="img-fluid" />
                                <div className="dot-grad-4"></div>
                                <div className="dot-grad-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={require('../../../images/dashboard.png').default} alt="" className="" />
                                <div className="dot-grad-6"></div>
                                <div className="dot-grad-7"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-content m-t-50">
                                <h3>There are many variations.</h3>
                                <p>10,90’dan başlayan fiyatlarla gönderilerinizde <br/> %50’ye varan indirimlerden faydalanın.</p>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-5">
                            Merak Ettikleriniz
                            </h3>
                        <Accordion defaultActiveKey="0" id="accordion-faq" className="accordion mt-3">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <span className="card-head text-primary">What Shipping Methods are Available?</span>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <div className="media-body mb-4">
                                                    <div className="d-flex align-items-center">
                                                        <h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Rumis Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                    </div>
                                                </div>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <span className="card-head text-primary">How Long Will it Take To Get My Package?</span>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <div className="media-body mb-4">
                                                    <div className="d-flex align-items-center">
                                                        <h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
                                                    </div>
                                                </div>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            <span className="card-head text-primary">How Do I Track My Order?</span>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <div className="media-body mb-4">
                                                    <div className="d-flex align-items-center">
                                                        <h5> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h5>
                                                    </div>
                                                </div>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>



                                </Accordion>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={require('../../../images/question.png').default} alt="" className="img-fluid" />
                                <div className="dot-grad-4"></div>
                                <div className="dot-grad-5"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="ticket-box section-padding">
                <div className="container" style={{backgroundImage: 'url(${bg})'}}>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ticket-box-content">
                                <h3>Can't find what you're looking for?</h3>
                                <p>Let us help you!</p>
                                <Link to={'#'} className="btn btn-success">Submit Ticket</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           

           



           

           

            <Bottom />

            <Footer1 />
        </>
    )
}

export default LandingPage;