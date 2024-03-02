import React from 'react';
import '../../src/App.css'
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Service from './components/nested-comp/Service';
import Contact from './components/nested-comp/Contact';
import Home from './components/nested-comp/Home';
import CheckAuthentication from './components/CheckAuthentication';
import Login from './components/Login';

const mainRouter = createBrowserRouter([
    { path: '/', Component: Login },                    //made default to Signup
    { path: '/login', Component: Login },
    { path: '/signup', Component: Signup },
    {
        path: 'dashboard', loader: CheckAuthentication, Component: Dashboard, children: [
            { path: '', Component: Home },                    //made default to Home
            { path: 'home', Component: Home },
            { path: 'service', Component: Service },
            { path: 'contact', Component: Contact }
        ]
    },
]);


const RoutingHome = () => {
    return (
        <div style={{ width: '100%', height: '400px', border: '2px solid black' }}>
            <h1 style={{ fontWeight: '700', fontSize: '22px', textAlign: 'center', padding: '5px', margin: '5px' }}>Routing</h1>
            <RouterProvider router={mainRouter} />
        </div>
    );
};

export default RoutingHome;