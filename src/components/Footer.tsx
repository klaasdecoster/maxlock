import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[2rem] mt-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <Link to="/" className="text-xl font-bold text-blue-700 mb-4 block">
            MaxLock
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            De slimste en veiligste manier om jouw spullen op te slaan. Wij combineren technologie met topservice.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">camera</span>
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-6 uppercase tracking-widest text-xs">Opslag</h4>
          <ul className="space-y-4">
            <li><Link to="/opslagopties" className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Units vergelijken</Link></li>
            <li><button className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Zakelijke opslag</button></li>
            <li><button className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Opslagcalculator</button></li>
            <li><Link to="/beveiliging" className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Veiligheid</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-6 uppercase tracking-widest text-xs">MaxLock</h4>
          <ul className="space-y-4">
            <li><Link to="/over-maxlock" className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Over ons</Link></li>
            <li><Link to="/locatie" className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Onze locaties</Link></li>
            <li><Link to="/contact" className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
            <li><button className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Helpcentrum</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-6 uppercase tracking-widest text-xs">Juridisch</h4>
          <ul className="space-y-4">
            <li><button className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Privacybeleid</button></li>
            <li><button className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Algemene Voorwaarden</button></li>
            <li><button className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Cookies</button></li>
            <li><button className="text-slate-500 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block">Sitemap</button></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          © 2024 MaxLock Secure Storage. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
