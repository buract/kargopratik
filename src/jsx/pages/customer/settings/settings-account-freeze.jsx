import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import Footer2 from '../../../layout/footer2';



function AccountFreeze() {

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
                                        <span className="icon"> <i className="ri-admin-fill text-primary"></i></span>
                                        <h4 className="align-self-center">Hesap Dondurma Onay</h4>

                                    </div>
                                    

                                    
                                    
                                    <div className=" justify-content-between payment-price mt-4">
                                        
                                            <form>
                                                <div class="form-group">
                                                    <label for="password" className="mb-1 grays-gray-200 body-2 ">Şifre</label>
                                                    <input type="text" class="form-control" id="password" placeholder="*******"/>
                                                </div> 
                                                <div class="form-group">
                                                    <label for="passwordcheck" className="mb-1 grays-gray-200 body-2 ">Şifre Onay  </label>
                                                    <input type="text" class="form-control" id="passwordcheck" placeholder="*******"/>
                                                </div>
                                                <div className="form-row">
                                                

                                                </div>  
                                                                                              
                                             </form>
                                    </div>
                                    

                                    
                                    


                                    <div className="text-center mt-5 justify-content-between">
                                        <Link to={'./settings-security'} type="submit" className="btn col-6 pl-5 pr-5">İptal</Link>
                                        <Link to={'./add-balance-checkout'} type="submit" className="btn col-6 btn-primary pl-5 pr-5">Dondur</Link>

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

export default AccountFreeze;