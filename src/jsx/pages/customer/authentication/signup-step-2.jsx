import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../../../layout/header1';
import Footer1 from '../../../layout/footer1';



function SignupStep2() {

    return (
        <>
            <Header1 />
            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form action="#" className="identity-upload">
                                        <div className="mb-4">
                                            <h4 className="card-title mb-4">Şirket Evrakları</h4>
                                            <p>Evraklarınız en geç 24 saat içerisinde değerlendirilecek olup, hesap aktivasyon epostanız <b>eposta@gmail.com</b> adresinize paylaşılacaktır.</p>
                                        </div>
                                        <div className="form-group">
                                            <label className="mr-sm-2">Vergi Beyannamesi </label>
                                            <span className="float-right">Maksimum dosya boyutu 5mb</span>
                                            <div className="file-upload-wrapper" data-text="vergi-beyannamesi.jpg">
                                                <input name="file-upload-field" type="file" className="file-upload-field"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="mr-sm-2">Kimlik </label>
                                            <span className="float-right">Maksimum dosya boyutu 5mb</span>
                                            <div className="file-upload-wrapper" data-text="kimlik.jpg">
                                                <input name="file-upload-field" type="file" className="file-upload-field"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="mr-sm-2">İmza Sirküleri </label>
                                            <span className="float-right">Maksimum dosya boyutu 5mb</span>
                                            <div className="file-upload-wrapper" data-text="imza-sirkuleri.jpg">
                                                <input name="file-upload-field" type="file" className="file-upload-field"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="mr-sm-2">Sözleşme </label>
                                            <span className="float-right">Maksimum dosya boyutu 5mb</span>
                                            <div className="file-upload-wrapper" data-text="sozlesme.jpg">
                                                <input name="file-upload-field" type="file" className="file-upload-field"
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <Link to={'./verify-step-3'} type="submit" className="btn btn-success pl-5 pr-5">Onaya Gönder</Link>
                                        </div>
                                    </form>
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

export default SignupStep2;