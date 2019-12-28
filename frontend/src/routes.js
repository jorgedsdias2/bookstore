import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import DefaultLayout from './layout/DefaultLayout';
import LoginLayout from './layout/LoginLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Authors from './pages/Authors';
import store from './store';

export default function Routes() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <DefaultLayout exact path="/" component={Dashboard} />
                    <DefaultLayout path="/authors" component={Authors} />
                    <LoginLayout path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}