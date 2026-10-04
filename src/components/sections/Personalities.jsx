import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { personalities } from '../../data/siteData'

export default function Personalities() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Influential Personalities On Campus"
          title="Sports persons and social influencers"
        />
      </div>
      <Reveal>
        <ul className="mx-auto flex max-w-6xl snap-x gap-4 overflow-x-auto pb-4">
          {personalities.map((person) => (
            <li
              key={person.name}
              className="w-72 shrink-0 snap-start rounded-2xl bg-surface p-6 ring-1 ring-muted/20"
            >
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-accent text-lg font-bold text-[#0f1b3d]">
                {person.name.charAt(0)}
              </div>
              <h3 className="font-semibold">{person.name}</h3>
              <p className="mt-2 text-sm text-muted">{person.role}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}