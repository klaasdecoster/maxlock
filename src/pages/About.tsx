export default function About() {
  const timeline = [
    { year: "2018", title: "De Oprichting", description: "MaxLock werd opgericht met één doel: opslag veiliger en makkelijker maken door technologie." },
    { year: "2020", title: "Eerste Locatie", description: "Opening van onze flagship locatie in Amsterdam met 500+ units." },
    { year: "2022", title: "Digitale Revolutie", description: "Lancering van onze mobiele app voor 24/7 sleutelloze toegang." },
    { year: "2024", title: "Landelijke Groei", description: "Uitbreiding naar 5 nieuwe steden in Nederland." }
  ];

  const team = [
    { name: "Erik de Boer", role: "Oprichter & CEO", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBebp1vldDUGLTsfO_sCYsL467NSxwCZDA1bqQlARi8G2Vsmg1p34_aOcXucHAVFrbEcUx40aEw8yXLmlG5FxsiFKHgwRG0xVJzeldCYpRd2vRMqdcoSZfHPsvyTQ7n1Ii1qTiTNAGPZxvvNvkKI7GfaY5DGQYIvgHALbHgMHDrpJy6QdAmqhks_GpW8UmPV8fxMh1sz7JGn9AQO3iDKYBP3CNvAM4GM8HC7JDf0UoYjkWun87BJecNRuBmM3Fwok599fFk6iBf9F4" },
    { name: "Lisa van Dam", role: "Operationeel Manager", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwsl5NIAeNk0y05ucQTeNVxhthB4eqOelTv_2kynVRn0JJpwQh8a6cR77c726kl6-k-sLcWhQmHWC7clio7k3HD9ADCFtb73RBAl6jC-A-o5Ll80jPGqjjC0sSQF5ojgYZtK00QOS_XmeIbmJwUBleVmG6mrTXiUGkM4mtiu_AVvvVrCw47sSaKHkzszogAX_admkZbAeuSdCA7QMBDnJdY_8CTTgxYxu_Pg8YGMdtOl63OihXK1Dw-HET0nEzJLCbse5HWdUhhK0" },
    { name: "Thomas Smit", role: "Hoofd Beveiliging", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Foj8eJv55odXw7J4U0VAXHBvdwwUWQ9f-hxpUcJX5JcJf7L3FSQEP3YCDBo8W0tcU-np7UUVTV1In5BmcmRpvwbNb9FHtzYd8--PdFuCpFLmLgXUBXa_b5HnErt0gA393NiQejel8NbTn2cygqHC4Rw25D9NnPK-cewFBhwRvrbEUANi5NcIHtjPkNrTHQpRPE6ivAO6y-57i64jyI7_gyqpc6thgDoUIl7pkUAJ_a0M2tJR_jF-ncneldeU4P8t2wwxfL00zhw" }
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl shadow-primary/10">
            <img 
              className="w-full h-full object-cover" 
              alt="MaxLock team at work" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcb08XiQweWZ5Fu6YIur64G0UfSDGFZjxzl5M9pczlqkdnwGz_CSfJCSuX5C0j3bKiNwOKY9SDkWG0obcYfAA7POR7-9j1qr5Aija40ubj3-v8fiEDsmze4RqANPj10qo-DKlPRDegAYF_hqlbQzFYLQeDTZQFS2iyy2dk1K46_pbOjiQIX4zwPjJuSAvLeMtfsPtJk0zrsfq_JfpmKXuacE3jlo7gbrUdJL_NMEK7dQWSico4GFlGtLaUv24XFfdZ9axDGbJY9f0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6">Over MaxLock</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              Persoonlijke zorg, <br />
              <span className="text-primary">maximale veiligheid.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              MaxLock is ontstaan uit een frustratie over de traditionele opslagsector. Wij geloven dat opslag niet alleen een fysieke ruimte is, maar een verlengstuk van uw huis of bedrijf dat dezelfde zorg en veiligheid verdient.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-black text-primary mb-1">2.5k+</div>
                <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Tevreden Klanten</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary mb-1">15k+</div>
                <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">m² Opslagruimte</div>
              </div>
            </div>
          </div>
        </header>

        <section className="py-24 border-y border-outline-variant/30">
          <h2 className="text-3xl font-extrabold mb-16 text-center">Onze Reis</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-black text-primary/10 mb-4">{item.year}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-6 w-12 h-px bg-outline-variant/30"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Het Team achter MaxLock</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Gedreven professionals die elke dag klaarstaan om uw eigendommen te beschermen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <img 
                    className="w-full h-full object-cover" 
                    alt={member.name} 
                    src={member.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 bg-surface-container-low p-12 md:p-20 rounded-[3rem] text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Word onderdeel van onze community</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl mx-auto text-lg">We zijn altijd op zoek naar manieren om onze service te verbeteren. Heeft u suggesties of wilt u meer weten over onze visie?</p>
          <button className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all">
            Laten we praten
          </button>
        </section>
      </div>
    </main>
  );
}
