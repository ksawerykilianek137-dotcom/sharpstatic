import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import {
  Zap,
  Shield,
  Cpu,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Check,
  Globe,
  Lock,
  BarChart3,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as any },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } as any },
};

function useScrollInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Usługi", href: "#services" },
    { label: "Cennik", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a08]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#f06d06] flex items-center justify-center glow-orange-sm">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-black text-xl tracking-tight text-white uppercase">
              EDGES<span className="text-[#f06d06]">CLAW</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold text-stone-400 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/"
              className="text-sm font-bold text-[#f06d06] hover:text-[#ff8c2a] transition-colors uppercase tracking-widest border border-[#f06d06]/30 px-2 py-1 rounded"
            >
              EN
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#f06d06] hover:bg-[#ff8c2a] text-white text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200 glow-orange-sm hover:glow-orange"
            >
              Skontaktuj się <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            className="md:hidden text-stone-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-[#0a0a08]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-stone-300 hover:text-white py-2 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/"
                onClick={() => setOpen(false)}
                className="text-sm font-bold text-[#f06d06] py-2 border-b border-white/5"
              >
                Switch to English (EN)
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#f06d06] hover:bg-[#ff8c2a] text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-all"
              >
                Skontaktuj się <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-radial-blue" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f06d06]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a08] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#f06d06]/10 border border-[#f06d06]/25 text-[#f06d06] text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            Strony React · Gwarancja 100/100 PageSpeed
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.0] mb-8 text-white"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Twoja strona{" "}
            <span className="text-gradient-orange">ładuje się</span>
            <br className="hidden sm:block" />
            za wolno.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            Budujemy strony React, które ładują się w mniej niż 1 sekundę.{" "}
            <span className="text-white font-semibold">
              Gwarantujemy 100/100 PageSpeed albo zwracamy pieniądze.
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-3 bg-[#f06d06] hover:bg-[#ff8c2a] text-white font-black text-base px-8 py-4 rounded-xl transition-all duration-300 glow-orange hover:scale-105 uppercase tracking-wide"
            >
              Zobacz Cennik
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-white/15 hover:border-[#f06d06]/40 text-stone-300 hover:text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:bg-[#f06d06]/5"
            >
              Bezpłatny Audyt
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16"
          >
            {[
              { value: "< 1s", label: "Czas ładowania" },
              { value: "300+", label: "Lokalizacji edge" },
              { value: "24h", label: "Czas odpowiedzi" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-xl bg-white/3 border border-white/6">
                <div className="text-2xl font-black text-[#f06d06] leading-none mb-1">{value}</div>
                <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-6 text-stone-400 text-sm"
          >
            {[
              { icon: CheckCircle2, label: "100/100 PageSpeed" },
              { icon: Shield, label: "Ochrona DDoS" },
              { icon: Zap, label: "Ładowanie w Ułamek Sekundy" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 font-medium">
                <Icon className="w-4 h-4 text-[#f06d06]" />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemStats() {
  const { ref, inView } = useScrollInView();

  const stats = [
    {
      icon: Clock,
      color: "text-red-400",
      bg: "bg-red-500/8",
      border: "border-red-500/20",
      headline: "50%",
      label: "użytkowników wychodzi, jeśli strona",
      emphasis: "ładuje się > 3 sekundy",
      sub: "Tracisz połowę ruchu, zanim w ogóle zobaczą Twoją ofertę.",
    },
    {
      icon: TrendingUp,
      color: "text-[#f06d06]",
      bg: "bg-[#f06d06]/8",
      border: "border-[#f06d06]/20",
      headline: "Czynnik #1",
      label: "Szybkość strony to",
      emphasis: "główny sygnał rankingowy Google",
      sub: "Wolne strony są pogrzebane. Szybkie strony są odnajdywane. Matematyka jest prosta.",
    },
    {
      icon: AlertTriangle,
      color: "text-amber-400",
      bg: "bg-amber-500/8",
      border: "border-amber-500/20",
      headline: "W Tym Momencie",
      label: "Twoja konkurencja",
      emphasis: "jest już szybsza",
      sub: "Każdy dzień bez szybkiej strony to uciekające zyski.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-[#f06d06] font-bold text-xs uppercase tracking-widest mb-4">
            Brutalna Prawda
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Twoja wolna strona internetowa{" "}
            <span className="text-gradient-orange">kosztuje Cię klientów</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((s) => (
            <motion.div
               key={s.headline}
               variants={fadeUp}
               className={`relative group rounded-2xl border ${s.border} bg-[#0f0f0d]/80 backdrop-blur-sm p-8 hover:bg-[#141410]/80 transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute inset-0 ${s.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${s.bg} border ${s.border} mb-6`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <div className={`text-5xl font-black ${s.color} mb-3 leading-none`}>{s.headline}</div>
                <p className="text-stone-300 font-semibold text-base mb-1">
                  {s.label} <span className="text-white font-black">{s.emphasis}</span>
                </p>
                <p className="text-stone-500 text-sm leading-relaxed mt-3">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const { ref, inView } = useScrollInView();

  const steps = [
    {
      num: "01",
      title: "Audyt",
      desc: "Analizujemy obecną stronę, hosting i źródła opóźnień. Dostajesz jasną listę problemów, priorytetów i rekomendacji.",
    },
    {
      num: "02",
      title: "Projekt",
      desc: "Budujemy strukturę i treść pod szybkość, SEO i konwersję. Układ jest tworzony pod Twój biznes, nie z gotowego szablonu.",
    },
    {
      num: "03",
      title: "Budowa",
      desc: "Piszemy lekką, nowoczesną stronę w React z naciskiem na Core Web Vitals. Każdy element jest sprawdzany pod wydajność mobilną.",
    },
    {
      num: "04",
      title: "Wdrożenie",
      desc: "Publikujemy na infrastrukturze edge, konfigurujemy domenę, bezpieczeństwo i monitoring. Gotowa strona od pierwszej wizyty.",
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-[#f06d06] font-bold text-xs uppercase tracking-widest mb-4">
            Proces
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Jak pracujemy
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#f06d06]/30 to-transparent z-10" />
              )}
              <div className="relative rounded-2xl border border-white/8 bg-[#0f0f0d]/60 p-7 hover:border-[#f06d06]/25 hover:bg-[#141410]/60 transition-all duration-300 h-full">
                <div className="text-5xl font-black text-[#f06d06]/20 mb-4 leading-none group-hover:text-[#f06d06]/35 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-lg font-black text-white mb-3 uppercase tracking-wide">{step.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  const { ref, inView } = useScrollInView();

  const tiers = [
    {
      name: "PODSTAWOWY",
      price: "1499 zł",
      period: "jednorazowo",
      desc: "Dla nowych lokalnych firm usługowych",
      features: [
        "Projekt One-Page",
        "Optymalizacja Mobile-First",
        "Czas ładowania < 1s",
        "SSL i Bezpieczeństwo W Cenie",
        "Konfiguracja Lokalnego SEO",
        "Hosting na Cloudflare Pages",
      ],
      featured: false,
    },
    {
      name: "PREMIUM",
      price: "1999 zł",
      period: "jednorazowo",
      desc: "Wybierany przez lokalne firmy usługowe",
      badge: "NAJPOPULARNIEJSZY",
      features: [
        "Multi-page lub Zaawansowany One-page",
        "Integracja Rezerwacji Online",
        "Gwarancja 100/100 PageSpeed",
        "Synchronizacja Profilu Firmy w Google",
        "Asystent AI Chatbot",
        "Priorytetowy Hosting Edge",
      ],
      featured: true,
    },
    {
      name: "ZARZĄDZANY",
      price: "99 zł",
      period: "miesięcznie",
      desc: "Dla firm, które chcą pełnej opieki",
      features: [
        "Zarządzany Hosting Edge",
        "Nielimitowane Aktualizacje Treści",
        "Ochrona DDoS Klasy Korporacyjnej",
        "Codzienne Kopie Zapasowe",
        "Wsparcie Techniczne 24/7",
        "Monitorowanie Wydajności",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUp} className="text-[#f06d06] font-bold text-xs uppercase tracking-widest mb-4">
            Cennik
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-none">
            Pakiety
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-stone-400 font-medium">
            Ultraszybkie strony internetowe dostosowane do Twojego rozwoju
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 ${
                tier.featured
                  ? "bg-[#0f0f0d]/60 border-[#f06d06] ring-2 ring-[#f06d06]/40 scale-105 z-10 glow-orange shadow-2xl"
                  : "bg-[#0a0a08]/60 border-white/6 hover:bg-[#0f0f0d]/60 hover:border-white/12"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#f06d06] text-white text-[0.7rem] font-black px-5 py-2 rounded-xl shadow-lg whitespace-nowrap tracking-wide leading-tight text-center">
                  <div>NAJ</div>
                  <div>POPULARNIEJSZY</div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase leading-tight">
                  {tier.name}
                </h3>
                <p className="text-stone-500 text-sm font-medium mb-6">{tier.desc}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-5xl font-black ${tier.featured ? "text-[#f06d06]" : "text-white"}`}>{tier.price}</span>
                </div>
                <p className="text-stone-500 font-bold text-sm uppercase tracking-wider">
                  {tier.period}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${tier.featured ? "text-[#f06d06]" : "text-[#f06d06]/70"}`} />
                    <span className="text-stone-300 text-sm md:text-base font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 font-black text-sm px-6 py-3.5 rounded-xl transition-all duration-200 uppercase tracking-wide ${
                  tier.featured
                    ? "bg-[#f06d06] hover:bg-[#ff8c2a] text-white glow-orange"
                    : "border border-white/12 hover:border-[#f06d06]/35 text-stone-300 hover:text-white hover:bg-[#f06d06]/5"
                }`}
              >
                Wybierz plan <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
           variants={fadeUp}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
           className="mt-24 max-w-4xl mx-auto space-y-12"
        >
          <div className="h-px bg-white/5 w-full" />
          
          <div className="flex flex-col gap-6 border-l-4 border-[#f06d06] pl-8">
            <h4 className="text-white text-xl font-black uppercase tracking-tight">
              <span className="text-[#f06d06]">Dlaczego EdgesClaw?</span> Nie używamy WordPressa.
            </h4>
            <p className="text-stone-400 text-lg leading-relaxed font-medium">
              Budujemy czysty, wysokowydajny kod, który jest niemożliwy do zhakowania i błyskawicznie szybki. Idealny dla polskich firm, które chcą zdominować lokalne wyszukiwania.
            </p>
          </div>

          <p className="text-stone-600 italic text-sm md:text-base">
            *Ceny są netto. W przypadku niestandardowych rozwiązań korporacyjnych, skontaktuj się z nami w celu wyceny.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TechFeatures() {
  const { ref, inView } = useScrollInView();

  const features = [
    {
      icon: Globe,
      title: "Hosting Cloudflare Edge",
      description:
        "Twoja strona działa w ponad 300 centrach danych na całym świecie. Odwiedzający są zawsze kierowani do najbliższego serwera — zapewniając błyskawiczny czas ładowania niezależnie od lokalizacji.",
      detail: "Ponad 300 węzłów globalnych",
      color: "text-[#f06d06]",
      bg: "bg-[#f06d06]/8",
      border: "border-[#f06d06]/20",
      glow: "group-hover:shadow-[0_0_40px_rgba(240,109,6,0.15)]",
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo DDoS",
      description:
        "Sprawdzona w boju ochrona DDoS Cloudflare absorbuje największe ataki w internecie. Twoja strona pozostaje online — bez względu na wszystko.",
      detail: "Zawsze włączona ochrona",
      color: "text-emerald-400",
      bg: "bg-emerald-500/8",
      border: "border-emerald-500/20",
      glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    },
    {
      icon: BarChart3,
      title: "Wydajność Zoptymalizowana przez AI",
      description:
        "Inteligentne dostarczanie zasobów, przewidywalne buforowanie i automatyczna optymalizacja obrazów zapewniają, że każdy odwiedzający ma najszybszy z możliwych dostępów.",
      detail: "Automatycznie optymalizowane zasoby",
      color: "text-violet-400",
      bg: "bg-violet-500/8",
      border: "border-violet-500/20",
      glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           ref={ref}
           variants={stagger}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
           className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-[#f06d06] font-bold text-xs uppercase tracking-widest mb-4">
            Nasza Technologia
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Zbudowane na najszybszej infrastrukturze{" "}
            <span className="text-gradient-orange">na świecie</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-stone-400 text-lg max-w-2xl mx-auto font-medium">
            Używamy tej samej technologii, która napędza Cloudflare, Vercel i najwydajniejsze strony internetowe na świecie.
          </motion.p>
        </motion.div>

        <motion.div
           variants={stagger}
           initial="hidden"
           animate={inView ? "visible" : "hidden"}
           className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
               key={f.title}
               variants={fadeUp}
               className={`group relative rounded-2xl border ${f.border} bg-[#0f0f0d]/60 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-[#141410]/60 ${f.glow} cursor-default`}
            >
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${f.bg} border ${f.border} mb-6`}>
                  <f.icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{f.title}</h3>
                <p className="text-stone-400 text-base leading-relaxed">{f.description}</p>
              </div>
              <div className={`inline-flex items-center gap-1.5 text-xs font-bold ${f.color} ${f.bg} border ${f.border} px-3 py-1.5 rounded-full uppercase tracking-wide`}>
                <CheckCircle2 className="w-3 h-3" />
                {f.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { ref, inView } = useScrollInView();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    businessName: "",
    websiteUrl: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language: "pl" }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Coś poszło nie tak. Spróbuj ponownie później lub skontaktuj się z nami bezpośrednio pod adresem ksawery@edgesclaw.com");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#141410]/80 border border-stone-700/50 hover:border-stone-600 focus:border-[#f06d06] focus:ring-2 focus:ring-[#f06d06]/20 text-white placeholder-stone-600 text-sm rounded-xl px-4 py-3.5 outline-none transition-all duration-200 font-medium";

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="absolute inset-0 bg-[#f06d06]/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
             ref={ref}
             variants={stagger}
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-[#f06d06] font-bold text-xs uppercase tracking-widest mb-4">
              Bezpłatna Konsultacja
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              Odbierz Swój Bezpłatny{" "}
              <span className="text-gradient-orange">Audyt Szybkości</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-400 text-lg leading-relaxed font-medium">
              Opowiedz nam o swoim biznesie, a my przeanalizujemy aktualną szybkość Twojej strony — całkowicie bezpłatnie i bez zobowiązań.
            </motion.p>
          </motion.div>

          <motion.div
             variants={fadeUp}
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             className="relative rounded-3xl border border-white/8 bg-[#0f0f0d]/90 backdrop-blur-sm p-8 md:p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                   key="success"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.4 }}
                   className="text-center py-10"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Zapytanie Otrzymane!</h3>
                  <p className="text-stone-400 text-base max-w-sm mx-auto leading-relaxed">
                    Przeanalizujemy Twoją stronę i wrócimy do Ciebie w ciągu 24 godzin z szczegółowym raportem o szybkości.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                   key="form"
                   onSubmit={handleSubmit}
                   initial={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-stone-300 mb-1.5">
                        Twoje Imię i Nazwisko <span className="text-[#f06d06]">*</span>
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jan Kowalski"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-300 mb-1.5">
                        Nazwa Firmy <span className="text-[#f06d06]">*</span>
                      </label>
                      <input
                        name="businessName"
                        required
                        value={form.businessName}
                        onChange={handleChange}
                        placeholder="Kowalski & Co."
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-300 mb-1.5">
                      Obecny Adres URL Strony{" "}
                      <span className="text-stone-600 font-normal">(opcjonalnie)</span>
                    </label>
                    <input
                      name="websiteUrl"
                      value={form.websiteUrl}
                      onChange={handleChange}
                      placeholder="https://twojastrona.pl"
                      type="url"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-stone-300 mb-1.5">
                      Adres E-mail <span className="text-[#f06d06]">*</span>
                    </label>
                    <input
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jan@twojastrona.pl"
                      type="email"
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex items-center justify-center gap-3 bg-[#f06d06] hover:bg-[#ff8c2a] disabled:opacity-70 disabled:cursor-not-allowed text-white font-black text-base px-8 py-4 rounded-xl transition-all duration-200 mt-2 glow-orange uppercase tracking-wide"
                  >
                    {loading ? (
                      <>
                        <motion.div
                           animate={{ rotate: 360 }}
                           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                           className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Wyślij Wiadomość
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-stone-600 pt-1 font-medium">
                    Żadnego spamu. Odpowiemy w ciągu 24 godzin.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070706]/90 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#f06d06] flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-black text-lg text-white tracking-tight uppercase">
              EDGES<span className="text-[#f06d06]">CLAW</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-stone-500 text-sm">
            <Shield className="w-4 h-4 text-[#f06d06]/70" />
            <span>Napędzane przez</span>
            <span className="font-bold text-[#f06d06]">Cloudflare Workers</span>
          </div>

          <p className="text-stone-600 text-sm">
            © {new Date().getFullYear()} EdgesClaw. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPagePL() {
  return (
    <div className="min-h-screen bg-[#0a0a08] overflow-x-hidden" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <Navbar />
      <Hero />
      <ProblemStats />
      <Process />
      <Pricing />
      <TechFeatures />
      <ContactForm />
      <Footer />
    </div>
  );
}
