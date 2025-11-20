import HeroBlackHole from './components/HeroBlackHole';
import PosterDetails from './components/PosterDetails';
import PosterCTA from './components/PosterCTA';

function App() {
  return (
    <div id="poster-root" className="min-h-screen bg-black">
      {/* Starfield backdrop with depth */}
      <div className="fixed inset-0 opacity-40 pointer-events-none twinkle" style={{
        backgroundImage: `radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.55) 50%, transparent 51%),
                          radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.4) 50%, transparent 51%),
                          radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.25) 50%, transparent 51%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }} />

      {/* Content */}
      <HeroBlackHole />
      <PosterDetails />
      <PosterCTA />

      {/* Footer signature */}
      <footer className="px-6 pb-10 text-center text-xs text-blue-300/60">
        Designed for print and screen • A study of relativistic light
      </footer>
    </div>
  );
}

export default App;
