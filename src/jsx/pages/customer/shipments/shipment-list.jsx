import React, { useState, useEffect } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../partial/customer/shipments/page-title';
import Footer2 from '../../../layout/footer2';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import axios from "axios";


const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getShipment();
    }, []);

    function getShipment(){
        axios.get('https://run.mocky.io/v3/c1d35c79-31f3-4020-9184-a0a70fd7f85a').then(res => {
            console.log(res);
            setData(res.data.data);
        });
    }

    let columnDefs = [
        {
            field: "id",
            filter: true,
        },
        {
            field: "receiver ",
            filter: true,
        },
        {
            field: "departure",
            filter: true,
        },
        {
            field: "arrival",
            filter: true,
        },
        {
            field: "shipmentDate",
            filter: true,
        },
        {
            field: "deliveryDate",
            filter: true,
        },
        {
            field: "status",
            filter: true,
        },
        {
            field: "pricing",
            filter: true,
        },
    ];

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
                            <a className="btn btn-success float-right"> <i className="align-text-bottom ri-xl mr-2 ri-file-excel-2-fill"></i>Excel İndir</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 card px-3 py-3">
                            <div className="ag-theme-material" style={{ height: 800, width: '100%' }}>
                                <AgGridReact
                                    rowData={data}>
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