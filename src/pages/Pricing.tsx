import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | '6months' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      title: "Opslagbox",
      description: "Flexibele ruimte voor uw dagelijkse extra bezittingen.",
      basePrice: 49,
      size: "5m² - 30m² beschikbaar",
      features: ["Klimaatbeheersing", "24/7 Mobiele app toegang"],
      icon: "inventory_2",
      buttonText: "Bekijk Maten"
    },
    {
      title: "10ft Container",
      description: "Ideaal voor de inboedel van een kleine woning.",
      basePrice: 115,
      size: "15 m³ inhoud",
      features: ["Grondniveau drive-up", "Wind- & waterdicht"],
      icon: "token",
      buttonText: "Reserveer 10ft"
    },
    {
      title: "20ft Container",
      description: "Volledige opslag voor grote gezinswoningen.",
      basePrice: 185,
      size: "33 m³ inhoud",
      features: ["Directe Drive-up toegang", "Zware beveiliging sloten", "Sjouwhulp bij aankomst"],
      icon: "conveyor_belt",
      featured: true,
      buttonText: "Reserveer 20ft"
    },
    {
      title: "Magazijnruimte",
      description: "Op maat gemaakte oplossingen voor zakelijke voorraad.",
      basePrice: null,
      size: "50m² tot 500m²+",
      features: ["Laden en lossen zone", "Palletwagen beschikbaar", "Goederenontvangst service"],
      icon: "domain",
      buttonText: "Contact Expert"
    }
  ];

  const getPrice = (basePrice: number | null) => {
    if (basePrice === null) return "Op aanvraag";
    if (billingCycle === '6months') return `€${Math.round(basePrice * 0.95)}`;
    if (billingCycle === 'yearly') return `€${Math.round(basePrice * 0.90)}`;
    return `€${basePrice}`;
  };

  return (
    <main className="pt-32 pb-20 px-6">
      <header className="max-w-4xl mx-auto text-center mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase mb-6">Tarieven 2024</span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
          Eerlijke prijzen voor <br />
          <span className="text-primary">maximale beveiliging.</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">
          Van compacte opslagboxen tot grote magazijnruimtes. Altijd transparant, zonder kleine lettertjes.
        </p>
        <div className="inline-flex items-center gap-3 px-6 py-4 bg-surface-container-low rounded-2xl">
          <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          <span className="font-bold text-on-surface">Geen verborgen kosten</span>
          <div className="w-1 h-1 bg-outline-variant rounded-full mx-2"></div>
          <span className="text-on-surface-variant">Inclusief verzekering en 24/7 toegang</span>
        </div>
      </header>

      <div className="flex justify-center mb-16">
        <div className="bg-surface-container-high p-1.5 rounded-2xl flex gap-2">
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Maandelijks
          </button>
          <button 
            onClick={() => setBillingCycle('6months')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all relative ${billingCycle === '6months' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            6 Maanden
            <span className="absolute -top-3 -right-2 bg-tertiary text-white text-[10px] px-2 py-0.5 rounded-full">-5%</span>
          </button>
          <button 
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all relative ${billingCycle === 'yearly' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            12 Maanden
            <span className="absolute -top-3 -right-2 bg-primary-container text-white text-[10px] px-2 py-0.5 rounded-full">-10%</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`group rounded-[2rem] p-8 transition-all flex flex-col ${
              plan.featured
                ? "bg-primary-container shadow-2xl shadow-primary/20 relative"
                : "bg-surface-container-low hover:bg-surface-container-lowest hover:shadow-2xl hover:shadow-primary/5"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tertiary text-on-tertiary px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                Meest Gekozen
              </div>
            )}
            <div className={`mb-8 ${plan.featured ? "text-on-primary-container" : ""}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${plan.featured ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-white"}`}>
                <span className={`material-symbols-outlined text-3xl ${plan.featured ? "text-white" : "text-primary"}`}>{plan.icon}</span>
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : ""}`}>{plan.title}</h3>
              <p className={`text-sm ${plan.featured ? "text-primary-fixed/80" : "text-on-surface-variant"}`}>{plan.description}</p>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-black ${plan.featured ? "text-white" : "text-on-surface"}`}>{getPrice(plan.basePrice)}</span>
                {plan.basePrice !== null && <span className={`${plan.featured ? "text-primary-fixed" : "text-on-surface-variant"} font-medium`}>/mnd</span>}
              </div>
              <p className={`text-xs font-bold mt-2 ${plan.featured ? "text-primary-fixed" : "text-primary"}`}>{plan.size}</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className={`flex items-center gap-3 text-sm font-medium ${plan.featured ? "text-white" : ""}`}>
                  <span className={`material-symbols-outlined text-xl ${plan.featured ? "text-primary-fixed" : "text-primary"}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.featured ? "bg-white text-primary hover:shadow-xl" : "bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary"}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <section className="max-w-7xl mx-auto mt-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-square bg-surface-container-highest">
            <img 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" 
              alt="Storage facility hallway" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyVnFkFUqYJDp2mQEYhxP_afV2Fr_s_ns-gFyxZHXfsDuY6ovD2BMtwm65xN5Ti2i0FLUNkPg9MEZCVHgcGwNfThujWjztzueHDVTV_XSwFaex24L23DrGjt7Lw_MZkkS-OIvwyKIiAFPhqzmFbIqxWk5uKLlPsc2qwVno3DEWfpRtnSAbNQK9IFDeQSPX1T__wUjFu1Vm-YJsdpSg7kfYcamK_zCyUcOVDp3pA0R8U2RU-JsZds9JFB88Esd6Anb77UtSe1yY1Sw"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Smart Security Hub</p>
                  <p className="text-xs text-on-surface-variant">Live monitoring van alle units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-8">
          <h2 className="text-4xl font-extrabold tracking-tight">Waarom onze <span className="text-primary">prijs-kwaliteit</span> de beste is.</h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">analytics</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Flexibele Termijnen</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Verander op elk moment van unitgrootte zonder administratieve kosten. U betaalt alleen voor wat u gebruikt.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">security</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">All-inclusive Verzekering</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Uw spullen zijn bij ons standaard verzekerd tot €5.000. Geen extra maandelijkse toeslagen voor gemoedsrust.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">key_visualizer</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Digital Access Control</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Geen gedoe met sleutels. Open uw unit veilig via onze app, inbegrepen in elk pakket.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-32 p-12 bg-surface-container-lowest rounded-[3rem] text-center shadow-xl shadow-primary/5 border border-primary/5">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Nog niet zeker over de maat?</h2>
        <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">Onze experts helpen u graag bij het berekenen van de benodigde ruimte. Bel ons of kom langs voor een kop koffie.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-on-primary rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">Bereken mijn ruimte</button>
          <button className="px-8 py-4 bg-surface-container-high text-on-surface rounded-2xl font-bold hover:bg-surface-container-highest transition-all">Chat met een expert</button>
        </div>
      </section>
    </main>
  );
}
