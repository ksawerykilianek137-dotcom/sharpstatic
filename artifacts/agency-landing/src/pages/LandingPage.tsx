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
  Sparkles,
  Calendar,
  MapPin,
  BarChart3,
  RefreshCw,
  Server,
  Lock,
  HardDrive,
  HeadphonesIcon,
  Activity,
  Star,
  Check,
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
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center glow-blue-sm">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white uppercase">
              EDGE<span className="text-blue-400">CLAW</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 glow-blue-sm hover:glow-blue"
            >
              Contact Us <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
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
            className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-300 hover:text-white py-2 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all"
              >
                Contact Us <ChevronRight className="w-3.5 h-3.5" />
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
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-blue" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-white"
          >
            Professional Websites{" "}
            <br className="hidden sm:block" />
            For Your Business.{" "}
            <span className="text-gradient-blue">Premium.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We design and build ultra-fast React websites.{" "}
            <span className="text-white font-medium">
              We guarantee a 100/100 Google PageSpeed score.
            </span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-400 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 glow-blue hover:scale-105"
            >
              View Pricing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400 text-sm"
          >
            {[
              { icon: CheckCircle2, label: "100/100 PageSpeed" },
              { icon: Shield, label: "DDoS Protected" },
              { icon: Zap, label: "Sub-second Load Times" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-blue-400" />
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
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      headline: "50%",
      label: "of users leave if a site takes",
      emphasis: "> 3 seconds to load",
      sub: "You lose half your traffic before they even see your offer.",
    },
    {
      icon: TrendingUp,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      headline: "#1 Factor",
      label: "Page speed is Google's",
      emphasis: "top ranking signal",
      sub: "Slow sites get buried. Fast sites get found. The math is simple.",
    },
    {
      icon: AlertTriangle,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      headline: "Right Now",
      label: "Your competitors",
      emphasis: "are already faster",
      sub: "Every day without a fast site is revenue walking out the door.",
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
          <motion.p variants={fadeUp} className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            The Brutal Truth
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Your slow website is{" "}
            <span className="text-gradient-blue">costing you customers</span>
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
              className={`relative group rounded-2xl border ${s.border} bg-slate-900/60 backdrop-blur-sm p-8 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute inset-0 ${s.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${s.bg} border ${s.border} mb-6`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <div className={`text-5xl font-black ${s.color} mb-2 leading-none`}>{s.headline}</div>
                <p className="text-slate-300 font-medium text-base mb-1">
                  {s.label} <span className="text-white font-bold">{s.emphasis}</span>
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mt-3">{s.sub}</p>
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
      name: "ESSENTIAL",
      price: "£499",
      period: "one-time",
      features: [
        "Single Page Design",
        "Mobile-First Optimization",
        "Load time < 1s",
        "SSL & Security Included",
        "Local SEO Setup",
        "Hosted on Cloudflare Pages",
      ],
      featured: false,
    },
    {
      name: "PREMIUM (Barber Pro)",
      price: "£899",
      period: "one-time",
      badge: "MOST POPULAR",
      features: [
        "Multi-page or Advanced One-page",
        "Online Booking Integration",
        "100/100 PageSpeed Guarantee",
        "Google Business Profile Sync",
        "AI Chatbot Assistant",
        "Priority Edge Hosting",
      ],
      featured: true,
    },
    {
      name: "MANAGED",
      price: "£49",
      period: "monthly",
      features: [
        "Managed Edge Hosting",
        "Unlimited Content Updates",
        "Enterprise DDoS Protection",
        "Daily Backups",
        "24/7 Technical Support",
        "Performance Monitoring",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black text-blue-500 mb-6 uppercase tracking-tight">
            EDGECLAW UK PRICING
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-400 font-medium">
            Ultra-fast websites tailored for your growth
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
                  ? "bg-slate-900/40 border-blue-500 ring-2 ring-blue-500/50 scale-105 z-10 glow-blue shadow-2xl"
                  : "bg-slate-950/60 border-white/5 hover:bg-slate-900/40 hover:border-white/10"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[0.7rem] font-black px-5 py-2 rounded-xl shadow-lg whitespace-nowrap tracking-wide leading-tight text-center">
                  <div>MOST</div>
                  <div>POPULAR</div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase leading-tight">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-black text-blue-500">{tier.price}</span>
                  {tier.period === "monthly" && <span className="text-slate-500 text-xl font-bold">/</span>}
                </div>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">
                  {tier.period}
                </p>
              </div>

              <ul className="space-y-5 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
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
          
          <div className="flex flex-col gap-6 border-l-4 border-blue-500 pl-8">
            <h4 className="text-white text-xl font-black uppercase tracking-tight">
              <span className="text-blue-500">Why EdgeClaw?</span> We don't use WordPress.
            </h4>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We build clean, high-performance code that is unhackable and blazing fast. Perfect for UK businesses looking to dominate local search.
            </p>
          </div>

          <p className="text-slate-600 italic text-sm md:text-base">
            *Prices are net. For bespoke enterprise solutions, contact us for a quote.
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
      icon: Zap,
      title: "Cloudflare Edge Hosting",
      description:
        "Your site lives at 300+ data centers worldwide. Visitors are always routed to the nearest server — delivering blazing load times regardless of location.",
      detail: "300+ global nodes",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    },
    {
      icon: Shield,
      title: "Enterprise DDoS Security",
      description:
        "Cloudflare's battle-hardened DDoS protection absorbs the largest attacks on the internet. Your site stays online — no matter what.",
      detail: "Always-on protection",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    },
    {
      icon: Cpu,
      title: "AI-Optimized Performance",
      description:
        "Smart asset delivery, predictive caching, and automated image optimization ensure every visitor gets the fastest possible experience.",
      detail: "Auto-optimized assets",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Technology
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built on the{" "}
            <span className="text-gradient-blue">world's fastest infrastructure</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
            We use the same technology that powers Cloudflare, Vercel, and the world's top-performing websites.
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
              className={`group relative rounded-2xl border ${f.border} bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-slate-800/60 ${f.glow} cursor-default`}
            >
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${f.bg} border ${f.border} mb-6`}>
                  <f.icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed">{f.description}</p>
              </div>
              <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${f.color} ${f.bg} border ${f.border} px-3 py-1.5 rounded-full`}>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Speed Audit Request - ${form.businessName || form.name}`;
    const body = `Name: ${form.name}\nBusiness: ${form.businessName}\nWebsite: ${form.websiteUrl}\nEmail: ${form.email}\n\nPlease provide a speed audit for my website.`;
    window.location.href = `mailto:ksawery@edgeclaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 text-sm rounded-xl px-4 py-3.5 outline-none transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-blue-500/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            ref={ref}
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Free Consultation
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Get Your Free{" "}
              <span className="text-gradient-blue">Speed Audit</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed">
              Tell us about your business and we'll analyze your current site speed — completely free, no strings attached.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-sm p-8 md:p-10"
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
                  <h3 className="text-2xl font-bold text-white mb-3">Request Received!</h3>
                  <p className="text-slate-400 text-base max-w-sm mx-auto leading-relaxed">
                    We'll analyze your site and get back to you within 24 hours with a detailed speed report.
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
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Business Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        name="businessName"
                        required
                        value={form.businessName}
                        onChange={handleChange}
                        placeholder="Smith & Co."
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Current Website URL{" "}
                      <span className="text-slate-500 font-normal">(optional)</span>
                    </label>
                    <input
                      name="websiteUrl"
                      value={form.websiteUrl}
                      onChange={handleChange}
                      placeholder="https://yoursite.com"
                      type="url"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@yoursite.com"
                      type="email"
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 mt-2 glow-blue"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-600 pt-1">
                    No spam. We'll reply within 24 hours.
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
    <footer className="border-t border-white/5 bg-slate-950/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-lg text-white tracking-tight uppercase">
              EDGE<span className="text-blue-400">CLAW</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Shield className="w-4 h-4 text-blue-400/70" />
            <span>Powered by</span>
            <span className="font-semibold text-orange-400">Cloudflare Workers</span>
          </div>

          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} EdgeClaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemStats />
      <Pricing />
      <TechFeatures />
      <ContactForm />
      <Footer />
    </div>
  );
}
