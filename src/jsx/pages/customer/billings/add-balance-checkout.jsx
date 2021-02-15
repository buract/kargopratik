import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import Footer2 from '../../../layout/footer2';



function AddBalanceCheckout() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div className=" section-padding">
                <div className="container ">
                    <div className="row justify-content-center  align-items-center">
                        <div className="col-xl-6 col-md-6">
                            <div className="auth-form card ">
                                <div className="card-body ">
                                    <div className="card-head mb-5 payment-content ">
                                        <span className="icon"> <i className="ri-coin-fill text-primary"></i></span>
                                        <h4 className="align-self-center">Bakiye Yükle</h4>

                                    </div>
                                    <div className="d-flex justify-content-between payment-price mt-4">
                                        <h4>
                                            Yüklenecek Tutar
                                            </h4>



                                    </div>
                                    <div className="d-flex justify-content-between payment-price mt-3">
                                        <p>
                                            Paket 2
                                            </p>
                                        <h3 className="text-right mb-4">
                                            200 TL
                                            </h3>


                                    </div>

                                    <div className="d-flex payment-body border-bottom-0 mt-2 justify-content-between">
                                        <h4>
                                            Kayıtlı Kartlarım
                                        </h4>
                                        <a className="caption text-right text-primary" href="./add-new-creditcard">
                                            Yeni Kart Ekle <i className="ri-arrow-right-line align-middle ml-2"></i>
                                        </a>


                                    </div>
                                    <div className="d-flex justify-content-between payment-price mt-3">
                                        <div className="media-body">
                                            <h5>Enpara Card</h5>
                                            <span>4056 **** **** 2034</span>

                                        </div>

                                        <div className="form-check ">
                                            <input className="form-check-input" type="radio" value="" id="card1" />

                                        </div>


                                    </div>
                                    <div className="d-flex justify-content-between payment-price mt-3">
                                        <div className="media-body">
                                            <h5>Enpara Card</h5>
                                            <span>4056 **** **** 2034</span>

                                        </div>

                                        <div className="form-check ">
                                            <input className="form-check-input" type="radio" value="" id="card2" />

                                        </div>


                                    </div>
                                    <div className="d-flex justify-content-between payment-price mt-4">
                                        <div className="media-body">
                                            <h5>Başka Bir Kart Kullan</h5>
                                           

                                        </div>

                                        <div className="form-check ">
                                            <input className="form-check-input" type="radio" value="" id="new-card" />

                                        </div>


                                    </div>
                                    
                                    <div className=" justify-content-between payment-price mt-4">
                                        
                                            <form>
                                                <div class="form-group">
                                                    <label for="CardNumber" className="mb-1 grays-gray-200 body-2 ">Kart Numarası</label>
                                                    <input type="text" class="form-control" id="CardNumber" placeholder="Tutar giriniz"/>
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
                                    

                                    <div className="form-check mt-4 ">
                                        <input className="form-check-input" type="checkbox" value="" id="agreement" />
                                        <label className="form-check-label caption " htmlFor="agreement">
                                        <a href="" >Ön Bilgilendirme Koşulları</a>'nı ve <a href="" >Mesafeli Satış Sözleşmesi </a> 'ni okudum, onaylıyorum.
                                        </label>
                                    </div>
                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="iyzico" checked />
                                        <label className="form-check-label caption align-text-bottom " htmlFor="iyzico">
                                            <a href="" ><b>iyzico</b> </a>  ile Korumalı Alışveriş
                                        </label>
                                    </div>


                                    <div className="text-center mt-5 justify-content-between">
                                        <Link to={'./add-balance'} type="submit" className="btn col-6 pl-5 pr-5">Geri</Link>
                                        <Link to={'./add-balance-payment-success'} type="submit" className="btn col-6 btn-primary pl-5 pr-5">Onayla</Link>

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

export default AddBalanceCheckout;