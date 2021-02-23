import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../../layout/header1';
import Footer1 from '../../layout/footer1';
import Bottom from '../../element/bottom';
import hero from '../../../images/hero-2.png';
import heroMobile from '../../../images/hero-mobile.png';
import Testimonial from '../../element/testimonial';
import { Accordion, Tabs, Tab, Card } from 'react-bootstrap';
import bg from '../../../images/linearbg.png';
import Modal from '../../component/modal';

function App() {
    return (
        <>
            <Header1 />
            <div className="intro">
                <div className="">
                    <div className="row justify-content-between align-items-center">
                        <div className="container">
                            <div className="col-xl-12 col-lg-12 col-12">
                                <div className="intro-content text-center">
                                    <h1>KargoPratik ile <br /> <span className="text-bg-gradient"> <i className="act-svg"></i> Daha az öde</span> Daha çok gönder
                                </h1>
                                    <p>Gönderi hacminiz ne olursa olsun, Türkiye'nin her yerine en uygun fiyat avantajıyla</p>
                                </div>


                            </div>
                        </div>
                        
                        <div className="row m-auto">
                            <div className="col-12 position-relative">
                                <img src={hero} alt="" className="img-fluid img-hero" />
                                <img src={heroMobile} alt="" className="img-fluid img-hero-mobile" />
                                <img className="img-fluid mug-1" src={require('../../../images/mug-1.png').default} alt="" />
                                <img className="img-fluid mug-2" src={require('../../../images/mug-2.png').default} alt="" />
                                <img className="img-fluid mug-3" src={require('../../../images/mug-3.png').default} alt="" />
                                <img className="img-fluid mug-4" src={require('../../../images/mug-4.png').default} alt="" />
                                <div className="dot-grad-1 "></div>
                                <div className="dot-grad-2 "></div>
                                <div className="dot-grad-3 "></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="trusted-business text-center font-size-10 pB-5 ">
                            <h3>Türkiye’nin önde gelen butik eticaret şirketleri, ürünlerini kargo pratik’le gönderiyor.</h3>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-lg-auto col-md-6 my-4">
                                <div className="trusted-logo">
                                    <Link to={'#'}><img className="img-fluid" src={require('../../../images/brand/customer-logo-5.svg').default} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-6 my-4">
                                <div className="trusted-logo">
                                    <Link to={'#'}><img className="img-fluid" src={require('../../../images/brand/customer-logo-4.svg').default} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-6 my-4">
                                <div className="trusted-logo">
                                    <Link to={'#'}><img className="img-fluid" src={require('../../../images/brand/customer-logo-3.svg').default} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-6 my-4">
                                <div className="trusted-logo">
                                    <Link to={'#'}><img className="img-fluid" src={require('../../../images/brand/customer-logo-2.svg').default} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-6 my-4">
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
                            <div className="col-12 section-title">
                                <h2>Birkaç dakika içinde <span>göndermeye</span> başla</h2>
                                <h4 className="text-center">Uygun fiyatlı gönderilerini oluşturman için tek yapman <br /> gereken bir kaç adımdan oluşan üyeliği tamamlamak!</h4>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 mb-5 mb-lg-0">
                            <div className="getstart-content">
                                <img className="img-fluid" src={require('../../../images/step-1.png').default} alt="" />
                                <h3> Ücretsiz KargoPratik’e <br /> Üye ol.</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 mb-5 mb-lg-0">
                            <div className="getstart-content">
                                <img className="img-fluid" src={require('../../../images/step-2.png').default} alt="" />
                                <h3>Şirket bilgilerini <br /> sisteme yükle.</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 mb-5 mb-lg-0">
                            <div className="getstart-content">
                                <img className="img-fluid" src={require('../../../images/step-3.png').default} alt="" />
                                <h3>Gönderilerini <br /> oluştur.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-left order-2 order-lg-1">
                            <div className="service-content my-5">
                                <h3 className="">Gönderi ücretinizi  saniyeler  içerisinde <span>hızlıca</span>  öğrenin</h3>
                                <p className="my-lg-4">10,90’dan başlayan fiyatlarla gönderilerinizde <br /> %60’ye varan indirimlerden faydalanın.</p>
                                {/*<Link to={'#'} className="btn  btn-primary">Gönderi Hesapla</Link>*/}

                                <Modal name="Gönderi Hesapla" className="btn  btn-primary"/>

                                <Link to={'#'} className="btn  text-primary">Tüm Fiyatları Keşfet</Link>

                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-left order-1 order-lg-2">
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
                        <div className="col-lg-6 text-center text-lg-left">
                            <div className="service-img">
                                <img src={require('../../../images/dashboard.png').default} alt="" className="img-fluid" />
                                <div className="dot-grad-6"></div>
                                <div className="dot-grad-7"></div>
                            </div>
                        </div>
                        <div className="col-lg-6  text-lg-left">
                            <div className="service-content mt-5 mt-lg-0">
                                <h3>Gönderilerinizi kolayca hazırlayın ve takip edin</h3>
                                <p>Gönderi girişlerinizi hiç olmadığı kadar kolay ve hızlı tamamlayarak, kargo numaranızı popüler eticaret sitelerinde olduğu gibi anında alabilir ve şubeye teslim ettikten sonra tek bir panel üzerinden takip edebilirsiniz.</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <h3 className="mb-5">
                                Merak Ettikleriniz
                            </h3>
                            <Accordion defaultActiveKey="0" id="accordion-faq" className="accordion col-lg-10 mt-3">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <span className="card-head text-primary">Paketlerimi KargoPratik üzerinden hangi kargo firmaları ile gönderebilirim?</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <div className="media-body mb-4">
                                                <div className="d-flex align-items-center">
                                                    <h5> Şu an MNG Kargo ile işbirliğimiz bulunmakla birlikte, ilerleyen dönemde farklı kargo şirketleri de sistemimize dahil olacaktır.</h5>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <span className="card-head text-primary">Üye olmak ve avantajlı gönderi fiyatlarından yararlanmak için aylık kaç adet gönderi yapmamız gerekmektedir?</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <div className="media-body mb-4">
                                                <div className="d-flex align-items-center">
                                                    <h5>  KargoPratik herhangi bir taahhüt, kota veya minimum gönderi uygulaması bulunmamaktadır. Ayda bir adet gönderi yapan üyelerimiz de diğer üyelerimiz gibi avantajlı fiyatlarımızdan faydalanabilmektedir.</h5>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <span className="card-head text-primary">KargoPratik üyeliği ücretli midir?</span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <div className="media-body mb-4">
                                                <div className="d-flex align-items-center">
                                                    <h5> Hayır, KargoPratik.com üyeliği tamamen ücretsizdir. Üyelik sırasında yükleyeceğiniz işletme evraklarınız 24 saat içerisinde kontrol edilerek üyeliğiniz aktive edilecektir. Üyelik ekranınızdan cari hesabınıza dilediğiniz kadar yükleme yaparak, kargo gönderimine aynı gün başlayabilirsiniz. Gönderi ücretleri, cari hesabınızdan düşülecektir.</h5>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>



                            </Accordion>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
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
                <div className="container" >
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ticket-box-content d-flex">
                                <div className="col-lg-8">
                                    <h3>Küçük işletmeler için kurumsal çözümler </h3>
                                    <p> Türkiye'nin her yerindeki müşterilerinize MNG kargo güvencesi ve kalitesiyle ulaşabilirsiniz.</p>
                                    <Link to={'#'} className="btn btn-primary"> <i className="ri-arrow-right-line"></i> <span>Hemen Üye Ol</span> </Link>

                                </div>


                            </div>
                            <img src={require('../../../images/esnaf.png').default} alt="" className="esnaf" />
                            <img src={require('../../../images/sally-1.png').default} alt="" className="sally-1" />
                            <img src={require('../../../images/sally-2.png').default} alt="" className="sally-2" />
                            <img src={require('../../../images/sally-3.png').default} alt="" className="sally-3" />



                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-blue-k">
                <div className="container" >
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="d-lg-flex text-center text-lg-left justify-content-between">
                                <div className="col-lg-8 d-lg-flex align-items-end">
                                <img src={require('../../../images/envelope_1.png').default} alt="" className="mr-3" />
                                    <h4 className="mb-0 my-4 my-lg-0">Türkiye'nin her yerine, 10,90 TL'den başlayan gönderi ücretleriyle;  </h4>
                                    
                                    

                                </div>
                                <Link to={'#'} className="btn btn-primary"> <span>Tüm Fiyatları Keşfet</span> </Link>


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

export default App;