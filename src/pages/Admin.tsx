import '../styles/Admin.css'

export function Admin() {
  return (
    <section className="page-admin max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="stat bg-white border rounded-lg p-6">
          <div className="text-gray-500 text-sm">Total Patients</div>
          <div className="text-3xl font-semibold mt-2">128</div>
        </div>
        <div className="stat bg-white border rounded-lg p-6">
          <div className="text-gray-500 text-sm">Total Appointments</div>
          <div className="text-3xl font-semibold mt-2">64</div>
        </div>
        <div className="stat bg-white border rounded-lg p-6">
          <div className="text-gray-500 text-sm">Revenue</div>
          <div className="text-3xl font-semibold mt-2">$12,400</div>
        </div>
      </div>
    </section>
  )
}


