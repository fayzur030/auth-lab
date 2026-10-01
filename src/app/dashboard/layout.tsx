'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { DashboardTopBar } from './DashboardTopbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='min-h-screen bg-gray-50'>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`transition-all duration-300 ${
          collapsed ? 'lg:ml-20' : 'lg:ml-64'
        }`}
      >
        <DashboardTopBar />

        <main className='p-6'>{children}</main>
      </div>
    </div>
  )
}
