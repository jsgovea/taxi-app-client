import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../typed-components';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../Routes/Home';
import Login from '../../Routes/Login';
import PhoneLogin from '../../Routes/PhoneLogin';
import Places from '../../Routes/Places';
import Ride from '../../Routes/Ride';
import Settings from '../../Routes/Settings';
import VerifyPhone from '../../Routes/VerifyPhone';
import SocialLogin from '../../Routes/SocialLogin';
import EditAccount from '../../Routes/EditAccount';
import AddPlace from '../../Routes/AddPlace';
import FindAddress from '../../Routes/FindAddress';

interface IProps {
    isLoggedIn: boolean;
}

const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) => <BrowserRouter>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</BrowserRouter>

const LoggedOutRoutes: React.FC = () => (
    <Switch>
        <Route path={"/"} exact={true} component={Login} />
        <Route path={"/phone-login/"} component={PhoneLogin} />
        <Route path={"/verify-phone"} component={VerifyPhone} />
        <Route path={"/social-login"} component={SocialLogin} />
        <Redirect from={"*"} to={"/"} />
    </Switch>
)

const LoggedInRoutes: React.FC = () => (
    <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={"/ride"} exact={true} component={Ride} />
        <Route path={"/edit-account"} exact={true} component={EditAccount} />
        <Route path={"/settings"} exact={true} component={Settings} />
        <Route path={"/places"} exact={true} component={Places} />
        <Route path={"/add-place"} exact={true} component={AddPlace} />
        <Route path={"/find-address"} exact={true} component={FindAddress} />
        <Redirect from={"*"} to={"/"} />
    </Switch>
)

AppPresenter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default AppPresenter;