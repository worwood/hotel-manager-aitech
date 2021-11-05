import React from 'react'
import { Route, Switch } from 'react-router'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { DashboardView } from '../views/DashboardView'
import { HomeView } from '../views/HomeView'
import { HuespedesView } from '../views/HuespedesView'
import { InformesView } from '../views/InformesView'
import { RegisterView } from '../views/RegisterView'

export const DashBoardRoutes = () => {
    return (
        <>        
            <Navbar />
            <div className="middle">
                <Sidebar />
                <div className="">
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/huesped" component={HuespedesView} />
                        <Route exact path="/register" component={RegisterView} />
                        <Route exact path="/informs" component={InformesView} />
                        <Route exact path="/dashboard" component={DashboardView} />
                    </Switch>
                </div>

            </div>
            
        </>
    )
}
