export function Doctors() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold">Doctors</h2>
      <p className="text-gray-600 mt-2">Browse and manage doctors.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow transition">
            <div className="font-medium">Dr. Jane Doe #{i}</div>
            <div className="text-sm text-gray-500">Cardiologist</div>
            <button className="mt-4 px-4 py-2 bg-gray-900/5 rounded-md hover:bg-gray-900/10 transition">View Profile</button>
          </div>
        ))}
      </div>
    </section>
  )
}


