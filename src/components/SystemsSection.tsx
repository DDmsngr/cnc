const nx = [
  'Разработка технологических сборок в Siemens NX CAD/CAM',
  'Построение оптимальной траектории без зарезов и столкновений',
  'Обязательная симуляция обработки перед постпроцессированием',
  'Импорт и доработка любых 3D-моделей заказчика',
]

const fanuc = [
  'Глубокие знания Fanuc 0i, 31i и других серий',
  'Написание и правка G-кода вручную прямо со стойки',
  'Параметрическое программирование: Macro B',
  'Привязка инструмента, G54–G59, корректоры на износ (Wear)',
]

export default function SystemsSection() {
  return (
    <section id="стек" className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Инструменты</p>
          <h2 className="text-foreground text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Siemens NX и Fanuc
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">

          {/* NX */}
          <div className="border border-border rounded-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm bg-nav-button flex items-center justify-center">
                <span className="text-primary font-bold text-sm">NX</span>
              </div>
              <h3 className="text-foreground text-xl font-semibold">Siemens NX CAD/CAM</h3>
            </div>
            <ul className="space-y-3">
              {nx.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Fanuc */}
          <div className="border border-primary/30 rounded-sm p-8 bg-primary/[0.04]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">FANUC</span>
              </div>
              <h3 className="text-foreground text-xl font-semibold">Fanuc 0i / 31i</h3>
            </div>
            <ul className="space-y-3">
              {fanuc.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
