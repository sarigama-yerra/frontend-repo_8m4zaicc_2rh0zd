import Spline from '@splinetool/react-spline';

function HeroBlackHole() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ns1MlpZQDFS29uiL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 85%)'
      }} />

      {/* Headline */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="text-xs tracking-[0.4em] uppercase text-blue-300/70 mb-3">Cosmic Phenomena Series</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
          Into the Black Hole
        </h1>
        <p className="max-w-2xl mt-4 text-sm md:text-base text-blue-100/90">
          A singularity wrapped in an event horizon, bending space, time, and light into a cosmic masterpiece.
        </p>
      </div>
    </section>
  );
}

export default HeroBlackHole;
