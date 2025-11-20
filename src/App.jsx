import HeroBlackHole from './components/HeroBlackHole';
import PosterDetails from './components/PosterDetails';
import PosterCTA from './components/PosterCTA';

function App() {
  return (
    <div id="poster-root" className="min-h-screen bg-black">
      {/* Starry subtle backdrop */}
      <div className="fixed inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.5) 20%, transparent 20%),
                          radial-gradient(1.5px 1.5px at 70% 60%, rgba(255,255,255,0.35) 20%, transparent 20%),
                          radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.2) 20%, transparent 20%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }} />

      {/* Content */}
      <HeroBlackHole />
      <PosterDetails />
      <PosterCTA />

      {/* Footer signature */}
      <footer className="px-6 pb-10 text-center text-xs text-blue-300/60">
        Designed for print and screen • A study of gravitational beauty
      </footer>
    </div>
  );
}

export default App;
