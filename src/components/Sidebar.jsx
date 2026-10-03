import { Activity, Boxes, ChartNoAxesCombined, CircleHelp, LayoutDashboard, LogOut, MessageSquareText, Settings2, ShoppingBag, UsersRound, X } from 'lucide-react'

const primaryLinks = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Orders', icon: ShoppingBag, badge: '8' },
  { label: 'Products', icon: Boxes },
  { label: 'Customers', icon: UsersRound },
  { label: 'Analytics', icon: ChartNoAxesCombined },
]

function Sidebar({ activePage, isOpen, onClose, onNavigate }) {
  return (
    <>
      <button className={`sidebar-scrim ${isOpen ? 'is-visible' : ''}`} aria-label="Close navigation" onClick={onClose} tabIndex={isOpen ? 0 : -1} />
      <aside className={`sidebar ${isOpen ? 'is-open' : ''}`}>
        <div className="brand-row"><div className="brand-mark"><Activity size={18} strokeWidth={2.4} /></div><span className="brand-name">northstar<span>.</span></span><button className="icon-button sidebar-close" aria-label="Close navigation" onClick={onClose}><X size={19} /></button></div>
        <div className="workspace-switcher"><div className="workspace-avatar">N</div><div className="workspace-copy"><strong>Northstar Studio</strong><span>Pro workspace</span></div><span className="workspace-caret">⌄</span></div>
        <nav className="sidebar-nav" aria-label="Main navigation">
          <p className="nav-label">WORKSPACE</p>
          {primaryLinks.map(({ label, icon: Icon, badge }) => <button key={label} className={`nav-link ${activePage === label ? 'active' : ''}`} type="button" onClick={() => onNavigate(label)}><Icon size={18} strokeWidth={1.8} /><span>{label}</span>{badge && <span className="nav-badge">{badge}</span>}</button>)}
          <p className="nav-label nav-label-lower">PREFERENCES</p>
          <button className="nav-link" type="button" onClick={() => onNavigate('Messages')}><MessageSquareText size={18} strokeWidth={1.8} /><span>Messages</span><span className="message-indicator" /></button>
          <button className="nav-link" type="button" onClick={() => onNavigate('Settings')}><Settings2 size={18} strokeWidth={1.8} /><span>Settings</span></button>
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><div className="help-icon"><CircleHelp size={16} /></div><strong>Need a hand?</strong><span>Our team is one click away.</span><button type="button" onClick={() => onNavigate('Help center')}>Visit help center <span>↗</span></button></div>
          <button className="account-row" type="button" onClick={() => onNavigate('Account')}><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80" alt="Olivia Rhye" /><span className="account-copy"><strong>Olivia Rhye</strong><small>Store owner</small></span><LogOut size={16} className="account-menu-icon" /></button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar