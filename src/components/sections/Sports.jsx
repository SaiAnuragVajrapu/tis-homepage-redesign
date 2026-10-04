import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { sports } from '../../data/siteData'

export default function Sports() {
  return (
    <section id="sports" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Sports" title={sports.heading} text={sports.text} />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sports.list.map((name, index) => (
            <li key={name}>
              <Reveal delay={(index % 4) * 0.08}>
                <div className="rounded-2xl bg-surface p-6 text-center font-semibold ring-1 ring-muted/20 transition hover:-translate-y-1 hover:ring-accent">
                  {name}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}