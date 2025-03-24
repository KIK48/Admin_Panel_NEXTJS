// src/components/Layout.js

import Head from 'next/head';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Dashboard from './dashboard';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* CSS */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/dashboard.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      
      <div className="d-flex">
        <Sidebar />

        <div id="main-content" className="main-content flex-grow-1">
          <Navbar username = "KIK48"/>
          <div className="content">{children}</div>
          <Dashboard />
        </div>

        

      </div>

      {/* Scripts */}
      <script src="/js/script.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
    </>
  );
}
