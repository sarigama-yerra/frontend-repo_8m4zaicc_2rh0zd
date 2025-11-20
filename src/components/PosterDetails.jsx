import { Star, Sparkles, Telescope } from 'lucide-react';

function DetailItem({ icon: Icon, title, description }) {
  return (
    <div className="group bg-slate-900/70 backdrop-blur-sm border border-slate-700/60 rounded-xl p-5 transition hover:border-blue-400/40 hover:bg-slate-900/80">
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
    <section className="relative z-10 -mt-8 md:-mt-12 pb-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <DetailItem
            icon={Sparkles}
            title="Relativistic Beaming"
            description="The disk’s near side appears brighter as light moving toward us is amplified by extreme velocities."
          />
          <DetailItem
            icon={Telescope}
            title="Photon Ring"
            description="A thin, bright ring traces paths of photons that orbit the hole before escaping toward the observer."
          />
          <DetailItem
            icon={Star}
            title="Gravitational Lensing"
            description="Background starlight is curved around the horizon, echoing across the disk with mirrored arcs."
          />
        </div>
      </div>
    </section>
  );
}

export default PosterDetails;
