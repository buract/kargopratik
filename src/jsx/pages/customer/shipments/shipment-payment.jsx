import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import Footer2 from '../../../layout/footer2';



function Payment() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card">
                                <div className="card-body ">
                                    <div className="card-head mb-5 payment-content ">
                                        <span className="icon"> <i className="ri-coin-fill"></i></span>
                                        <h4 className="align-self-center">Gönderi Onay</h4>

                                    </div>
                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="agreement" />
                                        <label className="form-check-label caption " htmlFor="agreement">
                                             Ön Bilgilendirme Koşulları'nı ve Mesafeli Satış Sözleşmesi'ni okudum, onaylıyorum.
                                        </label>
                                     </div>
                                    
                                    <div className="d-flex payment-body justify-content-between">
                                        <p>
                                            Kargo Bilgisi:
                                        </p>
                                        <p className="text-right"> 
                                            120x10x40(cm) - 20kg
                                        </p>
                                        
                                        
                                    </div>
                                    <div className="d-flex justify-content-between payment-price mt-4">
                                            <p>
                                                Toplam
                                            </p>
                                            <p className="text-right mb-2"> 
                                                120TL
                                            </p>
                                        

                                    </div>

                                        <p className="caption">* Toplam bedel bakiyenizden düşecektir. Kargolarınız teslim edildiğinde nihai bedel hesaplanıp fark bakiyenize yansıtılacaktır. </p>

                                    
                                    <div className="text-center mt-5 justify-content-between">
                                    <Link to={'./verify-step-2'} type="submit" className="btn col-6 pl-5 pr-5">İptal</Link>
                                            <Link to={'./verify-step-2'} type="submit" className="btn col-6 btn-primary pl-5 pr-5">Onayla</Link>
                                           
                                     </div>
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

export default Payment;