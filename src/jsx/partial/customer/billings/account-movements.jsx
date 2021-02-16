import React, { } from 'react';
import {Link} from "react-router-dom";


function AccountMovements() {

    return (
        <>
                <div className="row">
                    <div className="col-xl-8 m-auto">
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
                                                <i className="ri-2x text-success ri-arrow-up-circle-fill"></i>
                                                </td>
                                                <td>
                                                    12.02.2021
                                                </td>
                                                <td>
                                                <a href="">#22314123</a>
                                                </td>
                                                <td>
                                                    1200 TL
                                                </td>
                                                <td className="text-success">
                                                     Bakiye Yüklendi
                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <td>
                                                <i className="ri-2x text-danger ri-arrow-down-circle-fill"></i>
                                                </td>
                                                <td>
                                                    12.02.2021
                                                </td>
                                                <td>
                                                <a href="">#22314123</a>
                                                </td>
                                                <td>
                                                    1200 TL
                                                </td>
                                                <td className="text-danger">
                                                     Gönderi Yapıldı
                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <td>
                                                <i className="ri-2x text-success ri-arrow-up-circle-fill"></i>
                                                </td>
                                                <td>
                                                    12.02.2021
                                                </td>
                                                <td>
                                                <a href="">#22314123</a>
                                                </td>
                                                <td>
                                                    1200 TL
                                                </td>
                                                <td className="text-success">
                                                     Bakiye Yüklendi
                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <td>
                                                <i className="ri-2x text-success ri-arrow-up-circle-fill"></i>
                                                </td>
                                                <td>
                                                    12.02.2021
                                                </td>
                                                <td>
                                                <a href="">#22314123</a>
                                                </td>
                                                <td>
                                                    1200 TL
                                                </td>
                                                <td className="text-success">
                                                     Bakiye Yüklendi
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

export default AccountMovements;