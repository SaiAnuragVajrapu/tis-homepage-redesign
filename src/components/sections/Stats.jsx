import Reveal from '../animation/Reveal'
import useCountUp from '../../hooks/useCountUp'
import { stats } from '../../data/siteData'

function StatItem({ value, suffix, label }) {
  const { ref, value: count } = useCountUp(value)

  return (
    <div className="rounded-2xl bg-bg p-6 text-center shadow-sm ring-1 ring-muted/20">
      <p ref={ref} className="text-4xl font-bold text-brand sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wide text-muted">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section aria-label="TIS at a glance" className="bg-surface px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.1}>
            <StatItem {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}