import { Plus } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-6 md:px-10 py-5 sm:py-6 flex items-center justify-between"
        style={{ mixBlendMode: 'difference', color: '#fff' }}
      >
        <a href="#top" className="flex items-end gap-2 leading-none" aria-label="Studio home">
          <span style={{ fontWeight: 700, fontSize: 24, letterSpacing: '-0.06em' }}>sd</span>
          <span className="mono hidden md:inline-block pb-[3px]" style={{ opacity: 0.7 }}>
            / studio dieter — index 026
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 mono">
          <a href="#work" className="ulink">Work</a>
          <a href="#about" className="ulink">About</a>
          <a href="#journal" className="ulink">Journal</a>
          <a href="#contact" className="ulink">Contact</a>
        </nav>

        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          className={`flex items-center gap-2 sm:gap-3 mono min-h-[44px] min-w-[44px] justify-end ${open ? 'menu-open' : ''}`}
        >
          <span className="hidden sm:inline">{open ? 'Close' : 'Menu'}</span>
          <span className="menu-rot inline-flex">
            <Plus size={20} strokeWidth={1.25} />
          </span>
        </button>
      </header>

      {/* Fullscreen Menu Panel */}
      <div
        className={`fixed inset-0 z-[900] menu-panel ${open ? 'open' : ''} overflow-y-auto`}
        style={{ background: '#000', color: '#fff' }}
      >
        <div className="min-h-full flex flex-col justify-between px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 pb-8 sm:pb-10">
          <ul className="flex flex-col gap-1 sm:gap-2 md:gap-4">
            {['Work', 'About', 'Journal', 'Contact', 'Index'].map((item, i) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="display-xl block"
                  style={{
                    fontSize: 'clamp(36px, 9vw, 140px)',
                  }}
                >
                  <span className="mono-md align-top mr-3 sm:mr-4" style={{ fontSize: 12, opacity: 0.4 }}>0{i + 1}</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mono-md" style={{ color: '#a3a3a3' }}>
            <div>
              <div style={{ color: '#737373' }}>Studio</div>
              <div style={{ color: '#fff', marginTop: 8 }}>Antwerp — Lisbon</div>
            </div>
            <div>
              <div style={{ color: '#737373' }}>Email</div>
              <div style={{ color: '#fff', marginTop: 8 }}>hello@sd.studio</div>
            </div>
            <div>
              <div style={{ color: '#737373' }}>Index</div>
              <div style={{ color: '#fff', marginTop: 8 }}>MMXXVI</div>
            </div>
            <div>
              <div style={{ color: '#737373' }}>Local</div>
              <div style={{ color: '#fff', marginTop: 8 }}>Available Q1 2027</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
