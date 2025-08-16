import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'

export const metadata = {
  title: '✨ Blog Website',
  description: 'A beautiful and responsive blog built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 
                      dark:from-gray-900 dark:via-gray-800 dark:to-black 
                      text-black dark:text-white transition-colors duration-500 ease-in-out">

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navbar with shadow */}
          <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm">
            <Navbar />
          </header>

          {/* Main content area */}
          <main className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="mt-10 py-6 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
            © {new Date().getFullYear()} Blog Website. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
