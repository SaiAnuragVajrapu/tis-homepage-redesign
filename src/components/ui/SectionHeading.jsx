import Reveal from '../animation/Reveal'

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-muted">{text}</p>
        </Reveal>
      )}
    </div>
  )
}