// src/pages/dashboard.js



export default function Dashboard() {
  return (
    
      <div className="dashboard">
        <div id="card-container" className="card-container">
          <div className="card">
            <i className="fas fa-user"></i>
            <h3>2500</h3>
            <p>Users</p>
          </div>
          <div className="card">
            <i className="fas fa-clock"></i>
            <h3>123.50</h3>
            <p>Average Time</p>
          </div>
          <div className="card">
            <i className="fas fa-cloud-download-alt"></i>
            <h3>1,805</h3>
            <p>Downloads</p>
          </div>
          <div className="card">
            <i className="fas fa-comments"></i>
            <h3>54</h3>
            <p>Comments</p>
          </div>
        </div>
      </div>
    
  );
}
