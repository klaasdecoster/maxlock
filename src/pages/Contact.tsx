export default function Contact() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase mb-6">Contact</span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
            We horen graag <br />
            <span className="text-primary">van u.</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Heeft u een vraag over onze units, prijzen of beveiliging? Ons team staat 6 dagen per week voor u klaar.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-10 rounded-[3rem] shadow-xl shadow-primary/5 border border-outline-variant/30">
              <h3 className="text-2xl font-bold mb-8">Stuur ons een bericht</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">Naam</label>
                    <input 
                      type="text" 
                      placeholder="Uw volledige naam" 
                      className="w-full px-6 py-4 rounded-2xl bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant ml-1">E-mail</label>
                    <input 
                      type="email" 
                      placeholder="uw@email.nl" 
                      className="w-full px-6 py-4 rounded-2xl bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Onderwerp</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                    <option>Informatie over opslagunits</option>
                    <option>Prijsopgave op maat</option>
                    <option>Beveiliging & Toegang</option>
                    <option>Overig</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">Bericht</label>
                  <textarea 
                    rows={5} 
                    placeholder="Hoe kunnen we u helpen?" 
                    className="w-full px-6 py-4 rounded-2xl bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-primary text-on-primary rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Verstuur Bericht
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-primary-container p-10 rounded-[3rem] text-white shadow-xl shadow-primary/10">
              <h3 className="text-2xl font-bold mb-8">Direct contact</h3>
              <div className="space-y-8">
                <a href="tel:0201234567" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-3xl">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-100 uppercase tracking-widest">Bel ons</p>
                    <p className="text-xl font-bold">020 - 123 45 67</p>
                  </div>
                </a>
                <a href="https://wa.me/31201234567" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-3xl">chat</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-100 uppercase tracking-widest">WhatsApp</p>
                    <p className="text-xl font-bold">Stuur een bericht</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-surface-container-low p-10 rounded-[3rem] border border-outline-variant/30">
              <h3 className="text-2xl font-bold mb-6">Locatie</h3>
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 bg-surface-container-highest">
                 <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-50" 
                  alt="Map snippet" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyVnFkFUqYJDp2mQEYhxP_afV2Fr_s_ns-gFyxZHXfsDuY6ovD2BMtwm65xN5Ti2i0FLUNkPg9MEZCVHgcGwNfThujWjztzueHDVTV_XSwFaex24L23DrGjt7Lw_MZkkS-OIvwyKIiAFPhqzmFbIqxWk5uKLlPsc2qwVno3DEWfpRtnSAbNQK9IFDeQSPX1T__wUjFu1Vm-YJsdpSg7kfYcamK_zCyUcOVDp3pA0R8U2RU-JsZds9JFB88Esd6Anb77UtSe1yY1Sw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Industrieweg 12, 1234 AB Amsterdam<br />
                Nederland
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
