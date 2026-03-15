import type { Metadata } from 'next'
import { DashboardContent } from './dashboard-content'

export const metadata: Metadata = {
  title: 'لوحة التحكم | Dashboard',
}

export default function DashboardPage() {
  return <DashboardContent />
}
