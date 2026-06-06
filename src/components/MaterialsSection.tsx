const materials = [
  { name: 'Алюминиевые сплавы', detail: 'Д16Т, АМг6, В95 — высокоскоростная без налипания' },
  { name: 'Технические пластики', detail: 'ПОМ (полиацеталь), капролон, фторопласт' },
  { name: 'Конструкционные стали', detail: 'Широкий диапазон марок, точное соблюдение допусков' },
  { name: 'Нержавеющие стали', detail: 'Высокоточные детали, контроль деформаций' },
  { name: 'Титан', detail: 'Аэрокосмическая и медицинская тематика' },
  { name: 'Бронза и латунь', detail: 'Токарная и фрезерная обработка цветных сплавов' },
]

export default function MaterialsSection() {
  return (
    <section id="материалы" className="bg-background py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Материалы</p>
          <h2 className="text-foreground text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            С чем работаю
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Знаю специфику, температурные режимы и особенности стружкообразования для каждого материала.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {materials.map((m, i) => (
            <div key={i} className="bg-hero-bg p-6 group hover:bg-nav-button transition-colors duration-200">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2">{m.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
