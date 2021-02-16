import React, { } from 'react';



function PageTitle() {

    return (
        <>
            <div className="page-title dashboard">
                <div className="container-fluid">
                    <div className="row m-auto ">
                        <div className="col-xl-6 p-0">
                            <div className="page-title-content ">
                                <h1 className="text-primary">Hesap Hareketleri</h1>
                            </div>
                        </div>
                        <div className="col-xl-6 p-0">
                            
                            
                                <a className="btn mb-3 float-right btn-primary">Bakiye Yükle</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle;