import React, { } from 'react';
 import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../customer/billings/page-title';
import Footer2 from '../../../layout/footer2';
import BtcChart from '../../../charts/btc';
import EthChart from '../../../charts/eth';
import LtcChart from '../../../charts/ltc';
import XrpChart from '../../../charts/xrp';
import AreaChart from '../../../charts/area';
import AccountMovements from '../../customer/billings/account-movements';



function AccountActivities() {

    return (
        <>
            
            

            <div className="">
                <div className="">
                    <div className="">
                        

                        <div className="col-xl-8 m-auto col-lg-8 col-xxl-8">
                            <div className="card profile_chart">
                                <div className="card-header ">
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
                    <AccountMovements />
                   
                </div>
            </div>

            
        </>
    )
}

export default AccountActivities;