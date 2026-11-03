import Reveal from './Reveal';

export default function Statement() {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-10 py-20 sm:py-32 md:py-48">
      <div className="max-w-5xl mx-auto">
        <div className="mono-md mb-8 sm:mb-10 flex items-center gap-4" style={{ color: '#525252' }}>
          <span className="inline-block w-6 h-px" style={{ background: '#525252' }} />
          <span>§ Manifesto</span>
        </div>
        <h2
          className="display-xl"
          style={{ fontSize: 'clamp(28px, 5.2vw, 76px)' }}
        >
          <Reveal
            text="We make patient, honest work &#8212; identities, publications and interfaces that will still read well a decade from now."
            delayStep={0.012}
          />
          <span className="block mt-5 sm:mt-6" style={{ color: '#737373', fontStyle: 'italic', fontWeight: 300 }}>
            <Reveal text="Nothing loud. Nothing accidental." baseDelay={0.9} delayStep={0.02} />
          </span>
        </h2>

        <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mono-md" style={{ color: '#525252' }}>
          {[
            ['Services', 'Identity\nArt Direction\nEditorial\nInterface'],
            ['Recognition', 'ADC·NY 2024\nTDC 69\nBrand New\nIt&#8217;s Nice That'],
            ['Clients', 'Aesop\nMoMA PS1\nKinfolk\nLoewe Foundation'],
            ['Index', '026 Projects\n11 Countries\n2 Studios\n1 Dog'],
          ].map(([h, body]) => (
            <div key={h}>
              <div style={{ color: '#000' }}>{h}</div>
              <div className="mt-3 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: body }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
