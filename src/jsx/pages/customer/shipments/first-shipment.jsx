import React, { } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../partial/customer/shipments/page-title';
import Footer2 from '../../../layout/footer2';




function FirstShipment() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-xl-12 col-md-8">
                            
                            <div className="row">
                                    
                                <div className="col-xl-9">
                                    <div className="card input-card">
                                        <div className="card-header d-inline">
                                            <h4 className="card-title card-head ">Fatura Bilgileri</h4>
                                            <p>
                                            Fatura bilgileri ilk gönderiye özel olarak istenmektedir. Fatura bilgilerinizi profil sayfasından güncelleyebilirsiniz.
                                            Faturalar ayda bir kesilerek mail olarak iletilmektedir.    
                                            </p>
                                        </div>
                                        <div className="card-body ">
                                            <form action="#">
                                                <div className="form-row">
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">İşetme  Adı</label>
                                                        <input type="text" className="form-control" placeholder="İşletme Adı" />
                                                    </div>
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">Vergi Dairesi</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Vergi Dairesi"
                                                               autoComplete="off" />
                                                    </div>
                                                </div>
                                                 
                                                <div className="form-row">
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">Vergi No</label>
                                                        <input type="email" className="form-control"
                                                               placeholder="Vergi No" />
                                                    </div>
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">Fatura Adresi</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Fatura Adresi" name="presentaddress" />
                                                    </div>

                                                </div>   
                                                    

                                                    <div className="col-12">
                                                        <a href="/new-shipment" className="btn btn-primary float-right waves-effect">
                                                            Devam
                                                            <i className="ri-arrow-right-line align-bottom ml-2"></i> 
                                                            </a>
                                                    </div>
                                                
                                            </form>
                                        </div>
                                    </div>
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

export default FirstShipment;