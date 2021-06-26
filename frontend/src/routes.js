import{ BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import Shows from './pages/Shows';
import Sertanejo from './pages/Sertanejo';
import GusttavoLima from './pages/Gusttavo';

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/events" component={Events}/>
            <Route path="/shows" component={Shows}/>
            <Route path="/sertanejo" component={Sertanejo}/>
            <Route path="/gusttavo" component={GusttavoLima}/>


        </Switch>
        </BrowserRouter>
    );
}