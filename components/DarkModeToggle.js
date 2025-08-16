"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-transform"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
