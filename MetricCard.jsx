import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

function MetricCard({ metric }) {
  const Icon = metric.icon
  return <article className="metric-card"><div className="metric-topline"><span className={`metric-icon ${metric.tone}`}><Icon size={18} strokeWidth={1.9} /></span><span className="metric-period">This month</span></div><p className="metric-label">{metric.label}</p><div className="metric-value-row"><strong className="metric-value">{metric.value}</strong><span className={`metric-change ${metric.direction}`}>{metric.direction === 'down' ? <ArrowDownRight size={13} /> : <ArrowUpRight size={13} />}{metric.change}</span></div><p className="metric-caption">vs. previous month</p></article>
}

export default MetricCard