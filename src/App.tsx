import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Statement from './components/Statement';
import ProjectGrid from './components/ProjectGrid';
import Journal from './components/Journal';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <ProjectGrid />
        <Journal />
      </main>
      <Footer />
    </div>
  );
}
