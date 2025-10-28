import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Compassionate Healthcare, Modern Management</h1>
          <p className="mt-4 text-gray-600">Book appointments, manage patients, and streamline hospital operations with HM Care.</p>
          <div className="mt-8 flex gap-4">
            <Link to="/appointments" className="px-6 py-3 bg-brand text-white rounded-md shadow-sm hover:shadow transition">Book Appointment</Link>
            <Link to="/doctors" className="px-6 py-3 bg-gray-900/5 text-gray-900 rounded-md hover:bg-gray-900/10 transition">Find Doctors</Link>
          </div>
        </div>
        <div className="bg-white border rounded-xl p-6 shadow-md">
          <ul className="space-y-3 text-gray-700">
            <li>• Real-time appointments</li>
            <li>• Patient records management</li>
            <li>• Secure payments</li>
            <li>• Admin dashboard</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


