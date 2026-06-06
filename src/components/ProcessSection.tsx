const steps = [
  {
    n: '01',
    title: 'Анализ ТЗ',
    desc: 'Изучение чертежей (ЕСКД) или 3D-моделей заказчика, согласование допусков и шероховатости поверхностей.',
  },
  {
    n: '02',
    title: 'Моделирование и CAM',
    desc: 'Создание технологической сборки в Siemens NX, выбор оптимальной схемы базирования и закрепления детали.',
  },
  {
    n: '03',
    title: 'Верификация',
    desc: 'Обязательная симуляция обработки в NX для проверки на зарезы и коллизии с оснасткой и узлами станка.',
  },
  {
    n: '04',
    title: 'Постпроцессирование',
    desc: 'Вывод надёжного G-кода, адаптированного под конкретную кинематику вашего станка на Fanuc.',
  },
  {
    n: '05',
    title: 'Запуск',
    desc: 'Передача технологической карты и карты наладки с указанием вылетов инструмента. Запуск первой детали.',
  },
]

export default function ProcessSection() {
  return (
    <section id="процесс" className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Процесс</p>
          <h2 className="text-foreground text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            От задачи до детали
          </h2>
        </div>
        <div className="space-y-px bg-border">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-hero-bg flex gap-8 p-6 md:p-8 hover:bg-nav-button transition-colors duration-200 group"
            >
              <span className="text-primary font-bold text-4xl md:text-5xl leading-none tabular-nums opacity-40 group-hover:opacity-70 transition-opacity flex-shrink-0">
                {step.n}
              </span>
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
