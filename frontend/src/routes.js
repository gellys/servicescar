import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoreProvider from './Store/Provider';


import Login from './pages/Login';
import Profile from './pages/Profile';

export default function Routes(){
    return(
        <Router>
            <StoreProvider>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Profile} />
                </Switch>
            </StoreProvider>
        </Router>
    )
}