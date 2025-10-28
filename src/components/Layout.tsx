import { Link, NavLink, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Layout() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(180deg,#f8fafc,white)]">
      <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-brand">HM Care</Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-600 hover:text-gray-900'}>Home</NavLink>
            <NavLink to="/patients" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-600 hover:text-gray-900'}>Patients</NavLink>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-600 hover:text-gray-900'}>Doctors</NavLink>
            <NavLink to="/appointments" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-600 hover:text-gray-900'}>Appointments</NavLink>
            <NavLink to="/payment" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-600 hover:text-gray-900'}>Payment</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-600 hover:text-gray-900'}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-600 hover:text-gray-900'}>Contact</NavLink>
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'text-brand font-medium' : 'text-gray-600 hover:text-gray-900'}>Admin</NavLink>
          </nav>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="ml-4 px-3 py-1.5 rounded border text-sm">
            {theme === 'light' ? 'Dark' : 'Light'} mode
          </button>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-white/80 backdrop-blur border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} HM Care. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


