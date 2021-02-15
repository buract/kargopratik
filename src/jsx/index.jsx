import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/index';
import Homepage2 from './pages/index2';
import Price from './pages/price';
import Wallet from './pages/wallet';
import About from './pages/about';
import Team from './pages/team';
import Blog from './pages/blog';
import BlogSingle from './pages/blog-single';
import Career from './pages/career';
import Contact from './pages/contact';
import HelpDesk from './pages/helpdesk';
import Faq from './pages/faq';
import Dashboard from './pages/dashboard';
import BuySell from './pages/buy-sell';
import Accounts from './pages/accounts';
import SettingsProfile from './pages/customer/settings/settings-profile';
import SettingsCompany from './pages/customer/settings/settings-company';
import Preferences from './pages/customer/settings/settings-preferences';
import SettingsSecurity from './pages/customer/settings/settings-security';
import AddBankAccount from './pages/add-bank-acc';
import AddDebitCard from './pages/add-debit-card';
import Locked from './pages/lock';
import Otp1 from './pages/otp-1';
import Otp2 from './pages/otp-2';
import PrivacyPolicy from './pages/privacy-policy';
import ForgotPassword from './pages/customer/authentication/forgot-password';
import Signin from './pages/customer/authentication/signin';
import Signup from './pages/signup';
import TermsCondition from './pages/terms-condition';
import VerifyStep1 from './pages/verify-step-1';
import SignupStep2 from './pages/customer/authentication/signup-step-2';
import VerifyStep3 from './pages/verify-step-3';
import VerifyStep4 from './pages/verify-step-4';
import VerifyStep5 from './pages/verify-step-5';
import VerifyStep6 from './pages/verify-step-6';
import History from './pages/history';
import Demo from './pages/demo';
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

class Index extends Component {
    render() {
        return (
            <>
                <BrowserRouter basename={'/kargo-pratik'}>
                    <div id="main-wrapper">
                        <Switch>
                            <Route path='/' exact component={Homepage} />
                            <Route path='/index2' component={Homepage2} />
                            <Route path='/price' component={Price} />
                            <Route path='/wallet' component={Wallet} />
                            <Route path='/about' component={About} />
                            <Route path='/team' component={Team} />
                            <Route path='/blog' component={Blog} />
                            <Route path='/blog-single' component={BlogSingle} />
                            <Route path='/career' component={Career} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/helpdesk' component={HelpDesk} />
                            <Route path='/faq' component={Faq} />
                            <Route path='/dashboard' component={Dashboard} />
                            <Route path='/buy-sell' component={BuySell} />
                            <Route path='/accounts' component={Accounts} />
                            <Route path='/settings-profile' component={SettingsProfile} />
                            <Route path='/settings-company' component={SettingsCompany} />
                            <Route path='/settings-preferences' component={Preferences} />
                            <Route path='/settings-security' component={SettingsSecurity} />
                            <Route path='/add-bank-acc' component={AddBankAccount} />
                            <Route path='/add-debit-card' component={AddDebitCard} />
                            <Route path='/lock' component={Locked} />
                            <Route path='/otp-1' component={Otp1} />
                            <Route path='/otp-2' component={Otp2} />
                            <Route path='/privacy-policy' component={PrivacyPolicy} />
                            <Route path='/forgot-password' component={ForgotPassword} />
                            <Route path='/sign-in' component={Signin} />
                            <Route path='/signup' component={Signup} />
                            <Route path='/signup-step-2' component={SignupStep2} />
                            <Route path='/terms-condition' component={TermsCondition} />
                            <Route path='/verify-step-1' component={VerifyStep1} />
                            <Route path='/signup-step-2' component={SignupStep2} />
                            <Route path='/verify-step-3' component={VerifyStep3} />
                            <Route path='/verify-step-4' component={VerifyStep4} />
                            <Route path='/verify-step-5' component={VerifyStep5} />
                            <Route path='/verify-step-6' component={VerifyStep6} />
                            <Route path='/history' component={History} />
                            <Route path='/demo' component={Demo} />
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
                        </Switch>
                    </div>
                </BrowserRouter>

            </>
        );
    }
}

export default Index;