
import Layout from '../components/Layout'
import Dashboard from './dashboard';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to the Admin Panel</h1>
      <Dashboard />
    </Layout>
  );
}