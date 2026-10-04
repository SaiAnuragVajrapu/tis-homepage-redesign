import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { rankings } from '../../data/siteData'

export default function Rankings() {
  return (
    <section id="rankings" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Rankings" title="Recognised across India" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((item, index) => (
            <Reveal key={item.text} delay={index * 0.1}>
              <article className="h-full rounded-2xl bg-bg p-6 ring-1 ring-muted/20">
                <p className="text-5xl font-bold text-accent">{item.rank}</p>
                <h3 className="mt-2 font-semibold">{item.place}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}