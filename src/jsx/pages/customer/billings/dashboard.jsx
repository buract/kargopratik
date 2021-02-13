import React, { } from 'react';
 import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../partial/customer/billings/page-title';
import Footer2 from '../../../layout/footer2';
import BtcChart from '../../../charts/btc';
import EthChart from '../../../charts/eth';
import LtcChart from '../../../charts/ltc';
import XrpChart from '../../../charts/xrp';
import AreaChart from '../../../charts/area';



function Dashboard() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        

                        <div className="col-xl-6 m-auto col-lg-8 col-xxl-8">
                            <div className="card profile_chart">
                                <div className="card-header py-0">
                                    <div className="chart_current_data">
                                        <h3>Hesap Hareketleri</h3>
                                        
                                    </div>
                                    <div className="d-flex">
                                    <a className="text-success mr-2">Bir Yıl </a>
                                    <a className="text-black mr-2">Bir Ay </a>
                                    <a className="text-black mr-2">Bir Hafta </a>
                                    

                                    </div>
                                    
                                    {/* <div className="duration-option">
                                        <Linkid="all" className="active">ALL</Link>
                                        <Linkid="one_month" className="">1M</Link>
                                        <Linkid="six_months">6M</Link>
                                        <Linkid="one_year" className="">1Y</Link>
                                        <Linkid="ytd" className="">YTD</Link>
                                    </div> */}
                                </div>
                                <div className="card-body">
                                    <AreaChart />
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        
                        <div className="col-xl-6 m-auto col-lg-8 col-xxl-8">
                            <div className="card">
                                <div className="card-header border-0 py-0">
                                    <h4 className="card-title">Recent Activities</h4>
                                    <Link to={'#'}>View More </Link>
                                </div>
                                <div className="card-body">
                                    <div className="transaction-table">
                                        <div className="table-responsive">
                                            <table className="table mb-0 table-responsive-sm">
                                                <tbody>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>

                                                        <td>
                                                            <span className="badge badge-danger">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc BTC"></i> Bitcoin
                                                    </td>
                                                        <td>
                                                            Using - Bank *******5264
                                                    </td>
                                                        <td className="text-danger">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success">Buy</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc LTC"></i> Litecoin
                                                    </td>
                                                        <td>
                                                            Using - Card *******8475
                                                    </td>
                                                        <td className="text-success">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-danger">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc XRP"></i> Ripple
                                                    </td>
                                                        <td>
                                                            Using - Card *******8475
                                                    </td>
                                                        <td className="text-danger">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success">Buy</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc DASH"></i> Dash
                                                    </td>
                                                        <td>
                                                            Using - Card *******2321
                                                    </td>
                                                        <td className="text-success">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-danger">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc BTC"></i> Bitcoin
                                                    </td>
                                                        <td>
                                                            Using - Card *******2321
                                                    </td>
                                                        <td className="text-danger">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Dashboard;