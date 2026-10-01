'use client'

import { Bell } from 'lucide-react'
import { useSession } from '@/lib/auth-client'
import { Avatar, Badge } from '@heroui/react'

export function DashboardTopBar() {
  const { data } = useSession()

  const user = data?.user

  return (
    <header className='sticky top-0 z-30 flex h-16 items-center justify-end border-b border-gray-200 bg-white px-6'>
      <div className='flex items-center gap-4'>
        {/* Notification */}
        <button
          className='relative rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900'
          aria-label='Notifications'
        >
          <Bell size={20} />

          <span className='absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500' />
        </button>

        {/* Profile */}
        <div className='flex items-center gap-3'>
          {/* <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-400 text-sm font-semibold text-white'></div> */}
          <Badge.Anchor>
            <Avatar>
              <Avatar.Image />
              <Avatar.Fallback>
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </Avatar.Fallback>
            </Avatar>
            <Badge color='accent' size='sm'>
              <Bell className='size-2.5' />
            </Badge>
          </Badge.Anchor>

          <div className='hidden text-right sm:block'>
            <p className='text-sm font-semibold text-gray-900'>{user?.name}</p>

            <p className='max-w-40 truncate text-xs text-gray-500'>
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
