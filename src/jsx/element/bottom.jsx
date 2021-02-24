import React, { } from 'react';
import { Link } from 'react-router-dom';
import ModalCalc from './modal';



function Bottom() {

    return (
        <>
            <div className="bottom section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                            <div className="bottom-logo">
                                <Link to={'/index'} > <img className="pb-3" src={require('./../../images/logo-white.svg').default} alt="" /></Link>

                                <p className="w-50">KargoPratik, kurumsal kargo hizmetlerini  küçük işletmelerle en uygun ve hızlı şekilde bir araya getirmeyi hedefleyen yeni bir girişimdir.</p>
                                <a  className="btn my-4" href="mailto:info@kargopratik.com">İletişime Geç</a>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 mt-5 mt-lg-0">
                            <div className="bottom-widget">
                                
                                <ul>
                                    <li><Link to={'/how-it-works'}>Nasıl Gönderirim?</Link></li>
                                    <li><ModalCalc classText="link"></ModalCalc> </li>
                                    <li><Link to={'/faq'}>SSS</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="bottom-widget-2">
                                <h4 className="widget-title">Bizimle iletişime Geçin</h4>
                                <div className="row">
                                    
                                    <div className="col-12 ">
                                        <ul>
                                            <li><Link className="text-600" to={'#'}>Yeşilova mh. 2. Aşıkveysel cd. No: 10/8 Küçükçekmece İSTANBUL</Link></li>
                                            <li><a href="#">Tel:12342341123</a></li>
                                            
                                            <li><a href="mailto:info@kargopratik.com">info@kargopratik.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bottom;