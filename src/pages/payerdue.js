import Layout from '../components/Layout';



export default function Panel_Test() {
  return (
    <Layout>
      <div id="management-section" className="management-section card-container">
        <div className="admin-card">
        <i className="bi bi-paypal"></i>
        <h3>Paypal</h3>
        </div>
      
      
        <div className="admin-card">
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <svg 
            className = "svg-icons" 
            xmlns="http://www.w3.org/2000/svg" 
            width="50" 
            height="50" viewBox="0 0 50 50">
            <path
              className="svg-border"
              d="M 13 4 C 8.0414839 4 4 8.0414839 4 13 L 4 37 C 4 41.958516 8.0414839 46 13 46 L 37 46 C 41.958516 46 46 41.958516 46 37 L 46 13 C 46 8.0414839 41.958516 4 37 4 L 13 4 z M 13 6 L 37 6 C 40.877484 6 44 9.1225161 44 13 L 44 37 C 44 40.877484 40.877484 44 37 44 L 13 44 C 9.1225161 44 6 40.877484 6 37 L 6 13 C 6 9.1225161 9.1225161 6 13 6 z M 27.779297 10.005859 C 27.545297 10.005859 27.344969 10.168484 27.292969 10.396484 L 26.683594 13.089844 C 26.1429 13.034815 25.581544 13 24.988281 13 C 21.273281 13 18.194516 15.542047 17.853516 18.998047 C 16.974516 27.946047 28.930438 26.178563 28.148438 30.601562 C 27.892438 32.051563 26.645547 33.254781 22.935547 32.675781 C 20.332547 32.269781 18.906656 30.927391 18.347656 30.275391 C 18.179656 30.079391 17.898359 30.046172 17.693359 30.201172 L 15.220703 32.080078 C 15.003703 32.245078 14.954187 32.558297 15.117188 32.779297 C 15.796388 33.698428 17.740935 35.893685 21.371094 36.675781 L 20.757812 39.390625 C 20.687812 39.703625 20.923141 40 21.244141 40 L 25.345703 40 C 25.579703 40 25.780031 39.837375 25.832031 39.609375 L 26.449219 36.880859 C 31.011099 36.284449 32.910361 33.439276 33.328125 30.837891 C 33.841125 27.648891 32.3825 24.067312 26.8125 22.570312 C 23.6085 21.709312 22.334094 20.456281 22.871094 18.863281 C 23.969094 15.607281 30.450016 18.227641 31.916016 19.556641 C 32.104016 19.726641 32.3795 19.720922 32.5625 19.544922 L 34.820312 17.375 C 35.024313 17.18 35.032078 16.849344 34.830078 16.652344 C 34.308673 16.144191 33.202102 15.208926 31.511719 14.410156 L 32.367188 10.615234 C 32.438187 10.302234 32.201859 10.005859 31.880859 10.005859 L 27.779297 10.005859 z"
            />
            </svg>
            </div>
          <h3>Cash App</h3>
        </div>
      
      
        <div className="admin-card">
        <div style={{display:'flex', justifyContent: 'center'}}>
        <svg 
        className = 'svg-icons'
        xmlns="http://www.w3.org/2000/svg" 
        
        width="16" 
        height="16" 
        viewBox="0 0 16 16">
          <path
            className="svg-border"
            d="M3.5,2C2.7,2,2,2.7,2,3.5v9C2,13.3,2.7,14,3.5,14h9c0.8,0,1.5-0.7,1.5-1.5v-9C14,2.7,13.3,2,12.5,2H3.5z M3.5,3h9	C12.8,3,13,3.2,13,3.5v9c0,0.3-0.2,0.5-0.5,0.5h-9C3.2,13,3,12.8,3,12.5v-9C3,3.2,3.2,3,3.5,3z">

          </path>
          <path 
            className = "svg-border" // This is the logo inside zelle
            d="M10.3,6.2c0,0,0.1-0.1,0.1-0.2V5.3c0-0.2-0.1-0.3-0.3-0.3H8.7V4.1C8.7,4.1,8.6,4,8.6,4h-1C7.5,4,7.4,4.1,7.4,4.1V5H6.1	C5.9,5,5.8,5.1,5.8,5.3V6c0,0.2,0.1,0.3,0.3,0.3h2.3L5.7,9.7c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.2v0.7c0,0.2,0.1,0.3,0.3,0.3h1.5v1	c0,0.1,0.1,0.1,0.1,0.1h1c0.1,0,0.1-0.1,0.1-0.1v-1h1.4c0.2,0,0.3-0.1,0.3-0.3V9.9c0-0.2-0.1-0.3-0.3-0.3H7.6L10.3,6.2	C10.3,6.2,10.3,6.2,10.3,6.2z">
          </path>
        </svg>
        </div>
        <h3>Zelle</h3>
        </div>
      </div>
    </Layout>
  );
}