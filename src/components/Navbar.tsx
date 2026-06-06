const links = ['Компетенции', 'Стек', 'Материалы', 'Процесс', 'Контакт']

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5">
      <span className="text-foreground text-xl font-semibold tracking-tight">ЕВТУШЕНКО</span>

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
