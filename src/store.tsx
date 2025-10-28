import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Patient = { id: string; name: string; email: string; phone: string }
export type Doctor = { id: string; name: string; specialty: string }
export type Appointment = { id: string; doctorId: string; patientId: string; datetime: string; notes?: string }

type Store = {
  patients: Patient[]
  doctors: Doctor[]
  appointments: Appointment[]
  addPatient: (p: Omit<Patient, 'id'>) => void
  addAppointment: (a: Omit<Appointment, 'id'>) => void
}

const StoreContext = createContext<Store | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [patients, setPatients] = useState<Patient[]>([])
  const [doctors] = useState<Doctor[]>([
    { id: 'd1', name: 'Dr. Jane Doe', specialty: 'Cardiology' },
    { id: 'd2', name: 'Dr. John Smith', specialty: 'Neurology' },
  ])
  const [appointments, setAppointments] = useState<Appointment[]>([])

  function addPatient(p: Omit<Patient, 'id'>) {
    setPatients((prev) => [...prev, { id: crypto.randomUUID(), ...p }])
  }

  function addAppointment(a: Omit<Appointment, 'id'>) {
    setAppointments((prev) => [...prev, { id: crypto.randomUUID(), ...a }])
  }

  return (
    <StoreContext.Provider value={{ patients, doctors, appointments, addPatient, addAppointment }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}


