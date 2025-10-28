import { useState } from 'react'
import { useStore } from '../store.tsx'
import '../styles/Appointments.css'

export function Appointments() {
  const { doctors, patients, addAppointment } = useStore()
  const [date, setDate] = useState('')
  const [doctorId, setDoctorId] = useState('')
  const [patientId, setPatientId] = useState('')
  const [notes, setNotes] = useState('')

  return (
    <section className="page-appointments max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold">Book Appointment</h2>
      <p className="text-gray-600 mt-2">Select a doctor and time slot.</p>
      <form className="form mt-8 bg-white border rounded-lg p-6 space-y-4 shadow-sm" onSubmit={(e) => { e.preventDefault(); if (date && doctorId && patientId) addAppointment({ datetime: date, doctorId, patientId, notes }) }}>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Date & Time</label>
          <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Doctor</label>
          <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)} className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30">
            <option value="">Select doctor</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Patient</label>
          <select value={patientId} onChange={(e) => setPatientId(e.target.value)} className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30">
            <option value="">Select patient</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" rows={3} />
        </div>
        <button type="submit" className="px-4 py-2 bg-brand text-white rounded-md shadow hover:shadow-md transition">Confirm</button>
      </form>
    </section>
  )
}


