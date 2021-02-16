import React, { } from 'react';
import {Link} from "react-router-dom";

function RecentShipment() {

    return (
        <>
                <div className="col-8 m-auto">
                    <div className="">
                        <div className="">
                            <div className="card-header border-0 px-0">
                                <h4 className="card-title">Son 10 Gönderi</h4>
                                <Link to={'#'}>Tümünü Gör </Link>
                            </div>
                            <div className="card-body pt-0 px-0">
                                <div className="transaction-table-cust recent-shipment">
                                    <div className="table-responsive">
                                        <table className="table mb-0 table-responsive-xs">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <a>123124124</a>
                                                </td>
                                                <td>
                                                12/01/2021
                                                </td>
                                                <td>
                                                18/01/2021
                                                </td>
                                                <td>
                                                Transitte
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
                                                12/01/2021
                                                </td>
                                                <td>
                                                18/01/2021
                                                </td>
                                                <td>
                                                Transitte
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
                                                12/01/2021
                                                </td>
                                                <td>
                                                18/01/2021
                                                </td>
                                                <td>
                                                Transitte
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