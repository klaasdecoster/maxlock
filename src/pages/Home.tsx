export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-bold tracking-wider uppercase mb-6">
                Premium Self-Storage
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-8">
                Jouw spullen.<br />
                <span className="text-primary">Veilig achter slot.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                Ervaar de nieuwe standaard in opslag. Beveiligd met de modernste technologie, toegankelijk wanneer jij dat wilt. Physical storage, digital ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  Bekijk beschikbaarheid
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-surface-container-high text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-all">
                  Hoe het werkt
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-16 flex flex-wrap gap-8 items-center border-t border-outline-variant/20 pt-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>videocam</span>
                  </div>
                  <span className="font-bold text-sm text-on-surface">24/7 camera</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fence</span>
                  </div>
                  <span className="font-bold text-sm text-on-surface">hekwerk</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>key</span>
                  </div>
                  <span className="font-bold text-sm text-on-surface">eigen sleutel</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5] md:aspect-auto md:h-[600px]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Modern clean storage facility interior" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcb08XiQweWZ5Fu6YIur64G0UfSDGFZjxzl5M9pczlqkdnwGz_CSfJCSuX5C0j3bKiNwOKY9SDkWG0obcYfAA7POR7-9j1qr5Aija40ubj3-v8fiEDsmze4RqANPj10qo-DKlPRDegAYF_hqlbQzFYLQeDTZQFS2iyy2dk1K46_pbOjiQIX4zwPjJuSAvLeMtfsPtJk0zrsfq_JfpmKXuacE3jlo7gbrUdJL_NMEK7dQWSico4GFlGtLaUv24XFfdZ9axDGbJY9f0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                
                {/* Floating Security Card */}
                <div className="absolute bottom-8 -left-8 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[240px] hidden lg:block">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">verified_user</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status</div>
                      <div className="text-primary font-bold">100% Beveiligd</div>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[100%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed/30 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-tertiary-fixed/20 blur-[100px] rounded-full"></div>
      </section>

      {/* USP Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Waarom kiezen voor MaxLock?</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
              Wij combineren fysieke veiligheid met digitale flexibiliteit voor de ultieme opslagervaring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-surface-container-lowest p-10 rounded-[2rem] hover:translate-y-[-8px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Veilig</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Jouw eigendommen worden beschermd door de modernste beveiligingssystemen, waaronder geavanceerde biometrische toegang en 24/7 HD-bewaking.
              </p>
            </div>
            <div className="group bg-surface-container-lowest p-10 rounded-[2rem] hover:translate-y-[-8px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Flexibel</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Geen lange contracten. Huur per maand en schaal je opslagruimte direct op of af via onze intuïtieve digitale interface.
              </p>
            </div>
            <div className="group bg-surface-container-lowest p-10 rounded-[2rem] hover:translate-y-[-8px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Betaalbaar</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Transparante prijzen zonder verborgen kosten. Je betaalt alleen voor de ruimte die je echt gebruikt, met de beste prijs-kwaliteitverhouding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Wat onze klanten zeggen</h2>
              <p className="text-on-surface-variant text-lg">Honderden tevreden gebruikers vertrouwen dagelijks op onze beveiligde opslagoplossingen.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container p-8 rounded-[2rem] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-tertiary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-lg text-on-surface italic leading-relaxed mb-8">
                  "Geweldige service. De unit was brandschoon en de toegang via de app werkt vlekkeloos. Eindelijk een opslagbedrijf dat de digitale wereld begrijpt."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Mark de Vries" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Foj8eJv55odXw7J4U0VAXHBvdwwUWQ9f-hxpUcJX5JcJf7L3FSQEP3YCDBo8W0tcU-np7UUVTV1In5BmcmRpvwbNb9FHtzYd8--PdFuCpFLmLgXUBXa_b5HnErt0gA393NiQejel8NbTn2cygqHC4Rw25D9NnPK-cewFBhwRvrbEUANi5NcIHtjPkNrTHQpRPE6ivAO6y-57i64jyI7_gyqpc6thgDoUIl7pkUAJ_a0M2tJR_jF-ncneldeU4P8t2wwxfL00zhw"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold">Mark de Vries</div>
                  <div className="text-sm text-on-surface-variant">Ondernemer</div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-8 rounded-[2rem] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-tertiary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-lg text-on-surface italic leading-relaxed mb-8">
                  "Perfect voor mijn webshop voorraad. De locatie is uitstekend bereikbaar en ik voel me altijd veilig, ook als ik 's avonds laat spullen kom ophalen."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Sarah Janssen" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwsl5NIAeNk0y05ucQTeNVxhthB4eqOelTv_2kynVRn0JJpwQh8a6cR77c726kl6-k-sLcWhQmHWC7clio7k3HD9ADCFtb73RBAl6jC-A-o5Ll80jPGqjjC0sSQF5ojgYZtK00QOS_XmeIbmJwUBleVmG6mrTXiUGkM4mtiu_AVvvVrCw47sSaKHkzszogAX_admkZbAeuSdCA7QMBDnJdY_8CTTgxYxu_Pg8YGMdtOl63OihXK1Dw-HET0nEzJLCbse5HWdUhhK0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold">Sarah Janssen</div>
                  <div className="text-sm text-on-surface-variant">E-commerce Eigenaar</div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-highest p-8 rounded-[2rem] flex flex-col justify-between border-2 border-primary/10">
              <div>
                <div className="flex gap-1 text-tertiary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-lg text-on-surface italic leading-relaxed mb-8">
                  "Tijdens onze verhuizing was MaxLock een redder in nood. Flexibele opzegtermijn en zeer behulpzaam personeel. Een absolute aanrader!"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Pieter Bakker" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBebp1vldDUGLTsfO_sCYsL467NSxwCZDA1bqQlARi8G2Vsmg1p34_aOcXucHAVFrbEcUx40aEw8yXLmlG5FxsiFKHgwRG0xVJzeldCYpRd2vRMqdcoSZfHPsvyTQ7n1Ii1qTiTNAGPZxvvNvkKI7GfaY5DGQYIvgHALbHgMHDrpJy6QdAmqhks_GpW8UmPV8fxMh1sz7JGn9AQO3iDKYBP3CNvAM4GM8HC7JDf0UoYjkWun87BJecNRuBmM3Fwok599fFk6iBf9F4"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold">Pieter Bakker</div>
                  <div className="text-sm text-on-surface-variant">Particuliere huurder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-primary rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl shadow-primary/30">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  Klaar om ruimte te maken?
                </h2>
                <p className="text-blue-100 text-xl mb-10 max-w-lg">
                  Reserveer vandaag nog je unit en profiteer van de eerste maand met 50% korting. Geen kleine lettertjes, gewoon goede opslag.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
                    Start je reservering
                  </button>
                  <button className="bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-container/80 transition-all">
                    Bel ons: 0800-MAXLOCK
                  </button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-white/10 blur-[80px] rounded-full scale-150"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-white font-bold text-xl tracking-tight">Capaciteit Facility</div>
                    <div className="text-white bg-green-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase">Online</div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-blue-100 text-sm font-medium">
                        <span>Kleine units (3-6 m²)</span>
                        <span>85% vol</span>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-400 w-[85%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-blue-100 text-sm font-medium">
                        <span>Medium units (9-15 m²)</span>
                        <span>42% vol</span>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-[42%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-blue-100 text-sm font-medium">
                        <span>Grote units (20+ m²)</span>
                        <span>18% vol</span>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-[18%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 blur-[80px] rounded-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
