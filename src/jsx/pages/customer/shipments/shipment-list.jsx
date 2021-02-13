import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../element/page-title';
import Footer2 from '../../../layout/footer2';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const App = () => {

    const [rowData, setRowData] = useState([
        { id: "2342352034", receiver: "Ahmet Yazıcı", departure: "Çankırı", arrival: "Çankırı", shipmentDate: "042221", deliveryDate: "042221", status: "Teslim Edildi", pricing: "330" },
    ]);

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <h4 className="card-title">Gönderilerim</h4>
                            <p>Daha önce yaptığınız tüm gönderilerinizin detayını buradan inceleyebilirsiniz.</p>
                        </div>
                        <div className="col-xl-6">
                            <button className="btn btn-success float-right">Excel</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ag-theme-material" style={{ height: 400, width: 1440 }}>
                                <AgGridReact
                                    rowData={rowData}>
                                    <AgGridColumn field="id" sortable={ true } filter={ true }></AgGridColumn>
                                    <AgGridColumn field="receiver" sortable={ true } filter={ true }></AgGridColumn>
                                    <AgGridColumn field="departure" sortable={ true } filter={ true }></AgGridColumn>
                                    <AgGridColumn field="arrival" sortable={ true } filter={ true }></AgGridColumn>
                                    <AgGridColumn field="shipmentDate" sortable={ true } filter={ true }></AgGridColumn>
                                    <AgGridColumn field="deliveryDate" sortable={ true } filter={ true }></AgGridColumn>
                                    <AgGridColumn field="status" sortable={ true } filter={ true }></AgGridColumn>
                                    <AgGridColumn field="pricing" sortable={ true } filter={ true }></AgGridColumn>
                                </AgGridReact>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    );
};

export default App;