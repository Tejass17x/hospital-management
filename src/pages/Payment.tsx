import { useState } from 'react'
import '../styles/Payment.css'

type PaymentForm = {
  name: string
  email: string
  amount: number
}

export function Payment() {
  const [form, setForm] = useState<PaymentForm>({ name: '', email: '', amount: 100 })
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle')

  function handleChange<K extends keyof PaymentForm>(key: K, value: PaymentForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handlePay() {
    setStatus('processing')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
  }

  return (
    <section className="page-payment max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold">Payment</h2>
      <p className="text-gray-600 mt-2">Securely pay for your consultation or procedure.</p>
      <div className="pay-card mt-8 bg-white border rounded-lg p-6 space-y-4 shadow-sm">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Full name</label>
          <input className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" placeholder="Full name" value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" placeholder="Email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Amount ($)</label>
          <input type="number" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" value={form.amount} onChange={(e) => handleChange('amount', Number(e.target.value))} />
        </div>
        <button onClick={handlePay} disabled={status==='processing'} className="pay-button w-full px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-md disabled:opacity-60 shadow transition">
          {status === 'processing' ? 'Processing...' : 'Pay Now'}
        </button>
        {status === 'success' && <div className="text-green-600">Payment successful. Receipt sent to {form.email}.</div>}
      </div>
      <p className="text-sm text-gray-500 mt-4">Note: Integrate Stripe by creating a PaymentIntent on your backend and confirming with Stripe.js.</p>
    </section>
  )
}


