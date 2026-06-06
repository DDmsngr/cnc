const MILLING_IMG = 'https://images.unsplash.com/photo-fGaYOyRaijs?auto=format&fit=crop&w=800&q=80'
const LATHE_IMG   = 'https://images.unsplash.com/photo-DV_rG1mjDxs?auto=format&fit=crop&w=800&q=80'

const milling = [
  'УП для 3-, 4- и 5-осевых фрезерных центров в Siemens NX',
  'HSM и силовое фрезерование с оптимизацией режимов резания',
  'Матрицы, пресс-формы, штампы, детали аэрокосмической тематики',
  'Снижение машинного времени и износа инструмента',
]

const turning = [
  'Токарные центры с приводным инструментом (X, Z, Y, C)',
  'Синхронная обработка в двух шпинделях',
  'Сложные, многозаходные и нестандартные резьбы',
  'Тонкостенные детали — минимизация деформации при обработке',
]

function SkillCard({ title, img, items }: { title: string; img: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative h-56 md:h-64 overflow-hidden rounded-sm">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover brightness-75"
          onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/80 to-transparent" />
      </div>
      <div>
        <h3 className="text-foreground text-xl font-semibold mb-4">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary mt-0.5 flex-shrink-0">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="компетенции" className="bg-background py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Компетенции</p>
          <h2 className="text-foreground text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Фрезерная и токарная<br />обработка
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <SkillCard title="Фрезерная обработка" img={MILLING_IMG} items={milling} />
          <SkillCard title="Токарная и токарно-фрезерная" img={LATHE_IMG} items={turning} />
        </div>
      </div>
    </section>
  )
}
