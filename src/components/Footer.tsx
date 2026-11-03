export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#0a0a0a', color: '#ffffff' }}>
      <div className="px-4 sm:px-6 md:px-10 pt-16 sm:pt-24 pb-8 sm:pb-10">
        {/* Big word */}
        <div
          className="display-xl mb-16 sm:mb-24 md:mb-32 overflow-hidden"
          style={{ fontSize: 'clamp(56px, 18vw, 320px)', lineHeight: 0.85 }}
        >
          sd<span style={{ color: '#525252', fontWeight: 300, fontStyle: 'italic' }}>&middot;</span>studio
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-6">
          <div className="md:col-span-6">
            <div className="mono-md mb-5 sm:mb-6" style={{ color: '#737373' }}>§ Available</div>
            <p className="text-[18px] sm:text-[22px] md:text-[28px] leading-[1.2] max-w-xl" style={{ letterSpacing: '-0.02em' }}>
              Taking on two commissions for Q1 2027 — identity systems, editorial, direction. Write a short note and we&#8217;ll reply within three working days.
            </p>
            <a
              href="mailto:hello@sd.studio"
              className="inline-flex items-center gap-3 mt-8 sm:mt-10 display-xl ulink"
              style={{ fontSize: 'clamp(22px, 4vw, 56px)' }}
            >
              hello@sd.studio ↗
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="mono-md mb-5 sm:mb-6" style={{ color: '#737373' }}>Socials</div>
            <ul className="space-y-3 mono-md">
              {['Instagram', 'Are.na', 'Vimeo', 'Readymag', 'LinkedIn'].map(x => (
                <li key={x}><a className="ulink" href="#">{x} ↗</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mono-md mb-5 sm:mb-6" style={{ color: '#737373' }}>Contact</div>
            <ul className="space-y-3 mono-md">
              <li><a className="ulink" href="#">New Work</a></li>
              <li><a className="ulink" href="#">Press</a></li>
              <li><a className="ulink" href="#">Internships</a></li>
              <li><a className="ulink" href="#">Newsletter</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mono-md mb-5 sm:mb-6" style={{ color: '#737373' }}>Studios</div>
            <address className="not-italic mono-md leading-6">
              Antwerp<br />
              Kloosterstraat 34<br />
              2000, BE<br />
              <br />
              Lisbon<br />
              R. do Alecrim 12<br />
              1200-013, PT
            </address>
          </div>
        </div>

        <div className="hair-w mt-14 sm:mt-20 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[14px]" style={{ color: '#a3a3a3' }}>
          <div>© 2016—2026 Studio Dieter. All rights, mostly reserved.</div>
          <div className="flex items-center gap-4 sm:gap-6 mono-md">
            <span>Set in Inter &amp; a kinder monospace</span>
            <span>Build 026.11</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
