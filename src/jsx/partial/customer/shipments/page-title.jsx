import React, { } from 'react';



function PageTitle() {

    return (
        <>
            <div className="page-title dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="page-title-content ">
                                <p><span className="text-primary">Anasayfa</span></p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="d-flex justify-content align-items-center float-right mb-4">
                                <a href="/new-shipment" className="btn text-primary  rounded-10"><i className="ri-xl align-text-bottom mr-2 ri-add-circle-fill"></i> Yeni Gönderi Oluştur</a>
                                <a className="btn btn-primary" href="/new-multiple-shipment"><i className="mr-2 align-middle add-multiple"></i>
                                    
                                    Yeni Toplu Gönderi Oluştur</a>
                            </div>
                               
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PageTitle;