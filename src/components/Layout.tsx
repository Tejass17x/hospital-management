import { Link, NavLink, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(180deg,#f8fafc,white)]">
      <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-brand-700">HM Care</Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'text-brand-700 font-medium' : 'text-gray-600 hover:text-brand-700'}>Home</NavLink>
            <NavLink to="/patients" className={({ isActive }) => isActive ? 'text-brand-700 font-medium' : 'text-gray-600 hover:text-brand-700'}>Patients</NavLink>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? 'text-brand-700 font-medium' : 'text-gray-600 hover:text-brand-700'}>Doctors</NavLink>
            <NavLink to="/appointments" className={({ isActive }) => isActive ? 'text-brand-700 font-medium' : 'text-gray-600 hover:text-brand-700'}>Appointments</NavLink>
            <NavLink to="/payment" className={({ isActive }) => isActive ? 'text-brand-700 font-medium' : 'text-gray-600 hover:text-brand-700'}>Payment</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-brand-700 font-medium' : 'text-gray-600 hover:text-brand-700'}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-brand-700 font-medium' : 'text-gray-600 hover:text-brand-700'}>Contact</NavLink>
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'text-brand-700 font-medium' : 'text-gray-600 hover:text-brand-700'}>Admin</NavLink>
          </nav>
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


