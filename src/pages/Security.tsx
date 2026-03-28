export default function Security() {
  const pillars = [
    {
      title: "24/7 Camerabewaking",
      description: "Onze faciliteit is uitgerust met high-definition camera's die elke hoek dag en nacht in de gaten houden. Beelden worden veilig opgeslagen en direct gemonitord.",
      icon: "videocam"
    },
    {
      title: "Omheind & Verlicht",
      description: "Het gehele terrein is omheind met hoogwaardig hekwerk en wordt 's nachts volledig verlicht met bewegingsgevoelige LED-verlichting.",
      icon: "fence"
    },
    {
      title: "Eigen Sleutel & Code",
      description: "U bent de enige met toegang tot uw unit. Met uw persoonlijke toegangscode en unieke sleutel bent u verzekerd van maximale privacy.",
      icon: "key"
    },
    {
      title: "Inclusief Verzekering",
      description: "Bij MaxLock is uw inboedel standaard verzekerd. Wij bieden gemoedsrust door samen te werken met gerenommeerde verzekeraars.",
      icon: "verified_user"
    },
    {
      title: "Brandbeveiliging",
      description: "Geavanceerde rookmelders en brandblussystemen zijn door het hele gebouw geïnstalleerd om uw eigendommen te beschermen tegen brandschade.",
      icon: "fire_extinguisher"
    }
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase mb-6">Veiligheid Eerst</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              Uw eigendom, <br />
              <span className="text-primary">onze prioriteit.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              Bij MaxLock gaan we verder dan alleen een slot op de deur. We investeren continu in de nieuwste beveiligingstechnologieën om u de hoogste graad van bescherming te bieden.
            </p>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden aspect-video lg:aspect-square shadow-2xl shadow-primary/10">
            <img 
              className="w-full h-full object-cover" 
              alt="Security camera monitoring" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcb08XiQweWZ5Fu6YIur64G0UfSDGFZjxzl5M9pczlqkdnwGz_CSfJCSuX5C0j3bKiNwOKY9SDkWG0obcYfAA7POR7-9j1qr5Aija40ubj3-v8fiEDsmze4RqANPj10qo-DKlPRDegAYF_hqlbQzFYLQeDTZQFS2iyy2dk1K46_pbOjiQIX4zwPjJuSAvLeMtfsPtJk0zrsfq_JfpmKXuacE3jlo7gbrUdJL_NMEK7dQWSico4GFlGtLaUv24XFfdZ9axDGbJY9f0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Live Monitoring Actief</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-surface-container-low p-10 rounded-[2.5rem] hover:bg-surface-container-lowest hover:shadow-xl transition-all border border-outline-variant/30">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{pillar.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{pillar.description}</p>
            </div>
          ))}
          
          <div className="bg-primary p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-3xl font-extrabold mb-6">Vragen over onze beveiliging?</h3>
            <p className="text-blue-100 mb-8">Onze security experts staan klaar om al uw vragen te beantwoorden.</p>
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
              Neem contact op
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
