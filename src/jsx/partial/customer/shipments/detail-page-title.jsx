import React, { } from 'react';



function PageTitle() {

    return (
        <>
            <div className="page-title dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="page-title-content ">
                                <p><span className="text-primary">Gönderi Detay</span></p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="d-flex justify-content align-items-center float-right mb-4">
                                <a href="/new-shipment" className="btn btn-warning text-white  rounded-10"> Transitte</a>
                               
                            </div>
                               
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PageTitle;