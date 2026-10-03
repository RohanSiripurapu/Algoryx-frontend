import { useState } from 'react'
import { Bell, ChevronDown, Menu, Search } from 'lucide-react'

function Topbar({ onMenuClick, onSearch }) {
  const [showNotifications, setShowNotifications] = useState(false)
  return (
    <header className="topbar">
      <button className="icon-button menu-button" type="button" aria-label="Open navigation" onClick={onMenuClick}><Menu size={20} /></button>
      <div className="breadcrumb"><span>Workspace</span><b>/</b><strong>Overview</strong></div>
      <label className="search-box"><Search size={17} /><input type="search" placeholder="Search anything..." aria-label="Search orders" onChange={(event) => onSearch(event.target.value)} /><kbd>⌘ K</kbd></label>
      <div className="topbar-actions">
        <div className="notification-wrap">
          <button className={`icon-button notification-button ${showNotifications ? 'selected' : ''}`} type="button" aria-label="Notifications" aria-expanded={showNotifications} onClick={() => setShowNotifications((current) => !current)}><Bell size={18} /><span className="notification-dot" /></button>
          {showNotifications && <div className="notification-popover"><div className="popover-heading"><strong>Notifications</strong><span>2 new</span></div><div className="notification-item"><i className="notification-icon mint">↗</i><p><strong>Sales are up 12%</strong><span>Compared to last month · 2h ago</span></p></div><div className="notification-item"><i className="notification-icon peach">✓</i><p><strong>New order received</strong><span>Order #NS-2048 · 4h ago</span></p></div><button className="popover-link" type="button" onClick={() => setShowNotifications(false)}>Mark all as read</button></div>}
        </div>
        <span className="topbar-divider" />
        <button className="topbar-profile" type="button" aria-label="Open Olivia Rhye profile"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80" alt="" /><span>Olivia</span><ChevronDown size={14} /></button>
      </div>
    </header>
  )
}

export default Topbar