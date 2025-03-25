// src/pages/cards.js

import Layout from '../components/Layout';

const cardData = [
  {
    table_name: 'users',
    icon: 'bi-people',
    description: 'All registered users',
  },
  {
    table_name: 'orders',
    icon: 'bi-box-seam',
    description: 'Customer order history',
  },
  {
    table_name: 'products',
    icon: 'bi-bag',
    description: 'Manage product inventory',
  },
  // Add more if needed
];

export default function Management() {
  return (
    <Layout>
      <div className="content">
        <div id="card-container" className="management-section card-container">
          {cardData.map((row) => (
            <a
              key={row.table_name}
              href={`/tables?table=${encodeURIComponent(row.table_name)}`}
              className="admin-card-link"
            >
              <div className="admin-card">
                <i className={`bi ${row.icon}`}></i>
                <h3>{row.table_name}</h3>
                <p>{row.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
