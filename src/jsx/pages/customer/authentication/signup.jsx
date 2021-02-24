import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../../../layout/header1';
import Footer1 from '../../../layout/footer1';



function Signup() {

    return (
        <>
        <Header1 />
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            
                            <div className="auth-form card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Hesap Oluştur</h4>
                                </div>
                                <div className="card-body">
                                    <form method="post" name="myform" className="signup_validate">
                                        <div className="form-group">
                                            <label>İsim Soyisim</label>
                                            <input type="text" className="form-control" placeholder="İsim Soyisim" name="username" />
                                        </div>
                                        <div className="form-group">
                                            <label>E-Posta</label>
                                            <input type="email" className="form-control" placeholder="hello@example.com"
                                                name="email" />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Şifre</label>
                                            <input type="password" className="form-control" placeholder="Lütfen geçerli bir şifre giriniz"
                                                name="phone" />
                                        </div>
                                        <div className="form-group">
                                            <label>Şifre Onay</label>
                                            <input type="password" className="form-control" placeholder="Şifrenizi tekrar giriniz"
                                                name="phone" />
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-primary btn-block">Hesap Oluştur</button>
                                        </div>
                                    </form>
                                    <div className="new-account caption mt-3">
                                        <p>Bir Hesabın var mı? <Link className="text-primary" to={'sign-in'}>Giriş Yap</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    )
}

export default Signup;