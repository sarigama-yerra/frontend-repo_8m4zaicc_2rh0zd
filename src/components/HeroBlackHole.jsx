import Spline from '@splinetool/react-spline';

function HeroBlackHole() {
  return (
    <section className="relative h-[78vh] md:h-[86vh] w-full overflow-hidden">
      {/* Background stars with parallax layers for realism */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 twinkle" style={{
          backgroundImage: `radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.7) 40%, transparent 41%),
                            radial-gradient(1.2px 1.2px at 70% 60%, rgba(255,255,255,0.5) 40%, transparent 41%),
                            radial-gradient(0.8px 0.8px at 35% 80%, rgba(255,255,255,0.35) 40%, transparent 41%)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }} />
        <div className="absolute inset-0 opacity-20 spin-slower" style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(59,130,246,0.08), transparent 50%)'
        }} />
      </div>

      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ns1MlpZQDFS29uiL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Accretion disk glow and gravitational lensing-inspired overlays */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 52%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.12) 25%, rgba(0,0,0,0) 45%)'
      }} />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 38%, rgba(0,0,0,0.7) 85%)'
      }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

      {/* Soft film grain for realism */}
      <div className="grain-overlay" />

      {/* Headline */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end md:justify-center text-center px-6 pb-10 md:pb-0">
        <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-blue-200/70 mb-3">Cosmic Phenomena Series</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]">
          Into the Black Hole
        </h1>
        <p className="max-w-2xl mt-4 text-sm md:text-base text-blue-100/90">
          Accretion light warps around an invisible horizon—space, time, and photons pulled into a silent spiral.
        </p>
      </div>

      {/* Subtle foreground dust motes drifting for depth */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[130vmin] w-[130vmin] rounded-full ring-1 ring-blue-200/5 blur-3xl spin-slow" />
      </div>
    </section>
  );
}

export default HeroBlackHole;
