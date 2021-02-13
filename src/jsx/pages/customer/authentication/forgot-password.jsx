import React, { } from 'react';
import { Link } from 'react-router-dom';



function ForgotPassword() {

    return (
        <>
            <div className="authincation">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-5">
                                <Link to={'./'}><img src={require('../../../../images/logo.png')} alt="" /></Link>
                            </div>
                            <div className="auth-form card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Parolanızı Sıfırlayın</h4>
                                </div>
                                <div className="card-body">
                                    <form action="">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" value="Lütfen kayıtlı email bilginizi girin." />
                                        </div>
                                        <div className="text-center">
                                            <Link to={'./signin'} type="submit" className="btn btn-success btn-block">Sıfırla</Link>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p className="mb-1">Mail tarafınıza ulaşmadı mı?</p>
                                        <Link className="text-primary" to={'./reset'}>Tekrar Gönder </Link>
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

export default ForgotPassword;