import React, { } from 'react';



function PageTitle() {

    return (
        <>
            <div className="page-title dashboard">
                <div className="container-fluid">
                    <div className="row m-auto col-6">
                        <div className="col-xl-6 p-0">
                            <div className="page-title-content">
                                <p><span>Hesap Hareketleri</span></p>
                            </div>
                        </div>
                        <div className="col-xl-6 p-0">
                            
                            
                                <a className="btn mb-3 float-right btn-success">Bakiye Yükle</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle;