import { CreditCard, ShoppingCart, UserRoundPlus, WalletCards } from 'lucide-react'

export const metrics = [
  { label: 'Total revenue', value: '$48,294', change: '12.8%', direction: 'up', icon: WalletCards, tone: 'mint' },
  { label: 'Orders placed', value: '1,284', change: '8.2%', direction: 'up', icon: ShoppingCart, tone: 'peach' },
  { label: 'New customers', value: '462', change: '4.6%', direction: 'up', icon: UserRoundPlus, tone: 'lilac' },
  { label: 'Avg. order value', value: '$37.61', change: '2.1%', direction: 'down', icon: CreditCard, tone: 'lemon' },
]

export const orders = [
  { id: '#NS-2048', customer: 'Sofia Chen', initials: 'SC', avatarTone: 'lavender', product: 'Everyday Tote · Sand', date: 'Oct 03, 2026', amount: '$128.00', status: 'Delivered', statusTone: 'delivered' },
  { id: '#NS-2047', customer: 'Marcus Lee', initials: 'ML', avatarTone: 'blue', product: 'Ceramic Pour-over Set', date: 'Oct 03, 2026', amount: '$84.50', status: 'Processing', statusTone: 'processing' },
  { id: '#NS-2046', customer: 'Amara Okafor', initials: 'AO', avatarTone: 'peach', product: 'Linen Table Runner', date: 'Oct 02, 2026', amount: '$56.00', status: 'Delivered', statusTone: 'delivered' },
  { id: '#NS-2045', customer: 'Theo Martin', initials: 'TM', avatarTone: 'mint', product: 'Glass Carafe · Smoke', date: 'Oct 02, 2026', amount: '$42.00', status: 'In transit', statusTone: 'transit' },
  { id: '#NS-2044', customer: 'Priya Nair', initials: 'PN', avatarTone: 'lemon', product: 'Woven Market Basket', date: 'Oct 01, 2026', amount: '$96.00', status: 'Delivered', statusTone: 'delivered' },
]

export const activities = [
  { title: 'New order from Sofia Chen', detail: 'Order #NS-2048 · $128.00', time: '2m ago', icon: ShoppingCart, tone: 'mint' },
  { title: 'Payment received', detail: 'Order #NS-2045 · $42.00', time: '18m ago', icon: WalletCards, tone: 'peach' },
  { title: 'New customer joined', detail: 'Welcome, Priya Nair!', time: '1h ago', icon: UserRoundPlus, tone: 'lilac' },
]