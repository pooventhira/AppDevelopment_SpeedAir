import React from 'react';
import '../../assets/styles/adminStyles/DashboardCards.css';

const DashboardCards = () => {
  return (
    <section className='admin-section'>
    <div className="dashboard-cards">
      <div className="card">
        <div className="icon purple"><i className="fas fa-truck"></i></div>
        <div className="card-content">
          <h2>42</h2>
          <p>On route vehicles</p>
          <span className="percentage positive">+18.2% than last week</span>
        </div>
      </div>
      <div className="card">
        <div className="icon yellow"><i className="fas fa-exclamation-triangle"></i></div>
        <div className="card-content">
          <h2>8</h2>
          <p>Vehicles with errors</p>
          <span className="percentage negative">-8.7% than last week</span>
        </div>
      </div>
      <div className="card">
        <div className="icon red"><i className="fas fa-map-signs"></i></div>
        <div className="card-content">
          <h2>27</h2>
          <p>Deviated from route</p>
          <span className="percentage positive">+4.3% than last week</span>
        </div>
      </div>
      <div className="card">
        <div className="icon blue"><i className="fas fa-clock"></i></div>
        <div className="card-content">
          <h2>13</h2>
          <p>Late vehicles</p>
          <span className="percentage negative">-2.5% than last week</span>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DashboardCards;
