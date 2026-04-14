import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Sparkles, Wine, Crown, Scissors, Brush, Hand, Smile, Droplet, 
  MapPin, Phone, Mail, Clock, Instagram, Facebook, Menu, X, ChevronRight 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form Schema
const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  email: z.string().email("Podaj poprawny adres email"),
  phone: z.string().min(9, "Podaj poprawny numer telefonu"),
  service: z.string().min(1, "Wybierz usługę"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Navigation Links
const NAV_LINKS = [
  { name: "O nas", href: "#about" },
  { name: "Usługi", href: "#services" },
  { name: "Galeria", href: "#gallery" },
  { name: "Cennik", href: "#pricing" },
  { name: "Kontakt", href: "#contact" },
];

// Services Data
const SERVICES = [
  {
    id: "hair",
    title: "Stylizacja włosów 'Klasyczny Ken'",
    desc: "Platynowy blond, elegancki przedziałek, fryzura premium na specjalne okazje.",
    icon: Scissors,
    price: "120 zł",
  },
  {
    id: "makeup",
    title: "Makijaż 'Barbie Dream'",
    desc: "Różowe, błyszczące looki, idealne na imprezy i sesje zdjęciowe.",
    icon: Brush,
    price: "150 zł",
  },
  {
    id: "nails",
    title: "Manicure 'Ken-tastic'",
    desc: "Hybryda w odcieniach różu, złota i brokatu. Trwałość i styl.",
    icon: Hand,
    price: "100 zł",
  },
  {
    id: "face",
    title: "Pielęgnacja twarzy 'Plastic Perfect'",
    desc: "Zabiegi nawilżające, oczyszczające i spektakularnie rozświetlające.",
    icon: Smile,
    price: "180 zł",
  },
  {
    id: "body",
    title: "Depilacja 'Smooth Like Ken'",
    desc: "Bezbolesne woskowanie i delikatna depilacja cukrowa.",
    icon: Droplet,
    price: "od 80 zł",
  },
];

export default function LandingPage() {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form Setup
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  // Handle Scroll for Nav
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Wiadomość wysłana! 💖",
      description: "Skontaktujemy się z Tobą najszybciej jak to możliwe, aby potwierdzić wizytę.",
    });
    form.reset();
  };

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* NAVIGATION */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Ken Doll Aesthetic"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              onClick={scrollToContact}
              className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95"
            >
              Umów wizytę
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col gap-6 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif text-foreground hover:text-primary transition-colors border-b border-muted pb-4"
              >
                {link.name}
              </a>
            ))}
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="mt-4 rounded-full w-full bg-primary text-white"
            >
              Umów wizytę
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-primary/10">
        {/* Background Glows */}
        <div className="glow-pink top-1/4 -left-20 animate-pulse-glow" />
        <div className="glow-gold bottom-1/4 -right-20" />

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-[10%] text-primary/40 animate-float">
          <Sparkles className="h-12 w-12" />
        </div>
        <div className="absolute bottom-1/4 right-[15%] text-accent/50 animate-float-delayed">
          <Crown className="h-16 w-16" />
        </div>
        <div className="absolute top-1/3 right-[20%] text-primary/30 animate-float-slow">
          <Sparkles className="h-8 w-8" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left relative">
              {/* Elite Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-primary/20 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Elite Selection 2024
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground leading-[0.9] tracking-tighter"
              >
                Poczuj Magię <br/>
                <span className="text-gradient-pink-gold">Barbie</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                Premium salon piękności, gdzie klasyczna elegancja spotyka się z nowoczesnym glamourem. Poczuj się idealnie w swojej skórze.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto rounded-full px-10 bg-primary hover:bg-primary/90 text-white text-lg h-16 shadow-[0_10px_30px_rgba(232,60,108,0.4)] hover:shadow-[0_15px_40px_rgba(232,60,108,0.5)] transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
                >
                  Umów wizytę
                  <ChevronRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto rounded-full px-10 text-lg h-16 border-2 border-primary/20 hover:bg-white transition-all hover:border-primary/40"
                >
                  Nasze usługi
                </Button>
              </motion.div>
            </div>

            {/* Right: Mascot image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex items-end justify-center relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] scale-75 animate-pulse-glow"></div>
              <img
                src="/mascot.png"
                alt="Ken Doll Aesthetic maskotka"
                className="relative z-10 w-full max-w-sm lg:max-w-md xl:max-w-lg object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="glow-gold -top-20 -right-20 opacity-30" />
        
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Dlaczego Ken Doll?</h2>
              <div className="w-24 h-1.5 bg-primary/30 mx-auto rounded-full"></div>
            </div>
            
            <div className="glass-panel rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden ring-1 ring-black/5">
              <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
              
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-16 italic">
                "W <strong className="text-primary font-black">Ken Doll Aesthetic</strong> wierzymy, że luksus to nie przywilej, a standard, na który zasługujesz każdego dnia."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <Wine className="w-10 h-10" />
                  </div>
                  <h3 className="font-black text-xl mb-3 tracking-tight">Rytuał Prosecco</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Zacznij wizytę od lampki zimnego prosecco w cenie każdego zabiegu.</p>
                </div>
                
                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 rounded-2xl bg-accent/5 flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                    <Crown className="w-10 h-10" />
                  </div>
                  <h3 className="font-black text-xl mb-3 tracking-tight">Kosmetyki Elite</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Pracujemy na luksusowych liniach, niedostępnych w standardowych salonach.</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <h3 className="font-black text-xl mb-3 tracking-tight">Standard Glamour</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Piękne wnętrza zaprojektowane z myślą o Twoim komforcie i... idealnym selfie.</p>
                </div>
              </div>

              {/* Psychological Urgency Section */}
              <div className="mt-20 pt-16 border-t border-black/5">
                <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                  <h4 className="text-xl font-black mb-4 flex items-center justify-center gap-2">
                    <Scissors className="w-5 h-5 text-primary" />
                    Koszt zwyczajnego wyglądu
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-4">
                      <div className="text-3xl font-black text-primary mb-1">93%</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pierwszych wrażeń zależy od Twojej prezencji</div>
                    </div>
                    <div className="p-4 border-x border-black/5">
                      <div className="text-3xl font-black text-primary mb-1">2.4h</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Średni czas dziennie tracony na walkę z niedoskonałościami</div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-black text-primary mb-1">100%</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Gwarancja pewności siebie po wizycie u nas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-secondary/10 relative overflow-hidden">
        <div className="glow-pink -left-40 top-1/2 opacity-20" />
        
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Plan Twojej Metamorfozy</h2>
            <div className="w-24 h-1.5 bg-primary/30 mx-auto rounded-full mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Wyselekcjonowane rytuały piękna, które wykraczają poza ramy tradycyjnej kosmetyki.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                variants={fadeInUp}
                className={`group relative p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden ${
                  idx === 0 || idx === 3 ? "lg:col-span-2 lg:flex lg:items-center lg:gap-12 lg:p-14" : ""
                }`}
              >
                {/* Elite Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                
                <div className={`w-24 h-24 rounded-3xl pink-gradient flex items-center justify-center text-white mb-8 shadow-xl shadow-primary/20 group-hover:rotate-6 transition-transform duration-500 ${
                  idx === 0 || idx === 3 ? "lg:mb-0 lg:shrink-0" : ""
                }`}>
                  <service.icon className="w-12 h-12" />
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Inwestycja</span>
                      <span className="text-2xl font-black text-foreground">{service.price}</span>
                    </div>
                    <Button variant="ghost" className="rounded-full h-12 w-12 p-0 bg-secondary/20 hover:bg-primary hover:text-white transition-all">
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-32 bg-white overflow-hidden relative">
        <div className="glow-gold bottom-0 left-0 opacity-20" />
        
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Estetyka w Obiektywie</h2>
            <div className="w-24 h-1.5 bg-accent/30 mx-auto rounded-full mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Poczuj różową harmonię naszych wnętrz. Każdy detal został zaprojektowany, by inspirować.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="aspect-square rounded-[2rem] bg-gradient-to-br from-secondary/30 to-primary/5 border border-primary/10 flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ring-1 ring-black/5"
              >
                <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md">
                  <Sparkles className="w-10 h-10 text-primary/40" />
                </div>
                <h4 className="font-serif text-xl font-medium text-foreground/60 tracking-tight">Kolekcja wkrótce</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-32 bg-gradient-to-b from-secondary/10 to-white relative">
        <div className="glow-pink top-0 right-0 opacity-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Inwestycja w Siebie</h2>
              <div className="w-24 h-1.5 bg-primary/30 mx-auto rounded-full mb-8"></div>
              <p className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-xl border border-black/5 text-sm font-bold text-foreground">
                <Wine className="w-5 h-5 text-primary animate-pulse" />
                Kieliszek prosecco w cenie każdego zabiegu
              </p>
            </div>

            <div className="glass-panel rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <ul className="space-y-10 relative z-10">
                {[
                  { name: "Stylizacja włosów 'Klasyczny Ken'", price: "120 zł" },
                  { name: "Makijaż 'Barbie Dream'", price: "150 zł" },
                  { name: "Manicure hybrydowy 'Ken-tastic'", price: "100 zł" },
                  { name: "Pielęgnacja twarzy 'Plastic Perfect'", price: "180 zł" },
                  { name: "Depilacja 'Smooth Like Ken'", price: "80 - 150 zł" },
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between group/item"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-3 h-3 rounded-full bg-primary/20 group-hover/item:bg-primary group-hover/item:scale-150 transition-all duration-300"></div>
                      <span className="text-xl md:text-2xl font-bold text-foreground/90 tracking-tight">{item.name}</span>
                    </div>
                    <div className="flex-1 border-b-2 border-dotted border-black/10 mx-6 opacity-30 group-hover/item:opacity-100 transition-opacity"></div>
                    <span className="text-2xl md:text-3xl font-black text-primary whitespace-nowrap">{item.price}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-16 text-center">
                <Button 
                  onClick={scrollToContact}
                  className="rounded-full px-12 bg-foreground hover:bg-black text-white h-16 text-lg font-bold shadow-xl hover:-translate-y-1 transition-all"
                >
                  Zarezerwuj termin
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary/[0.02] -z-10"></div>
        <div className="glow-pink -left-20 top-1/4 opacity-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Zacznij Przygodę</h2>
            <div className="w-24 h-1.5 bg-primary/30 mx-auto rounded-full mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Twoja metamorfoza zaczyna się tutaj. Napisz do nas lub zadzwoń, by umówić termin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Hours */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="glass-panel p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6 font-serif">Informacje</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Lokalizacja</h4>
                      <p className="text-muted-foreground mt-1">Arcybiskupa Józefa Teodorowicza 4<br/>02-972 Warszawa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Telefon</h4>
                      <a href="tel:+48503446066" className="text-muted-foreground mt-1 hover:text-primary transition-colors block">+48 503 446 066</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Email</h4>
                      <a href="mailto:kendollaesthetic@gmail.com" className="text-muted-foreground mt-1 hover:text-primary transition-colors block">kendollaesthetic@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-3xl bg-primary text-white border-none shadow-[0_10px_40px_-10px_rgba(232,60,108,0.5)]">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-bold font-serif">Godziny otwarcia</h3>
                </div>
                <div className="space-y-3 font-medium">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Poniedziałek - Piątek</span>
                    <span>9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Sobota</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-white/70">
                    <span>Niedziela</span>
                    <span>Nieczynne</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-10 md:p-14 rounded-[2.5rem] shadow-2xl border-t-8 border-t-primary relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              <h3 className="text-3xl font-black mb-10 font-serif text-center tracking-tight">Potrzebujesz Konsultacji?</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Imię i nazwisko</FormLabel>
                        <FormControl>
                          <Input placeholder="Twoje imię..." className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="twoj@email.com" className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary h-12 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon</FormLabel>
                          <FormControl>
                            <Input placeholder="+48 000 000 000" className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary h-12 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zainteresowana usługą</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary h-12 rounded-xl">
                              <SelectValue placeholder="Wybierz usługę..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hair">Stylizacja włosów</SelectItem>
                            <SelectItem value="makeup">Makijaż</SelectItem>
                            <SelectItem value="nails">Manicure hybrydowy</SelectItem>
                            <SelectItem value="face">Pielęgnacja twarzy</SelectItem>
                            <SelectItem value="body">Depilacja</SelectItem>
                            <SelectItem value="other">Inne / Konsultacja</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Wiadomość (opcjonalnie)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Wpisz swoją wiadomość..." 
                            className="bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary rounded-xl resize-none min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
                  >
                    Wyślij zapytanie
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>

          {/* GOOGLE MAPS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            <div className="glass-panel rounded-3xl overflow-hidden shadow-xl border border-primary/10">
              <div className="px-8 py-6 flex items-center gap-3 border-b border-border/50">
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground font-serif text-lg">Znajdź nas na mapie</h3>
                  <p className="text-sm text-muted-foreground">Arcybiskupa Józefa Teodorowicza 4, 02-972 Warszawa</p>
                </div>
              </div>
              <iframe
                title="Ken Doll Aesthetic – lokalizacja"
                src="https://maps.google.com/maps?q=Arcybiskupa+J%C3%B3zefa+Teodorowicza+4%2C+02-972+Warszawa&output=embed&z=16"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white/80 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <img
                  src="/logo.png"
                  alt="Ken Doll Aesthetic"
                  className="h-20 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm text-white/60 max-w-xs mx-auto md:mx-0">
                Premium salon piękności inspirujący się wszystkim, co piękne, różowe i absolutnie perfekcyjne.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-white mb-4">Na skróty</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="font-bold text-white mb-4">Obserwuj nas</h4>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <a href="https://www.instagram.com/ken_doll_aesthetic/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/p/Ken-Doll-Aesthetic-100086429955673/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Ken Doll Aesthetic. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
              <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
