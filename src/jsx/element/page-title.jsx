import React, { } from 'react';



function PageTitle() {

    return (
        <>
            <div className="page-title dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="page-title-content">
                                <p><span>Genel Görünüm</span></p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="btn-group mb-3 float-right">
                                <a className="btn btn-primary"><i className="ri-xl mr-2 ri-add-circle-fill"></i> Yeni Gönderi Oluştur</a>
                                <a className="btn btn-success">Yeni Toplu Gönderi Oluştur</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle;