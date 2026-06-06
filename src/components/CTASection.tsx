export default function CTASection() {
  return (
    <section id="контакт" className="bg-background py-20 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="border border-border rounded-sm p-10 md:p-16 text-center relative overflow-hidden">
          {/* Subtle green glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, hsl(119 99% 46% / 0.07), transparent)' }}
          />

          <p className="relative text-primary text-xs uppercase tracking-widest font-semibold mb-4">Коммерческие условия</p>
          <h2 className="relative text-foreground text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Работаю удалённо.<br />Зарегистрирован как ИП.
          </h2>
          <p className="relative text-muted-foreground max-w-lg mx-auto mb-2 leading-relaxed">
            Официальное сотрудничество по договору с оплатой на расчётный счёт.
            Закрывающие документы, постоянный контакт, прозрачный процесс.
          </p>
          <p className="relative text-muted-foreground/60 text-sm max-w-md mx-auto mb-10">
            Фрезерная обработка, токарная обработка, написание и отладка УП,
            настройка постпроцессоров — любые задачи по ЧПУ.
          </p>

          <div className="relative flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:9254652@bk.ru"
              className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold rounded-sm hover:brightness-110 transition-all active:scale-[0.97]"
            >
              Написать на почту
            </a>
            <a
              href="tel:+79119254652"
              className="bg-white text-background px-8 py-4 text-sm font-bold rounded-sm hover:brightness-90 transition-all active:scale-[0.97]"
            >
              +7 911 925-46-52
            </a>
          </div>

          <p className="relative text-muted-foreground/40 text-xs mt-8">
            Обычно отвечаю в течение нескольких часов
          </p>
        </div>
      </div>
    </section>
  )
}
