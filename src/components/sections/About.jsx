import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { about } from '../../data/siteData'

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About TIS" title={about.heading} text={about.text} />
        <Reveal delay={0.3}>
          <p className="max-w-3xl border-l-4 border-accent pl-5 text-lg text-muted">
            {about.established}
          </p>
        </Reveal>
      </div>
    </section>
  )
}