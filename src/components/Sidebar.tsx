'use client'

import logo from '@/Assets/CareSync.png'
import { signOut } from '@/lib/auth-client'
import { toastQueue } from './ui/ToastProvider'
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
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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

type SidebarProps = {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const router = useRouter()

  // Mobile sidebar state
  const [mobileOpen, setMobileOpen] = useState(false)

  // Logout
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
      {/* =================================
          MOBILE OPEN BUTTON
      ================================= */}
      {!mobileOpen && (
        <button
          type='button'
          onClick={() => setMobileOpen(true)}
          aria-label='Open sidebar'
          className='fixed left-4 top-4 z-40 rounded-lg border border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition hover:bg-gray-100 lg:hidden'
        >
          <PanelLeftOpen size={20} />
        </button>
      )}

      {/* =================================
          MOBILE OVERLAY
      ================================= */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className='
            fixed inset-0 z-40
            bg-black/40
            lg:hidden
          '
        />
      )}

      {/* =================================
          SIDEBAR
      ================================= */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen flex-col
          border-r border-gray-200
          bg-white
          transition-all duration-300

          ${collapsed ? 'w-20' : 'w-64'}

          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* =================================
            HEADER
        ================================= */}
        <div
          className={`
            flex h-16 shrink-0 items-center
            border-b border-gray-200

            ${collapsed ? 'justify-center px-2' : 'justify-between px-5'}
          `}
        >
          {/* Logo */}
          {!collapsed && (
            <Link
              href='/'
              onClick={() => setMobileOpen(false)}
              className='shrink-0'
            >
              <Image
                src={logo}
                alt='CareSync logo'
                width={140}
                height={100}
                className='h-auto w-32'
              />
            </Link>
          )}

          {/* Header Buttons */}
          <div className='flex items-center gap-1'>
            {/* Collapse / Expand
                Mobile + Desktop
            */}
            <button
              type='button'
              onClick={() => setCollapsed((prev) => !prev)}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              className='
                rounded-lg
                p-2
                text-gray-500
                transition
                hover:bg-gray-100
                hover:text-gray-900
              '
            >
              {collapsed ? (
                <PanelLeftOpen size={20} />
              ) : (
                <PanelLeftClose size={20} />
              )}
            </button>

            {/* Close
                Mobile only
            */}
            <button
              type='button'
              onClick={() => setMobileOpen(false)}
              aria-label='Close sidebar'
              title='Close sidebar'
              className='
                rounded-lg
                p-2
                text-gray-500
                transition
                hover:bg-gray-100
                hover:text-gray-900
                lg:hidden
              '
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* =================================
            NAVIGATION
        ================================= */}
        <nav className='flex-1 overflow-y-auto p-3'>
          {!collapsed && (
            <p
              className='
              mb-3
              px-3
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-gray-400
            '
            >
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
                    group
                    flex
                    items-center
                    rounded-lg
                    py-2.5
                    text-sm
                    font-medium
                    text-gray-600
                    transition-colors
                    hover:bg-gray-100
                    hover:text-gray-900

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

        {/* =================================
            LOGOUT
        ================================= */}
        <div
          className='
          shrink-0
          border-t
          border-gray-200
          p-3
        '
        >
          <button
            type='button'
            onClick={handleLogOut}
            title={collapsed ? 'Logout' : undefined}
            className={`
              flex
              w-full
              items-center
              rounded-lg
              py-2.5
              text-sm
              font-medium
              text-gray-600
              transition-colors
              hover:bg-red-50
              hover:text-red-600

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
