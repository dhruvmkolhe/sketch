import { ArrowUpRight } from 'lucide-react';

type P = { src: string; title: string; category: string; year: string; client: string };

const projects: P[] = [
  { src: '/img/g1.jpg', title: 'A Quiet Room',    category: 'Spatial Identity', year: '2026', client: 'WK Gallery' },
  { src: '/img/g2.jpg', title: 'Terracotta Index',category: 'Monograph',        year: '2025', client: 'Zohari Ceramics' },
  { src: '/img/g3.jpg', title: 'Noir 07',         category: 'Fragrance Branding',year: '2025', client: 'Maison Vĩ' },
  { src: '/img/g4.jpg', title: 'In Low Light',    category: 'Film &amp; Direction', year: '2024', client: 'Ernest G.' },
  { src: '/img/g5.jpg', title: 'Paper Architectures', category: 'Art Direction',year: '2024', client: 'Lach Studio' },
  { src: '/img/g6.jpg', title: 'The Reading Room',category: 'Editorial System', year: '2023', client: 'Oleksandr Press' },
];

export default function ProjectGrid() {
  return (
    <section id="work" className="px-4 sm:px-6 md:px-10 pb-20 sm:pb-32">
      <div className="flex items-end justify-between mb-8 sm:mb-10 md:mb-16">
        <h3 className="display-xl" style={{ fontSize: 'clamp(36px, 7vw, 110px)' }}>
          Selected<br />
          <span style={{ fontStyle: 'italic', fontWeight: 300 }}>works, </span>
          <span className="mono-md align-middle ml-2" style={{ color: '#525252' }}>026&mdash;001</span>
        </h3>
        <a href="#index" className="mono-md ulink hidden md:inline-block">View full index →</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-14 sm:gap-y-20 md:gap-y-28">
        {projects.map((p, i) => (
          <a
            key={i}
            href="#"
            className={`gs-group block ${i % 2 === 1 ? 'md:mt-24' : ''}`}
          >
            <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: '4 / 3', background: '#f3f3f3' }}>
              <img src={p.src} alt={p.title} className="gs-img w-full h-full object-cover" loading="lazy" />
              <div className="tile-overlay absolute inset-0" style={{ background: 'rgba(0,0,0,0.1)' }} />
              <div className="tile-arrow absolute top-5 right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center" style={{ background: '#fff', color: '#000' }}>
                <ArrowUpRight size={20} strokeWidth={1.25} />
              </div>
              <div className="absolute top-5 left-5 mono-md" style={{ color: '#fff', mixBlendMode: 'difference' }}>
                /0{i + 1}
              </div>
            </div>
            <div className="hair mt-4 sm:mt-5 pt-4 flex items-end justify-between gap-4 sm:gap-6">
              <div>
                <div className="display-xl" style={{ fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: 1.05, letterSpacing: '-0.03em' }} dangerouslySetInnerHTML={{ __html: p.title }} />
                <div className="mono-md mt-2" style={{ color: '#525252' }}>{p.client}</div>
              </div>
              <div className="mono-md text-right shrink-0" style={{ color: '#525252' }}>
                <div dangerouslySetInnerHTML={{ __html: p.category }} />
                <div style={{ color: '#000' }}>{p.year}</div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile "View full index" link */}
      <div className="mt-8 md:hidden">
        <a href="#index" className="mono-md ulink">View full index →</a>
      </div>

      <div className="mt-16 sm:mt-24 md:mt-32 flex items-center justify-center">
        <a href="#index" data-cursor-hover className="inline-flex items-center gap-3 mono-md border border-black/15 rounded-full px-5 sm:px-6 py-3 sm:py-4">
          <span>Open the full archive</span>
          <ArrowUpRight size={16} strokeWidth={1.25} />
        </a>
      </div>
    </section>
  );
}
