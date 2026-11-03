const posts = [
  { n: '026', date: '28·X·2026', title: 'On restraint as a design posture', read: '6 min' },
  { n: '025', date: '02·IX·2026', title: 'A quiet grammar for packaging', read: '4 min' },
  { n: '024', date: '14·VII·2026', title: 'Letterpress, in the age of the feed', read: '9 min' },
  { n: '023', date: '19·V·2026', title: 'Notes from the studio shelf', read: '3 min' },
];

export default function Journal() {
  return (
    <section id="journal" className="px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="flex items-end justify-between mb-8 sm:mb-10">
        <h3 className="display-xl" style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}>Journal</h3>
        <div className="mono-md" style={{ color: '#525252' }}>Est. notes — ongoing</div>
      </div>

      <ul>
        {posts.map((p) => (
          <li key={p.n}>
            {/* Mobile layout: stacked */}
            <a href="#" className="hair group flex flex-col sm:hidden py-5 gap-2">
              <div className="flex items-center justify-between">
                <span className="mono-md" style={{ color: '#525252' }}>{p.n}</span>
                <span className="mono-md" style={{ color: '#525252' }}>{p.read} ↗</span>
              </div>
              <span className="display-xl leading-tight" style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}>
                {p.title}
              </span>
            </a>
            {/* Tablet/Desktop layout: grid */}
            <a href="#" className="hair group hidden sm:grid grid-cols-12 items-center py-6 md:py-8 gap-4">
              <span className="mono-md col-span-1" style={{ color: '#525252' }}>{p.n}</span>
              <span className="mono-md hidden md:block col-span-2" style={{ color: '#525252' }}>{p.date}</span>
              <span className="col-span-8 md:col-span-7 display-xl" style={{ fontSize: 'clamp(22px, 2.6vw, 38px)' }}>
                {p.title}
              </span>
              <span className="mono-md col-span-3 md:col-span-2 text-right" style={{ color: '#525252' }}>
                {p.read} ↗
              </span>
            </a>
          </li>
        ))}
        <li className="hair" />
      </ul>
    </section>
  );
}
