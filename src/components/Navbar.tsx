const links = ['Компетенции', 'Стек', 'Материалы', 'Процесс', 'Контакт']

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5">
      <div className="flex items-center gap-3">
        <img
          src="/cnc/ae-logo.png"
          alt="AE"
          style={{ height: 32, width: 55, objectFit: 'contain', mixBlendMode: 'screen', display: 'block', flexShrink: 0 }}
        />
        <div>
          <div className="text-foreground text-sm font-semibold tracking-widest uppercase leading-tight">Алексей Евтушенко</div>
          <div className="text-foreground/30 text-[9px] tracking-[0.2em] uppercase mt-0.5">Инженер-программист ЧПУ</div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {links.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {link}
          </a>
        ))}
      </div>

      <a
        href="#контакт"
        className="hidden md:inline-flex items-center rounded-lg bg-nav-button text-foreground hover:bg-nav-button/80 active:scale-[0.97] transition-all text-xs tracking-widest uppercase px-6 py-3 font-medium"
      >
        Обсудить задачу
      </a>
    </nav>
  )
}
