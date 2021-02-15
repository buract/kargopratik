import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import Footer2 from '../../../layout/footer2';



function AddBalancePaymentFail() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card ">
                                <div className="card-body">
                                    <form action="#" className="identity-upload">
                                        <div className="identity-content">
                                            <span className="icon"><i className=" ri-spam-fill"></i></span>
                                            <h4>Ödeme Başarısız</h4>
                                            <p>Ödemeniz onaylanmadı. Kart limitinizin yeterli olduğundan emin olunuz.</p>
                                        </div>

                                        <div className="text-center">
                                            <Link to={'./add-credit'} type="submit" className="btn col-12 btn-primary pl-5 pr-5">Devam</Link>
                                        </div>
                                    </form>
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

export default AddBalancePaymentFail;