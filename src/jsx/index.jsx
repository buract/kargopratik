import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Faq from './pages/guest/faq';
import SettingsProfile from './pages/customer/settings/settings-profile';
import SettingsCompany from './pages/customer/settings/settings-company';
import Preferences from './pages/customer/settings/settings-preferences';
import SettingsSecurity from './pages/customer/settings/settings-security';
import ForgotPassword from './pages/customer/authentication/forgot-password';
import Signin from './pages/customer/authentication/signin';
import Signup from './pages/customer/authentication/signup';
import SignupStep2 from './pages/customer/authentication/signup-step-2';
import CustomerDashboard from './pages/customer/dashboard/customer-dashboard';
import ShipmentList from './pages/customer/shipments/shipment-list';
import CustomerProfile from './pages/customer/profile/customer-profile';
import CustomerBillings from './pages/customer/billings/dashboard';
import NewShipment from './pages/customer/shipments/new-shipment';
import FirstShipment from './pages/customer/shipments/first-shipment';
import Payment from './pages/customer/shipments/shipment-payment';
import PaymentFail from './pages/customer/shipments/shipment-payment-fail';
import PaymentSuccess from './pages/customer/shipments/shipment-payment-success';
import PaymentAlert from './pages/customer/shipments/shipment-payment-alert';
import AddBalance from './pages/customer/billings/add-balance';
import AddBalanceCheckout from './pages/customer/billings/add-balance-checkout';
import NewAddBalanceCheckout from './pages/customer/billings/add-balance-new-checkout-';
import NewCreditcard from './pages/customer/billings/add-balance-new-creditcard';
import AddBalancePaymentSuccess from './pages/customer/billings/add-balance-payment-success';
import AddBalancePaymentFail from './pages/customer/billings/add-balance-payment-fail';
import SettingsShipper from './pages/customer/settings/settings-shipper';
import AccountFreeze from './pages/customer/settings/settings-account-freeze';
import AdminDashboard from './pages/admin/dashboard/admin-dashboard';
import CustomerDetail from './pages/admin/customer/customer-detail';
import AdminSettingsCustomer from './pages/admin/settings/admin-settings-customer';
import AdminPreferences from './pages/admin/settings/admin-settings-preferences';
import AdminSettingsSecurity from './pages/admin/settings/admin-settings-security';
import ShipmentDetail from './pages/customer/shipments/shipment-detail';
import LandingPage from './pages/guest';
import HowItWorks from './pages/guest/how-it-works';
import ShipmentDetailMultiple from './pages/customer/shipments/shipment-detail-multiple';


class Index extends Component {
    render() {
        return (
            <>
                <BrowserRouter basename={'/kargo-pratik'}>
                    <div id="main-wrapper">
                        <Switch>
                            <Route path='/index' exact component={LandingPage} />                            
                            <Route path='/faq' component={Faq} />
                            <Route path='/settings-profile' component={SettingsProfile} />
                            <Route path='/settings-company' component={SettingsCompany} />
                            <Route path='/settings-preferences' component={Preferences} />
                            <Route path='/settings-security' component={SettingsSecurity} />
                            <Route path='/forgot-password' component={ForgotPassword} />
                            <Route path='/sign-in' component={Signin} />
                            <Route path='/sign-up' component={Signup} />
                            <Route path='/sign-up-step-2' component={SignupStep2} />
                            <Route path='/customer-dashboard' component={CustomerDashboard} />
                            <Route path='/shipment-list' component={ShipmentList} />
                            <Route path='/customer-profile' component={CustomerProfile} />
                            <Route path='/customer-billings' component={CustomerBillings} />
                            <Route path='/new-shipment' component={NewShipment} />
                            <Route path='/first-shipment' component={FirstShipment} />
                            <Route path='/shipment-payment' component={Payment} />
                            <Route path='/shipment-payment-fail' component={PaymentFail} />
                            <Route path='/shipment-payment-success' component={PaymentSuccess} />
                            <Route path='/shipment-payment-alert' component={PaymentAlert} />
                            <Route path='/add-balance' component={AddBalance} />
                            <Route path='/add-balance-checkout' component={AddBalanceCheckout} />
                            <Route path='/add-balance-new-checkout' component={NewAddBalanceCheckout} />
                            <Route path='/add-new-creditcard' component={NewCreditcard} />
                            <Route path='/add-balance-payment-success' component={AddBalancePaymentSuccess} />
                            <Route path='/add-balance-payment-fail' component={AddBalancePaymentFail} />
                            <Route path='/settings-shipper' component={SettingsShipper} />
                            <Route path='/settings-account-freeze' component={AccountFreeze} />
                            <Route path='/admin-dashboard' component={AdminDashboard} />
                            <Route path='/customer-detail' component={CustomerDetail} />
                            <Route path='/admin-settings-customer' component={AdminSettingsCustomer} />
                            <Route path='/admin-settings-preferences' component={AdminPreferences} />
                            <Route path='/admin-settings-security' component={AdminSettingsSecurity} />
                            <Route path='/shipment-detail' component={ShipmentDetail} />
                            <Route path='/shipment-detail-multiple' component={ShipmentDetailMultiple} />
                            <Route path='/how-it-works' component={HowItWorks} />
                            
                        </Switch>
                    </div>
                </BrowserRouter>

            </>
        );
    }
}

export default Index;