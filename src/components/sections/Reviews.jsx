import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { reviews } from '../../data/siteData'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="From The Parents" title="What parents say about Tulas" />
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={(index % 2) * 0.1}>
              <figure className="h-full rounded-2xl bg-bg p-6 ring-1 ring-muted/20">
                <blockquote className="text-muted">{review.text}</blockquote>
                <figcaption className="mt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted">{review.relation}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}