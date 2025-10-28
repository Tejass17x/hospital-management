import '../styles/Contact.css'

export function Contact() {
  return (
    <section className="page-contact max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form className="form mt-8 bg-white border rounded-lg p-6 space-y-4">
        <input className="w-full border rounded-md p-2" placeholder="Your name" />
        <input className="w-full border rounded-md p-2" placeholder="Email" />
        <textarea className="w-full border rounded-md p-2" placeholder="Message" rows={4} />
        <button type="button" className="px-4 py-2 bg-brand text-white rounded-md">Send</button>
      </form>
    </section>
  )
}


