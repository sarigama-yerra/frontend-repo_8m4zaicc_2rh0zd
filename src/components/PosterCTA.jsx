import { Download, Share2 } from 'lucide-react';

function PosterCTA() {
  const handleDownload = () => {
    const node = document.getElementById('poster-root');
    if (!node) return;
    // Simple print-to-PDF as a built-in way to "save" the poster without new deps
    window.print();
  };

  return (
    <section className="px-6 pb-20">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-xl font-semibold">Save your poster</h3>
          <p className="text-blue-200/80 text-sm">Use your browser’s print dialog to export as PDF or image.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleDownload} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 transition">
            <Download className="h-4 w-4" /> Download
          </button>
          <button onClick={() => navigator.share && navigator.share({ title: 'Black Hole Poster' }).catch(() => {})} className="inline-flex items-center gap-2 rounded-lg bg-slate-800 text-white px-4 py-2 border border-slate-700 hover:border-blue-400/40 transition">
            <Share2 className="h-4 w-4" /> Share
          </button>
        </div>
      </div>
    </section>
  );
}

export default PosterCTA;
