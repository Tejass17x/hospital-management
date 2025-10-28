export function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
      <form className="mt-8 bg-white border rounded-lg p-6 space-y-4 shadow-sm">
        <input className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" placeholder="Your name" />
        <input className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" placeholder="Email" />
        <textarea className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand/30" placeholder="Message" rows={4} />
        <button type="button" className="px-4 py-2 bg-brand text-white rounded-md shadow hover:shadow-md transition">Send</button>
      </form>
    </section>
  )
}


