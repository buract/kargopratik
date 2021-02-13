import React, { } from 'react';
import {Link} from "react-router-dom";

function RecentShipment() {

    return (
        <>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="">
                            <div className="card-header border-0 px-0">
                                <h4 className="card-title">Son 10 Gönderin</h4>
                                <Link to={'#'}>Tümünü Gör </Link>
                            </div>
                            <div className="card-body pt-0 px-0">
                                <div className="transaction-table recent-shipment">
                                    <div className="table-responsive">
                                        <table className="table mb-0 table-responsive-sm">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <a>123124124</a>
                                                </td>
                                                <td>
                                                    Yazar Ticaret
                                                </td>
                                                <td>
                                                    Lorem ipsum cad. no 12/2 Tuzla/İstanbul
                                                </td>
                                                <td>
                                                    120cm X 10cm X 40cm - 12kg
                                                </td>
                                                <td>
                                                    120 TL
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a>123124124</a>
                                                </td>
                                                <td>
                                                    Yazar Ticaret
                                                </td>
                                                <td>
                                                    Lorem ipsum cad. no 12/2 Tuzla/İstanbul
                                                </td>
                                                <td>
                                                    120cm X 10cm X 40cm - 12kg
                                                </td>
                                                <td>
                                                    120 TL
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a>123124124</a>
                                                </td>
                                                <td>
                                                    Yazar Ticaret
                                                </td>
                                                <td>
                                                    Lorem ipsum cad. no 12/2 Tuzla/İstanbul
                                                </td>
                                                <td>
                                                    120cm X 10cm X 40cm - 12kg
                                                </td>
                                                <td>
                                                    120 TL
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default RecentShipment;