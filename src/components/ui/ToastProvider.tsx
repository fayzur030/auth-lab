'use client'

import { Toast, ToastQueue } from '@heroui/react'

export const toastQueue = new ToastQueue({
  maxVisibleToasts: 3,
})

export function ToastProvider() {
  return <Toast.Provider placement='top end' queue={toastQueue} />
}
