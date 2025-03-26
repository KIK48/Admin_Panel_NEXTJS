// src/components/Sidebar.js

// src/components/Sidebar.js

import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
  { title: 'Dashboard', url: '/', icon: 'bi-house-door' },
  { title: 'Management', url: '/management', icon: 'bi-database' },
  { title: 'Tables', url: '/tables', icon: 'bi-diagram-3' },
  { title: 'Pay Your Dues', url: '/payerdue', icon: 'bi bi-cash' },
  { title: 'Settings', url: '/settingsPg', icon: 'bi-gear' },
];

export default function Sidebar({ isCollapsed }) {
  const router = useRouter();


  return (
    <div id="sidebar" className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} style={{ backgroundColor: '--sidebar-color' }}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h2 id="sidebar-logo">ALPHA PHI ALPHA</h2>
      </div>

      {/* Menu */}
      <ul className="sidebar-menu">

        {menuItems.map((item) => (

          <li key={item.url}>
            <Link href={item.url} legacyBehavior>

              <a className={`nav-link text-white ${router.pathname === item.url ? 'active' : ''}`}>
                <i className={`bi ${item.icon}`}></i>
                <span className="sidebar-text">{item.title}</span>
              </a>
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}
