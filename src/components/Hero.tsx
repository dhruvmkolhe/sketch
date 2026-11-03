import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-end px-4 sm:px-6 md:px-10 pb-12 sm:pb-16 pt-36 sm:pt-40 overflow-x-hidden">
      {/* Top meta row */}
      <div className="absolute top-24 sm:top-28 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 flex items-start justify-between mono-md" style={{ color: '#525252' }}>
        <div className="max-w-[160px] sm:max-w-[220px] fade-up" style={{ animationDelay: '0.1s' }}>
          <div>(Independent)</div>
          <div>Design &amp; Direction</div>
        </div>
        <div className="text-right fade-up" style={{ animationDelay: '0.2s' }}>
          <div>Est. 2016</div>
          <div>51.22°N — 4.40°E</div>
        </div>
      </div>

      {/* Headline */}
      <h1 className="hero-headline">
        <span className="block">
          <Reveal text="Form" baseDelay={0.0} />
          <span className="mono-md align-top ml-2 sm:ml-4" style={{ fontSize: 14, color: '#525252' }}>
            <span className="reveal-mask"><span style={{ animationDelay: '0.4s' }}>&#8212;001</span></span>
          </span>
        </span>
        <span className="block" style={{ fontStyle: 'italic', fontWeight: 300 }}>
          <Reveal text="follows" baseDelay={0.25} />
        </span>
        <span className="block">
          <Reveal text="feeling." baseDelay={0.55} />
        </span>
      </h1>

      {/* Sub-headline */}
      <div className="mt-8 sm:mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 md:gap-10">
        <p className="max-w-xl text-[17px] sm:text-[20px] md:text-[24px] leading-[1.3] fade-up" style={{ color: '#525252', animationDelay: '1.1s', letterSpacing: '-0.02em' }}>
          A quietly rigorous studio building brand systems, print objects and interfaces for people who care about the small decisions.
        </p>
        <div className="flex items-center gap-6 mono-md fade-up" style={{ color: '#525252', animationDelay: '1.25s' }}>
          <a href="#work" className="ulink" style={{ color: '#000' }}>Index of Work ↓</a>
          <span>026 Projects</span>
        </div>
      </div>

      {/* Decorative small cross */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 md:right-10 mono-md fade-up" style={{ color: '#525252', animationDelay: '1.4s' }}>
        Scroll — Scroll — Scroll
      </div>
    </section>
  );
}
