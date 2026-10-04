import { footer, contact } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-brand px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold">{footer.school}</h2>
          <address className="mt-3 text-sm not-italic opacity-80">{footer.address}</address>
        </div>
        <div className="text-sm opacity-90">
          <p>
            Admission Helpline: <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
          <p className="mt-2">Landline: {footer.landlines.join(', ')}</p>
          <p className="mt-2">
            <a href={`mailto:${footer.email}`}>{footer.email}</a>
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="opacity-90 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-6 text-xs opacity-70">
        © 2026 Tulas International School, Dehradun. Redesign by Vajrapu Sai Anurag.
      </p>
    </footer>
  )
}