import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Opslagopties", path: "/opslagopties" },
    { name: "Prijzen", path: "/prijzen" },
    { name: "Beveiliging", path: "/beveiliging" },
    { name: "Locatie", path: "/locatie" },
    { name: "Over MaxLock", path: "/over-maxlock" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-blue-700">
          MaxLock
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                isActive(link.path)
                  ? "text-blue-700 font-semibold border-b-2 border-blue-600 pb-1"
                  : "text-slate-600 hover:text-blue-600 transition-colors"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/contact"
            className="hidden lg:block text-slate-600 font-medium px-4 py-2 hover:bg-slate-50 transition-all rounded-xl"
          >
            Contact
          </Link>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-primary/20 scale-95 active:scale-90 transition-transform">
            Bekijk beschikbaarheid
          </button>
        </div>
      </div>
    </nav>
  );
}
