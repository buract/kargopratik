import React, { } from 'react';
import { Link } from 'react-router-dom';



function Bottom() {

    return (
        <>
            <div className="bottom section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                            <div className="bottom-logo">
                                <img className="pb-3" src={require('./../../images/logo-white.svg').default} alt="" />

                                <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam turpis amet, a vulputate sapien ut dignissim. Sit.</p>
                                <Link  className="btn my-4" to={'/faq.html'}>İletişime Geç</Link>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 mt-5 mt-lg-0">
                            <div className="bottom-widget">
                                
                                <ul>
                                    <li><Link to={'/how-it-works'}>How It Works</Link></li>
                                    <li><Link to={'#'}>Calculator</Link></li>
                                    <li><Link to={'/faq'}>FAQ</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="bottom-widget-2">
                                <h4 className="widget-title">Get Contact With Us</h4>
                                <div className="row">
                                    
                                    <div className="col-12 ">
                                        <ul>
                                            <li><Link className="text-600" to={'#'}>Lorem ipsum caddesi. Ipsum Dolar sokak No:56/4T Ataşehir/İstanbul</Link></li>
                                            <li><Link to={'#'}>Tel:12342341123</Link></li>
                                            
                                            <li><Link to={'#'}>seckin.sozen@digitalact.com.tr</Link></li>
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