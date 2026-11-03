import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX - 16;
      target.current.y = e.clientY - 16;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      const inter = t.closest('a, button, [data-cursor-hover]');
      if (inter && !hovering.current) {
        hovering.current = true;
        el.classList.add('is-hover');
      } else if (!inter && hovering.current) {
        hovering.current = false;
        el.classList.remove('is-hover');
      }
    };

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      const x = pos.current.x;
      const y = pos.current.y;
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
      if (!hovering.current) {
        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return <div ref={ref} className="custom-cursor" />;
}
