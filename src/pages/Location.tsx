export default function Location() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6">Onze Locatie</span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
            Altijd dichtbij, <br />
            <span className="text-primary">makkelijk bereikbaar.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Onze faciliteit is strategisch gelegen nabij belangrijke uitvalswegen, zodat u uw spullen snel en efficiënt kunt bereiken.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="relative rounded-[3rem] overflow-hidden bg-surface-container-highest aspect-video shadow-2xl shadow-primary/5 border border-outline-variant/30">
              {/* Placeholder for Map */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                <div className="text-center">
                  <span className="material-symbols-outlined text-6xl text-primary mb-4">map</span>
                  <p className="text-slate-400 font-bold">Interactieve Kaart</p>
                  <p className="text-slate-400 text-sm">MaxLock Opslag - Industrieweg 12, 1234 AB Amsterdam</p>
                </div>
              </div>
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply" 
                alt="Map background" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyVnFkFUqYJDp2mQEYhxP_afV2Fr_s_ns-gFyxZHXfsDuY6ovD2BMtwm65xN5Ti2i0FLUNkPg9MEZCVHgcGwNfThujWjztzueHDVTV_XSwFaex24L23DrGjt7Lw_MZkkS-OIvwyKIiAFPhqzmFbIqxWk5uKLlPsc2qwVno3DEWfpRtnSAbNQK9IFDeQSPX1T__wUjFu1Vm-YJsdpSg7kfYcamK_zCyUcOVDp3pA0R8U2RU-JsZds9JFB88Esd6Anb77UtSe1yY1Sw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
                    <span className="font-bold text-sm">MaxLock Amsterdam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/30">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">contact_support</span>
                Contactgegevens
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <p className="font-bold text-sm">Adres</p>
                    <p className="text-on-surface-variant text-sm">Industrieweg 12<br />1234 AB Amsterdam</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <div>
                    <p className="font-bold text-sm">Telefoon</p>
                    <p className="text-on-surface-variant text-sm">020 - 123 45 67</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <div>
                    <p className="font-bold text-sm">E-mail</p>
                    <p className="text-on-surface-variant text-sm">info@maxlock.nl</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/30">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Openingstijden
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Maandag - Vrijdag</span>
                  <span className="font-bold">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Zaterdag</span>
                  <span className="font-bold">09:00 - 17:00</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Zondag</span>
                  <span className="font-bold">Gesloten</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-outline-variant/30">
                <p className="text-xs text-on-surface-variant italic">Huurders hebben 24/7 toegang met hun persoonlijke code.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-extrabold mb-12 text-center">Hoe bereikt u ons?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-surface-container rounded-3xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">directions_car</span>
              </div>
              <h4 className="font-bold mb-3">Met de auto</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Vanaf de A10 neemt u afslag S114. Volg de borden richting Industrieterrein West. Na 2km vindt u ons aan uw rechterhand.</p>
            </div>
            <div className="p-8 bg-surface-container rounded-3xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">directions_bus</span>
              </div>
              <h4 className="font-bold mb-3">Openbaar Vervoer</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Buslijn 42 stopt direct voor de deur (Halte Industrieweg). Vanaf Amsterdam Centraal is het ca. 15 minuten reizen.</p>
            </div>
            <div className="p-8 bg-surface-container rounded-3xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">pedal_bike</span>
              </div>
              <h4 className="font-bold mb-3">Met de fiets</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Wij beschikken over een ruime, overdekte en beveiligde fietsenstalling voor onze klanten.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
