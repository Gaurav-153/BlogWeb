import DarkModeToggle from './DarkModeToggle'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 dark:from-gray-900 dark:via-gray-800 dark:to-black backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/40 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Left Side - Logo */}
        <Link 
          href="/" 
          className="text-2xl font-extrabold tracking-wide text-white dark:text-purple-400 hover:opacity-90 transition"
        >
          Blog Website
        </Link>

        {/* Right Side - Nav Links + Dark Mode */}
        <div className="flex items-center gap-6 text-white dark:text-gray-200">
          <Link 
            href="/" 
            className="hover:text-yellow-200 dark:hover:text-purple-300 transition"
          >
            Home
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-yellow-200 dark:hover:text-purple-300 transition"
          >
            Contact
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}
