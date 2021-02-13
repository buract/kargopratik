import React, { } from 'react';



function CreditWarning() {

    return (
        <>
            <div className="page-title dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                        <div className="px-3 d-flex justify-content-between  align-items-center  alert-card">
                            <div className="d-flex text-primary">
                                
                                <i className=" mr-3 text-danger  ri-file-warning-line"></i>
                                <p className=" text-danger">
                                    Uyarı - Minimum bakiyeniz 300 TL’nin altına düşmüştür. Yeni bir gönderi yapmak için bakiye yüklemeniz gerekmektedir.</p>
                            </div>

                            <div>
                                <a className="">Bakiye Yükle</a>

                            </div>
                        </div>

                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreditWarning;