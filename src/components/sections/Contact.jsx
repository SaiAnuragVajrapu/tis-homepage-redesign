import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../animation/Reveal'
import { classOptions, stateOptions, contact } from '../../data/siteData'

const initialForm = { name: '', phone: '', className: '', state: '' }

const fieldStyle =
  'w-full rounded-xl border border-muted/30 bg-bg px-4 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/40'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact Us"
            title="Enquire Now"
            text="Share your details and our admissions team will get in touch."
          />
          <p className="text-muted">
            Admission Helpline:{' '}
            <a href={contact.phoneHref} className="font-semibold text-brand">
              {contact.phone}
            </a>
          </p>
        </div>

        <Reveal>
          {submitted ? (
            <p role="status" className="rounded-2xl bg-surface p-8 text-lg font-semibold">
              Thank you! We will contact you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-surface p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Parent name
                </label>
                <input id="name" name="name" required value={form.name} onChange={handleChange} className={fieldStyle} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                  Phone number
                </label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={fieldStyle} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="className" className="mb-1 block text-sm font-medium">
                    Class
                  </label>
                  <select id="className" name="className" required value={form.className} onChange={handleChange} className={fieldStyle}>
                    <option value="">Select Class</option>
                    {classOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="state" className="mb-1 block text-sm font-medium">
                    State
                  </label>
                  <select id="state" name="state" required value={form.state} onChange={handleChange} className={fieldStyle}>
                    <option value="">Select State</option>
                    {stateOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-[#0f1b3d] transition hover:brightness-110"
              >
                Enquire Now
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}