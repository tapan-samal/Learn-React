import React from 'react';
import SideNavbar from './SideNavbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

  return (
    <div className='dashboard-page'>
      <h1 style={{ padding: '10px', margin: '10px' }}>Dashboard Page</h1>
      <div className="main">
        <div className="navbar">
          <SideNavbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;