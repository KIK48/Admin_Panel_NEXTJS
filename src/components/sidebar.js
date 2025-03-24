// src/components/Sidebar.js

import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
  { title: 'Dashboard', url: '/', icon: 'bi-house-door' },
  { title: 'Management', url: '/card', icon: 'bi-database' },
  { title: 'Tables', url: '/tables', icon: 'bi-diagram-3' },
  { title: 'Panel Test', url: '/panel_test', icon: 'bi-people' },
  { title: 'Settings', url: '/settings', icon: 'bi-gear' },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <div id="sidebar" className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h2 id="sidebar-logo">ZHEA</h2>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.url}>
            <Link href={item.url} className={`nav-link text-white ${router.pathname === item.url ? 'active' : ''}`} title={item.title}>
              <i className={`bi ${item.icon}`}></i>
              <span className="sidebar-text">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
