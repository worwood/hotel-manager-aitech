import React from 'react'
import {
    Switch,
    Route,
    HashRouter
  } from "react-router-dom";
import { LoginView } from '../views/LoginView';
import { DashBoardRoutes } from './DashBoardRoutes';

export const AppRouter = () => {
    return (
        <HashRouter basename="/hotel-manager-aitech">
            <Switch>
                <Route exact path="/login" component={LoginView}/>
                <Route path="/" component={DashBoardRoutes}/>
            </Switch>
        </HashRouter>
    )
}
