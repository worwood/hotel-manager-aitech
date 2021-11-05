import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginView } from '../views/LoginView';
import { DashBoardRoutes } from './DashBoardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginView}/>
                <Route path="/" component={DashBoardRoutes}/>
            </Switch>
        </Router>
    )
}
