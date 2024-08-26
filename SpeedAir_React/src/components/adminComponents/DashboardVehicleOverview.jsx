import React, {useState} from 'react';
import '../../assets/styles/adminStyles/DashboardVehicleOverview.css';

const DashboardVehiclesOverview = () => {
  const [vehicleData, setVehicleData] = useState({
    onTheWay: { percentage: 39.7, time: "2hr 10min" },
    unloading: { percentage: 28.3, time: "3hr 15min" },
    loading: { percentage: 17.4, time: "1hr 24min" },
    waiting: { percentage: 14.6, time: "5hr 19min" },
  });
  const [statistics, setStatistics] = useState({
    totalDeliveries: 23800,
    shipments: [35, 40, 25, 30, 45, 50],
    deliveries: [25, 30, 20, 25, 35, 40],
  });
  const [selectedMonth, setSelectedMonth] = useState("January");

  return (
    <section className='admin-section1'>
    <div className="vehicles-overview card">
      <h3>Vehicles overview</h3>
      <div className="overview-content">
        <div className="progress-bar">
          <div className="progress on-the-way" style={{ width: `${vehicleData.onTheWay.percentage}%` }}>
            {vehicleData.onTheWay.percentage}%
          </div>
          <div className="progress unloading" style={{ width: `${vehicleData.unloading.percentage}%` }}>
            {vehicleData.unloading.percentage}%
          </div>
          <div className="progress loading" style={{ width: `${vehicleData.loading.percentage}%` }}>
            {vehicleData.loading.percentage}%
          </div>
          <div className="progress waiting" style={{ width: `${vehicleData.waiting.percentage}%` }}>
            {vehicleData.waiting.percentage}%
          </div>
        </div>
        <div className="details">
          <div className="detail">
            <i className="fas fa-truck"></i>
            <span>On the way</span>
            <span>{vehicleData.onTheWay.time}</span>
            <span>{vehicleData.onTheWay.percentage}%</span>
          </div>
          <div className="detail">
            <i className="fas fa-box-open"></i>
            <span>Unloading</span>
            <span>{vehicleData.unloading.time}</span>
            <span>{vehicleData.unloading.percentage}%</span>
          </div>
          <div className="detail">
            <i className="fas fa-dolly"></i>
            <span>Loading</span>
            <span>{vehicleData.loading.time}</span>
            <span>{vehicleData.loading.percentage}%</span>
          </div>
          <div className="detail">
            <i className="fas fa-clock"></i>
            <span>Waiting</span>
            <span>{vehicleData.waiting.time}</span>
            <span>{vehicleData.waiting.percentage}%</span>
          </div>
        </div>
      </div>
    </div>
    <div className="shipment-statistics card">
      <div className="header">
        <h3>Shipment statistics</h3>
        <div className="month-selector">
          <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            <option value="January">January</option>
            <option value="February">February</option>
          </select>
        </div>
      </div>
      <p>Total number of deliveries: <span className='chart-value'>{statistics.totalDeliveries.toLocaleString()}</span></p>
      <div className="statistics-content">
        <div className="chart">
          {statistics.shipments.map((value, index) => (
            <div key={index}>
              <span>Shipment {index + 1}:</span><span className='chart-value'> {value}%</span>
              <span>Delivery {index + 1}:</span><span className='chart-value'> {statistics.deliveries[index]}%</span>
            </div>
          ))}
        </div>
        <div className="legend">
          <div className="legend-item">
            <span className="legend-color shipment"></span>
            <span>Shipment</span>
          </div>
          <div className="legend-item">
            <span className="legend-color delivery"></span>
            <span>Delivery</span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DashboardVehiclesOverview;
