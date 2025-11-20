import { Star, Sparkles, Telescope } from 'lucide-react';

function DetailItem({ icon: Icon, title, description }) {
  return (
    <div className="group bg-slate-900/60 border border-slate-700/60 rounded-xl p-5 transition hover:border-blue-400/40 hover:bg-slate-900/80">
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-1 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-400/20 p-2 ring-1 ring-inset ring-blue-400/30">
          <Icon className="h-5 w-5 text-blue-300" />
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-blue-200/80 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

function PosterDetails() {
  return (
    <section className="relative z-10 -mt-6 md:-mt-10 pb-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <DetailItem
            icon={Sparkles}
            title="Event Horizon Glow"
            description="A luminous halo of pixelated stardust hints at light’s final dance before the point of no return."
          />
          <DetailItem
            icon={Telescope}
            title="Singularity Core"
            description="A perfectly dark center symbolizes infinite density and the heart of gravitational mystery."
          />
          <DetailItem
            icon={Star}
            title="Cosmic Drift"
            description="Nebulous particles spiral inward, forming a hypnotic flow across the poster."
          />
        </div>
      </div>
    </section>
  );
}

export default PosterDetails;
