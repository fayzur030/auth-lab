'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Settings,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  KeyRound,
  X,
} from 'lucide-react'
import { signOut, useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { toastQueue } from './ui/ToastProvider'

const menuItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Users',
    href: '/dashboard/users',
    icon: Users,
  },
  {
    label: 'Sessions',
    href: '/dashboard/sessions',
    icon: KeyRound,
  },
  {
    label: 'Authentication',
    href: '/dashboard/authentication',
    icon: ShieldCheck,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { data } = useSession()
  const router = useRouter()
  const handleLogOut = async () => {
    const { error } = await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/')
        },
      },
    })
    if (error) {
      toastQueue.add({
        // title: 'Sign in failed',
        description: error.message,
        variant: 'danger',
      })
      return
    }
    toastQueue.add({
      description: 'Log out successfully.',
      variant: 'success',
    })
  }

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className='fixed inset-0 z-40 bg-black/40 lg:hidden'
        />
      )}

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className='fixed left-4 top-4 z-30 rounded-lg border bg-white p-2 shadow-sm lg:hidden'
      >
        <PanelLeftOpen size={20} />
      </button>

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen flex-col
          border-r border-gray-200 bg-white
          transition-all duration-300
          ${collapsed ? 'w-20' : 'w-64'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div
          className={`flex h-16 items-center border-b border-gray-200 ${
            collapsed ? 'justify-center' : 'justify-between px-5'
          }`}
        >
          {!collapsed && (
            <Link href='/' className='text-xl font-bold tracking-tight'>
              AuthLab
            </Link>
          )}

          {/* Desktop Collapse */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className='hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 lg:block'
          >
            {collapsed ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </button>

          {/* Mobile Close */}
          <button
            onClick={() => setMobileOpen(false)}
            className='rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden'
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className='flex-1 overflow-y-auto p-3'>
          {!collapsed && (
            <p className='mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400'>
              Overview
            </p>
          )}

          <div className='space-y-1'>
            {menuItems.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  title={collapsed ? item.label : undefined}
                  className={`
                    group flex items-center rounded-lg
                    py-2.5 text-sm font-medium
                    text-gray-600 transition-colors
                    hover:bg-gray-100 hover:text-gray-900
                    ${collapsed ? 'justify-center px-2' : 'gap-3 px-3'}
                  `}
                >
                  <Icon size={19} strokeWidth={1.8} className='shrink-0' />

                  {!collapsed && <span>{item.label}</span>}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* User Profile */}
        <div className='border-t border-gray-200 p-3'>
          <div
            className={`mb-2 flex items-center ${
              collapsed ? 'justify-center' : 'gap-3 px-2'
            }`}
          >
            <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white'>
              F
            </div>

            {!collapsed && (
              <div className='min-w-0'>
                <p className='truncate text-sm font-medium text-gray-900'>
                  {data?.user?.name}
                </p>

                <p className='truncate text-xs text-gray-500'>
                  {data?.user.email}
                </p>
              </div>
            )}
          </div>

          {/* Logout */}
          <button
            title={collapsed ? 'Logout' : undefined}
            onClick={handleLogOut}
            className={`
              flex w-full items-center rounded-lg
              py-2.5 text-sm font-medium
              text-gray-600 transition-colors
              hover:bg-red-50 hover:text-red-600
              ${collapsed ? 'justify-center px-2' : 'gap-3 px-3'}
            `}
          >
            <LogOut size={19} />

            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  )
}
