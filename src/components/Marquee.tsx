type Card = { src: string; title: string; tag: string; radius: string };

const cards: Card[] = [
  { src: '/img/p1.jpg', title: 'Mohn Atelier',   tag: 'Identity',   radius: 'rounded-tl-[100px]' },
  { src: '/img/p2.jpg', title: 'Oslo Concrete',  tag: 'Art Direction', radius: 'rounded-tr-[100px] rounded-bl-[40px]' },
  { src: '/img/p3.jpg', title: 'Objet No. 4',    tag: 'Packaging',  radius: 'rounded-[40px]' },
  { src: '/img/p4.jpg', title: 'Form &amp; Chair',   tag: 'Catalogue',  radius: 'rounded-tl-[100px] rounded-br-[40px]' },
  { src: '/img/p5.jpg', title: 'Issue 09',       tag: 'Print',      radius: 'rounded-tr-[100px]' },
  { src: '/img/p6.jpg', title: 'Rue Neuve',      tag: 'Campaign',   radius: 'rounded-bl-[100px] rounded-tr-[40px]' },
];

export default function Marquee() {
  const row = [...cards, ...cards];
  return (
    <section className="marquee-wrap overflow-hidden select-none py-6 sm:py-8 md:py-12">
      <div className="marquee-track gap-4 sm:gap-5 md:gap-7">
        {row.map((c, i) => (
          <figure key={i} className="gs-group shrink-0 w-[200px] sm:w-[260px] md:w-[320px]">
            <div className={`overflow-hidden ${c.radius}`} style={{ aspectRatio: '5 / 7', background: '#f1f1f1' }}>
              <img
                src={c.src}
                alt={c.title}
                className="gs-img w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between mono-md" style={{ color: '#525252' }}>
              <span style={{ color: '#000' }} dangerouslySetInnerHTML={{ __html: c.title }} />
              <span>{c.tag}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
