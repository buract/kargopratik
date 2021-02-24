import React, { } from 'react';
import Header1 from '../../layout/header1';
import Footer1 from '../../layout/footer1';
import Bottom from '../../element/bottom';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function Faq() {

    return (
        <><Header1 />
            <div className="terms_condition">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5 d-flex intro-inner justify-content-center">
                            <div className="text-center">
                                <h1 className="">
                                    Sıkça Sorulan Sorular
                                </h1>
                                <h4>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </h4>
                            </div>
                        </div>
                     </div>
                    <div className="row justify-content-center section-padding">
                        <div className="col-lg-6 terms_condition-content">
                            <div className="sticky-top">
                            <img src={require('../../../images/question.png').default} alt="" className="img-fluid" />
                        <div className="dot-grad-2"></div>
                        <div className="dot-grad-3"></div>

                            </div>
                        
                        </div>
                        <div className="col-lg-6">
                            <div className="terms_condition-content">
                                <div className="terms_condition-text">
                                    <h3>Paketlerimi KargoPratik.com üzerinden hangi kargo firmaları ile gönderebilirim?  </h3>
                                    <p>Şu an MNG Kargo ile işbirliğimiz bulunmakla birlikte, ilerleyen dönemde farklı kargo şirketleri de sistemimize dahil olacaktır.
                                </p>
                                </div>


                                <div className="terms_condition-text">
                                    <h3>Üye olmak ve avantajlı gönderi fiyatlarından yararlanmak için aylık kaç adet gönderi yapmamız gerekmektedir? </h3>
                                    <p>
                                    KargoPratik.com'da herhangi bir taahhüt, kota veya minimum gönderi uygulaması bulunmamaktadır. Ayda bir adet gönderi yapan üyelerimiz de diğer üyelerimiz gibi avantajlı fiyatlarımızdan faydalanabilmektedir.
                                    </p>
                                </div>


                                <div className="terms_condition-text">
                                    <h3>KargoPratik.com üyeliği ücretli midir?</h3>
                                    <p>Hayır, KargoPratik.com üyeliği tamamen ücretsizdir. Üyelik sırasında yükleyeceğiniz işletme evraklarınız 24 saat içerisinde kontrol edilerek üyeliğiniz aktive edilecektir. Üyelik ekranınızdan cari hesabınıza dilediğiniz kadar yükleme yaparak, kargo gönderimine aynı gün başlayabilirsiniz. Gönderi ücretleri, cari hesabınızdan düşülecektir.</p>
                                   
                                </div>

                                <div className="terms_condition-text">
                                    <h3>KargoPratik.com ile nasıl kargo gönderebilirim? </h3>
                                    <p>İster bilgisayarınızdan isterseniz de akıllı telefonunuzdan alıcı bilgilerini girerek gönderiniz için birkaç saniye içerisinde kargo numarası yaratabilirsiniz. Kargonuzu, üzerine sadece bu numarayı yazarak dilediğiniz MNG kargo şubesine teslim edebilirsiniz.
    
    
                                </p>
                                    
                                        

                                </div>

                                <div className="terms_condition-text">
                                    <h3>Gönderi ücretleriniz ne kadar? </h3>
                                    <p>Gönderi adedi ve gönderim bölgesinden bağımsız olarak, fiyatlarımız 10.90 TL’den başlamaktadır. Paket boyutuna göre değişen tüm gönderi fiyatlarımıza ana sayfamızdan ulaşabilirsiniz. </p>

                                    
                                </div>

                                <div className="terms_condition-text">
                                    <h3>Gönderi mesafesine göre fiyatlarınız değişiyor mu? </h3>
                                    <p>Hayır, gönderilerimiz Türkiye’nin her noktasına aynı şekilde ücretlendirilmektedir.</p>
                                </div>

                                <div className="terms_condition-text">
                                    <h3>Bireysel kullanıcılar da KargoPratik.com üzerinden gönderi yapabiliyor mu?</h3>
                                    <p>KargoPratik.com üzerinden gönderi yapabilmeniz için işletme olmanız gerekmektedir. Ancak, bireysel müşterilerimize sunduğumuz özel fırsatlar için bize ulaşabilirsiniz;  <a href="mailto:info@kargopratik.com">info@kargopratik.com</a></p>
                                </div>

                                <div className="terms_condition-text">
                                    <h3>Gönderilerimi nasıl takip edebilirim? </h3>
                                    <p>Tüm gönderileriniz tek bir noktadan, size özel üye panelinizden takip edilebilir ve gönderileriniz durumu hakkında ayrıntılı bilgi alabilirsiniz.</p>
                                </div>

                                <div className="terms_condition-text">
                                    <h3> Kargo bedelleri için nasıl ödeme yapabiliyoruz? </h3>
                                    <p>Üyeliğiniz onaylandıktan sonra kredi kartınız kullanarak cari hesabınıza dilediğiniz miktarda yükleme yapabilirsiniz. Gönderinizi onayladıktan sonra, gönderileri bedelleri cari hesabınızdan düşecek olup, kargo şubesinde yapılan ölçümler neticesinde beyan edilen ölçülerden farklı olması durumunda oluşacak ücret farkları da yine cari hesabınıza yansıtılacaktır.</p>
                                </div>

                                <div className="terms_condition-text">
                                    <h3>Gönderi bedelleri için faturalama nasıl yapılmaktadır? </h3>
                                    <p>Aylık toplam kargo bedelleriniz, sisteme girdiğiniz fatura bilgilerine istinaden bir sonraki ayın ilk iş günü tarafınıza faturalandırılarak, yine sisteme girdiğiniz e-postanıza otomatik olarak gönderilecektir. </p>
                                </div>
                                <div className="terms_condition-text">
                                    <h3>Gönderimi hazırlarken üzerine hangi bilgileri yazmam gerekmektedir?</h3>
                                    <p>Gönderinizin üzerine, KargoPratik.com tarafından oluşturulan kargo numaranızdan başka bir şey yazmanıza gerek yoktur. </p>
                                </div>
                                <div className="terms_condition-text">
                                    <h3>Gönderimi hazırladıktan sonra nereye teslim ediyorum? </h3>
                                    <p>Gönderinizi Türkiye’deki herhangi bir MNG kargo şubesine teslim edebilirsiniz? </p>
                                </div>
                                <div className="terms_condition-text">
                                    <h3>KargoPratik.com hesabı açmak için neler gerekiyor? </h3>
                                    <p>Üyelik için gereken tüm işletme evraklarına “Üye Ol” alanından ulaşabilirsiniz. İşletme evraklarınıza ek olarak KargoPratik.com sözleşmesini indirmeniz ve bu sözleşmenin, her sayfasının işletme yetkilisi tarafından imzalanıp kaşelenerek diğer evraklarla birlikte sisteme yüklenmesi gerekmektedir. </p>
                                </div>
                                <div className="terms_condition-text">
                                    <h3>Gönderilerimizle ilgili bir sorun yaşamamız durumunda kiminle irtibata geçebiliriz? </h3>
                                    <p>Gönderileriniz ile ilgili her türlü sorunuzu çalışmakta olduğunuz MNG kargo şubesine veya MNG kargo müşteri temsilcisine iletebilirsiniz. </p>
                                </div>
                                <div className="terms_condition-text">
                                    <h3>Kendi web sitem için entegrasyona ihtiyacım olması durumunda ne yapmam gerekiyor?</h3>
                                    <p>Özel entegrasyon talepleriniz için bizimle iletişime geçebilirsiniz; <a href="mailto:info@kargopratik.com">info@kargopratik.com.</a></p>
                                </div>
                                <div className="terms_condition-text">
                                    <h3>Müşterim ürününü iade etmek isterse ne yapmalıyım? </h3>
                                    <p>Ürün iadeleriniz için alıcı bilgileri olarak kendi bilgilerinizi girdiğiniz bir gönderi oluşturabilir ve oluşturulan kargo numarasını müşterinize göndererek kurumsal bir hizmet sağlayabilirsiniz. </p>
                                </div>
                                <div className="terms_condition-text">
                                    <h3>Sizden nasıl ayrıntılı bilgi alabilirim? </h3>
                                    <p>Tüm sorularınız için bize ulaşabilirsiniz; <a href="mailto:info@kargopratik.com">info@kargopratik.com.</a>  Dilerseniz müşteri temsilcilerimiz sizleri arayabilir ve tüm sorularınıza daha hızlı bir şekilde yanıt alabilirisiniz. </p>
                                </div>

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

        </>
    )
}

export default Faq;