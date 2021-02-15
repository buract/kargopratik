import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import Footer2 from '../../../layout/footer2';



function NewCreditcard() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-6 col-md-6">
                            <div className="auth-form card ">
                                <div className="card-body ">
                                    <div className="card-head mb-5 payment-content ">
                                        <span className="icon"> <i className="ri-bank-card-fill text-primary"></i></span>
                                        <h4 className="align-self-center">Yeni Kart Ekle</h4>

                                    </div>
                                    

                                    
                                    
                                    <div className=" justify-content-between payment-price mt-4">
                                        
                                            <form>
                                                <div class="form-group">
                                                    <label for="CardNumber" className="mb-1 grays-gray-200 body-2 ">Kart Numarası</label>
                                                    <input type="text" class="form-control" id="CardNumber" placeholder="**** **** **** ****"/>
                                                </div> 
                                                <div class="form-group">
                                                    <label for="CardOwner" className="mb-1 grays-gray-200 body-2 ">Kart Sahibi  </label>
                                                    <input type="text" class="form-control" id="CardOwner" placeholder="Ahmet Yazar"/>
                                                </div>
                                                <div className="form-row">
                                                <div class="form-group col-9">
                                                    <label for="ExpireDate" className="mb-1 grays-gray-200 body-2 ">Son Kullanma Tarihi </label>
                                                    <input type="text" class="form-control" id="ExpireDate" placeholder="12 / 23"/>
                                                </div> 
                                                <div class="form-group col-3">
                                                    <label for="Cvc" className="mb-1 grays-gray-200 body-2 ">CVC  </label>
                                                    <input type="text" class="form-control" id="Cvc" placeholder="***"/>
                                                </div> 

                                                </div>  
                                                                                              
                                             </form>
                                    </div>
                                    

                                    
                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="iyzico" checked />
                                        <label className="form-check-label caption align-text-bottom " htmlFor="iyzico">
                                            <a href="" ><b>iyzico</b> </a>  ile Korumalı Alışveriş
                                        </label>
                                    </div>


                                    <div className="text-center mt-5 justify-content-between">
                                        <Link to={'./add-balance-checkout'} type="submit" className="btn col-6 pl-5 pr-5">Geri</Link>
                                        <Link to={'./add-balance-checkout'} type="submit" className="btn col-6 btn-primary pl-5 pr-5">Ekle</Link>

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

export default NewCreditcard;