export default function StorageOptions() {
  const options = [
    {
      title: "Opslagbox (5-30m²)",
      description: "Ideaal voor kleinere persoonlijke bezittingen, meubels van een appartement of seizoensgebonden items.",
      price: "Vanaf €39/md",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4nwaFfKPIO0rXZpSDQwr2bZ2L-j0D8OoOncWYHkpO842S8_4B7qBjYl9qaAVNfQgdR3mWapC_Ela8yc7KA9MuuZDPPa7hqEtT1kBpxRpDQlEohUDrEQtrhgExb1upUAzK0vxCKCx-VjGd17EFst1hy49BOTsV6zL73kJkd__OazcSqjpscbq_QaPlf4WRvkv6fAG00OvAS832esNys_aq3Xu6NnLEicpY0cmvHAyJf04ilmBFfOwI6riagOCUCXdBO9OCkqQBqSM",
      badge: "Populair",
      badgeColor: "bg-tertiary"
    },
    {
      title: "10ft Container",
      description: "Perfect voor compacte zakelijke voorraad of de volledige inboedel van een kleine woning.",
      price: "Vanaf €75/md",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7uR2kGu_2rdfQwP3RQuy696xTipO16C-0y7geCoqxtBT4NZ6yqCa_xcvbIsfMymr_c91OqwaReHnDECozmCoYJBIXL5c-S4U34MuL88j3FrtWk_WR8ozHnvR0PgdcxLwhwT6NpkGojQu17kVnIc1zy8_TFIXlMcyE-LPLxCuY8cKQEAX0CGyDmT7dml3X1d5FAHWjxVS1A4KCaxyDmt7UvzYO-88AdON55gOsfLscCQWM8m2s7F37xYGoG4nDKl_NZbB8T_zgupY"
    },
    {
      title: "20ft Container",
      description: "Onze standaard grote unit. Geschikt voor grote verhuizingen of bulkopslag voor bedrijven.",
      price: "Vanaf €120/md",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGAMSYT_uFABD6JMhv77T31-t__GxHoQX9yTKvP2ZoZs13JhSHGkyJz_3yAI5sQA4Eb1WWz_-758L5oQ66hVtAL-qnbWaDO274E8ieL8IQUpz-Mhb7iFCnme8XNlcQ2DDdUtjakU-2AwkDLDuWkPz8KlTT7FrQrrtAtcCuB4e6GcWbWhVSCxWR0eXO9JRBcfzbZnXMyndFz3V6OZEQhnoDQ5qVM09Ig0n6grS1JNaHiYJioh5NM3F_T4VvEnzqWWm-dJ3V2n2DeGo"
    },
    {
      title: "Magazijnruimte",
      description: "Maatwerk oplossingen voor grootschalige opslag of distributiebehoeften met eigen toegang.",
      price: "Prijs op aanvraag",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7WGSJLtBfRw_-lHM5I_xyXCdm38fn4tFlX_1kz5YDC9ScZv3uStbFL6UCs5nMb4du02hXLp4d2kgHgErQU1I2YiB1BQ5Aqw0ekB1j3W2hL7HcRVCcWoZd8AEFL2sxxRHUz5d3_csFeslXbbr6Kucbpg0tpVLQblV97PcqFuY8juwfE-PjfmvlgCPlmEL1O6_uhbmG8xnS_6bFUHjsF7xxbABB_dAhPvYspRpm3EW_xEHTZgHgVF19WzkFvpJVO2WLXoJRmYxwXMI",
      badge: "Maatwerk",
      badgeColor: "bg-primary"
    }
  ];

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase mb-6">
            Onze Faciliteiten
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
            Flexibele opslag voor <span className="text-primary">elke uitdaging.</span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Of u nu verhuist, uw archief wilt opschonen of extra ruimte nodig heeft voor uw bedrijfsvoorraad; MaxLock biedt veilige, klimaatgecontroleerde oplossingen op maat.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <div key={index} className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 border border-outline-variant/30">
              <div className="aspect-[4/3] overflow-hidden relative bg-surface-container-high">
                <img 
                  alt={option.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={option.image}
                  referrerPolicy="no-referrer"
                />
                {option.badge && (
                  <div className={`absolute top-4 right-4 ${option.badgeColor} text-on-tertiary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest`}>
                    {option.badge}
                  </div>
                )}
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-on-surface mb-2">{option.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow">{option.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                  <span className="text-primary font-bold">{option.price}</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
