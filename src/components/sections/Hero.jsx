import { motion } from 'framer-motion'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'
import { hero, contact } from '../../data/siteData'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface px-6 pt-24"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand sm:text-sm">
            {hero.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">{hero.text}</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={contact.admissionUrl}>Apply Now</Button>
          <Button href="#contact" variant="outline">
            Enquire Now
          </Button>
        </Reveal>
      </div>
    </section>
  )
}