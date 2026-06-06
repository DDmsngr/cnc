import React, { Suspense } from 'react'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

const SCENE = 'https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">

      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <Spline scene={SCENE} className="w-full h-full" />
        </Suspense>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-16 pt-32">

        {/* Heading */}
        <h1
          className="opacity-0 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.02] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase"
          style={{ animationDelay: '0.2s' }}
        >
          ЕВТУШЕНКО<span className="text-primary"> ЧПУ</span>
        </h1>

        {/* Subheading */}
        <p
          className="opacity-0 animate-fade-up text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6"
          style={{ animationDelay: '0.4s' }}
        >
          Программирую станки с первого раза.
        </p>

        {/* Description */}
        <p
          className="opacity-0 animate-fade-up text-muted-foreground text-[clamp(0.875rem,1.5vw,1.125rem)] font-light mb-4 md:mb-8 leading-relaxed"
          style={{ animationDelay: '0.55s' }}
        >
          9 лет в металлообработке. Siemens NX CAD/CAM, 3–5-осевые фрезерные центры,
          токарно-фрезерная обработка. Fanuc&nbsp;0i/31i: ручной G-код и Macro&nbsp;B.
          Верификация, постпроцессирование, запуск первой детали.
        </p>

        {/* CTAs */}
        <div
          className="opacity-0 animate-fade-up flex flex-wrap gap-3 font-bold pointer-events-auto"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href="#контакт"
            className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97]"
          >
            Обсудить задачу
          </a>
          <a
            href="#компетенции"
            className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97]"
          >
            Компетенции
          </a>
        </div>

        {/* Trust line */}
        <p
          className="opacity-0 animate-fade-up text-muted-foreground/60 text-xs font-light mt-4 md:mt-6"
          style={{ animationDelay: '0.85s' }}
        >
          9 лет опыта · Удалённо · Работаю по договору как ИП
        </p>
      </div>
    </section>
  )
}
