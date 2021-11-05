import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className='sidebar p-3 text-white bg-dark'>
            <Link 
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" 
                to="/"
            >
                <span className="fs-4">Sidebar</span>
            </Link>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink 
                        activeClassName="active"
                        className="nav-link text-white" 
                        exact to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        activeClassName="active"
                        className="nav-link text-white" 
                        exact to="/dashboard"
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        activeClassName="active"
                        className="nav-link text-white" 
                        exact to="/register"
                    >
                        Registro
                    </NavLink>
                </li>                
                <li className="nav-item">
                    <NavLink 
                        activeClassName="active"
                        className="nav-link text-white" 
                        exact to="/huesped"
                    >
                        Huesped
                    </NavLink>
                </li>                
                <li className="nav-item">
                    <NavLink 
                        activeClassName="active"
                        className="nav-link text-white" 
                        exact to="/informs"
                    >
                        Informes
                    </NavLink>
                </li>                  

            </ul>
        </div>
    )
}
