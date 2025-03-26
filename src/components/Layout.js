// src/components/Layout.js

import { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Head from 'next/head'

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarColor, setSidebarColor] = useState('var(--gold)');

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);
  useEffect(() => {
    const savedColor = localStorage.getItem('sidebarColor');
    if (savedColor) {
      setSidebarColor(savedColor);
    }
  },[]);

  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Load custom global CSS from /public/css */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/dashboard.css" />
        <link rel="stylesheet" href="/css/card.css" />
        <link rel="stylesheet" href="/css/settings.css"></link>

        {/* Bootstrap and icons */}
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
        <link 
          rel = "stylesheet"
          href = "https://img.icons8.com/ios/50/cash-app.png"
        />
        <link type="image/png" sizes="16x16" rel="icon" href=".../icons8-cash app-ios7-16.png"></link>
      </Head>

      <div className="d-flex">
        <Sidebar isCollapsed={isCollapsed} sidebarColor={sidebarColor}/>

        <div id="main-content" className="main-content flex-grow-1">
        <Navbar toggleSidebar={toggleSidebar} username="KIK48" />
          <div className="content">{children}</div>
        </div>
      </div>

      {/* Optional scripts if needed */}
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
    </>
  );
}