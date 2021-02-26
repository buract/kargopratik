import React, { } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from '../../layout/header1';
import Footer1 from '../../layout/footer1';

import Bottom from '../../element/bottom';



function HowItWorks() {

    return (
        <>
        <div className="white-bg">

        
            <Header1 />
            <div className="row ">
                        <div className="col-12 mt-5 d-flex intro-inner justify-content-center">
                            <div className="text-center">
                                <h1 className="">
                                    Kargomu Nasıl Gönderirim?
                                </h1>
                                <h4>
                                    Sadece dakikalar içinde üye olabilir ve gönderinizi hazırlamaya başlayabilirsiniz
                                </h4>
                            </div>
                        </div>
                    </div>
            <div className="about-one section-padding">
                <div className="container">
                    
                    <div className="row align-items-center mt-5">

                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={require('../../../images/sign-up.png').default} alt="" className="img-fluid" />
                                <div className="dot-grad-5"></div>
                                <div className="dot-grad-2"></div>
                                <div className="dot-grad-3"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-content m-t-50">
                                <h2>Üyelik Oluştur</h2>
                                <p>KargoPratik kullanıcı paneline giriş yapabilmeniz için öncelikle işletme evraklarınız ile başvurunuzu tamamlamanız gerekmektedir. KargoPratik üyeliği tamamen ücretsiz olup, dilediğiniz zaman üyeliğinize son verebilirsiniz. Üyelik başvurunuz 24 saat içerisinde değerlendirilecek olup, değerlendirme sonucunuzun olumlu olması durumunda panel kullanımına ve kargo gönderimine anında başlayabilirsiniz.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-one section-padding">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="service-content m-t-50">
                                <h2>Bakiye Yükle</h2>
                                <p>KargoPratik üyeliği için herhangi bir ücret ödemenize gerek yoktur. Kargo gönderimine başlamak için tek yapmanız gereken, iyzico’nun güvenli ödeme altyapısıyla cari hesabınıza ihtiyacınız kadar para yüklemek ve ardından gönderilerinizi hazırlamaya başlamaktır. Yüklediğiniz miktar anında cari hesabınıza yansıyacak olup, hazırladığınız her gönderinin bedeli bu hesaptan düşülecektir. Gönderiyi yapabilmeniz için gereken minimum bakiye miktarına yaklaşmanız durumunda sistem sizi otomatik olarak uyaracaktır.</p>

                            </div>
                        </div>
                        <div className="col-lg-6 order-1 text-center mb-5 mb-lg-0 order-lg-2">
                            <div className="service-img">
                                <img src={require('../../../images/add-balance.png').default} alt="" className="img-fluid" />
                                <div className="dot-grad-5"></div>
                                <div className="dot-grad-2"></div>
                                <div className="dot-grad-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-one section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center mb-5 mb-lg-0">
                            <div className="service-img-3">
                                <img src={require('../../../images/create-shipment.png').default} alt="" className="img-fluid" />

                                <div className="dot-grad-2"></div>
                                <div className="dot-grad-3"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-content m-t-50">
                                <h2>Gönderi Oluştur</h2>
                                <p>Cari hesabınıza yükleme yaptıktan sonra artık gönderi girişi yapmaya hazırsınız. Kullanıcı panelinizden "Gönderi Oluştur" sayfasına giderek isterseniz tek bir gönderi hazırlayabilir, isterseniz de "Yeni Toplu Gönderi Oluştur" düğmesine basarak birden fazla gönderi girişi yapabilirsiniz. Alıcı ve gönderi bilgilerini girdikten sonra kargonuzu onaylayarak anında kargo numaralarınız oluşturabilirsiniz. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-one section-padding">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="service-content m-t-50">
                                <h2>Kargo numaran ile gönderini şubeye teslim et</h2>
                                <p>Hazırladığınız gönderi paketlerinin üzerine sadece kargo gönderi numaralarını yazmanız yeterlidir. Başka bir işlem yapmadan paketlerinizi dilediğiniz bir MNG kargo şubesine teslim edebilirsiniz. Gönderileriniz MNG kargo tarafından işleme alınır alınmaz takibini KargoPratik kullanıcı panelinden yapabilirsiniz. Dilerseniz size hizmet veren MNG kargo şubesiyle görüşerek, evden teslim alma seçeneklerini de görüşebilirsiniz. Kargonuz ile ilgili yaşanan her türlü durum hakkında şubeniz ile iletişime geçebilirsiniz. </p>

                            </div>
                        </div>
                        <div className="col-lg-6 text-center mb-5 mb-lg-0 order-1 order-lg-2">
                            <div className="service-img-4">
                                <img src={require('../../../images/send-it.png').default} alt="" className="img-fluid" />

                                <div className="dot-grad-2"></div>
                                <div className="dot-grad-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-blue-k">
                <div className="container" >
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="d-lg-flex text-center justify-content-between">
                                <div className="d-lg-flex align-items-end">
                                    <img src={require('../../../images/envelope_1.png').default} alt="" className="mr-3 mb-4 mb-lg-0" />
                                    <h4>Türkiye'nin her yerine, 10,90 TL'den başlayan gönderi ücretleriyle;  </h4>



                                </div>
                                <Link to={'#'} className="btn btn-primary mt-4 mt-lg-0"> <span>Tüm Fiyatları Keşfet</span> </Link>


                            </div>




                        </div>
                    </div>
                </div>
            </div>



            <Bottom />

            <Footer1 />
            </div> 
        </>
    )
}

export default HowItWorks;