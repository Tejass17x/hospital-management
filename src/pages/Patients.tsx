import { useState } from 'react'
import { useStore } from '../store.tsx'

export function Patients() {
  const { patients, addPatient } = useStore()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function handleSave() {
    if (!name || !email) return
    addPatient({ name, email, phone })
    setName(''); setEmail(''); setPhone('')
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold">Patients</h2>
      <p className="text-gray-600 mt-2">Manage patient profiles and records.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <form className="bg-white border rounded-lg p-6 space-y-4 shadow-sm" onSubmit={(e) => { e.preventDefault(); handleSave() }}>
          <h3 className="font-medium">New Patient Intake</h3>
          <input className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button type="submit" className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md shadow transition">Save</button>
        </form>
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="font-medium mb-2">Existing Patients</h3>
          {patients.length === 0 ? (
            <p className="text-gray-500">No patients yet.</p>
          ) : (
            <ul className="space-y-2">
              {patients.map((p) => (
                <li key={p.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.email} · {p.phone}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}


