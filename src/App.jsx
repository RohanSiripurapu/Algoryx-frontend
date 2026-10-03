import { useState } from 'react'
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'
import ActivityFeed, { OrdersTable, ProfileCard, SalesChart } from './components/DashboardPanels.jsx'
import MetricCard from './components/MetricCard.jsx'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import { metrics, orders } from './data/dashboard.js'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Overview')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')
  const visibleOrders = orders.filter((order) =>
    `${order.id} ${order.customer} ${order.product} ${order.status}`.toLowerCase().includes(search.toLowerCase()),
  )

  function exportReport() {
    const rows = [['Order', 'Customer', 'Product', 'Date', 'Amount', 'Status'], ...orders.map(({ id, customer, product, date, amount, status }) => [id, customer, product, date, amount, status])]
    const csv = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'northstar-orders.csv'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onNavigate={(page) => { setActivePage(page); setIsSidebarOpen(false) }} />
      <main className="main-content">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} onSearch={setSearch} />
        <div className="page-content">
          <section className="welcome-row">
            <div><p className="eyebrow">SATURDAY, OCTOBER 3, 2026</p><h1>{activePage === 'Overview' ? 'Good morning, Olivia' : activePage}</h1><p className="welcome-copy">Here&apos;s what&apos;s happening with your store today.</p></div>
            <button className="export-button" type="button" onClick={exportReport}><ArrowDownToLine size={16} /><span>Export report</span></button>
          </section>
          <section className="metrics-grid" aria-label="Store performance">{metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}</section>
          <section className="overview-grid" aria-label="Sales overview and account activity"><SalesChart /><div className="right-rail"><ProfileCard /><ActivityFeed /></div></section>
          <section className="orders-section" aria-labelledby="orders-heading">
            <div className="section-heading"><div><p className="eyebrow">YOUR STORE, AT A GLANCE</p><h2 id="orders-heading">Recent orders</h2></div><button className="text-action" type="button" onClick={() => setActivePage('Orders')}>All orders <ArrowUpRight size={15} /></button></div>
            <OrdersTable rows={visibleOrders} />
            {search && <p className="search-summary">Showing {visibleOrders.length} of {orders.length} orders</p>}
          </section>
          <footer className="page-footer"><span>© 2026 Northstar Commerce</span><span><i className="status-dot" /> All systems operational</span></footer>
        </div>
      </main>
    </div>
  )
}

export default App