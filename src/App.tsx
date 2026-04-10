/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Globe, 
  Star, 
  ArrowUpRight,
  UtensilsCrossed,
  Zap,
  Scale
} from 'lucide-react';
import { Language } from './types';
import { MENU_DATA, TRANSLATIONS, REVIEWS } from './constants';

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const displayedReviews = showAllReviews ? REVIEWS : REVIEWS.slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-neon selection:text-brand-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center font-display font-bold text-xl text-brand-black">
              M
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              MUSTAFA'S <span className="text-brand-orange">DÖNER</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('menu')} className="text-sm font-medium hover:text-brand-orange transition-colors uppercase tracking-wider">{t.nav.menu}</button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium hover:text-brand-orange transition-colors uppercase tracking-wider">{t.nav.about}</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-brand-orange transition-colors uppercase tracking-wider">{t.reviews.title}</button>
            <button onClick={() => scrollToSection('location')} className="text-sm font-medium hover:text-brand-orange transition-colors uppercase tracking-wider">{t.nav.location}</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
              <Globe className="w-4 h-4 text-brand-neon" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs font-bold uppercase tracking-widest outline-none cursor-pointer"
              >
                <option value="de" className="bg-brand-black">DE</option>
                <option value="en" className="bg-brand-black">EN</option>
                <option value="ar" className="bg-brand-black">AR</option>
                <option value="tr" className="bg-brand-black">TR</option>
              </select>
            </div>
            
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            <button 
              onClick={() => scrollToSection('location')}
              className="hidden sm:flex items-center gap-2 bg-brand-neon text-brand-black px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95"
            >
              <MapPin className="w-4 h-4" />
              {t.hero.cta_visit}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-brand-black p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-xl">MUSTAFA'S <span className="text-brand-orange">DÖNER</span></span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white/10 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              <button onClick={() => scrollToSection('menu')} className="text-4xl font-display font-bold text-left">{t.nav.menu}</button>
              <button onClick={() => scrollToSection('experience')} className="text-4xl font-display font-bold text-left">{t.nav.about}</button>
              <button onClick={() => scrollToSection('reviews')} className="text-4xl font-display font-bold text-left">{t.reviews.title}</button>
              <button onClick={() => scrollToSection('location')} className="text-4xl font-display font-bold text-left">{t.nav.location}</button>
            </div>
            <div className="mt-auto pt-12 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-brand-orange">
                <Phone className="w-5 h-5" />
                <span className="font-bold">03332 5827819</span>
              </div>
              <div className="flex items-center gap-3 text-brand-neon">
                <Clock className="w-5 h-5" />
                <span>{t.location.hours}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-brand-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-orange/10 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-neon/10 border border-brand-neon/20 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-brand-neon fill-brand-neon" />
              <span className="text-brand-neon text-xs font-bold uppercase tracking-widest">{t.reviews.total_reviews}</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              {t.hero.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-brand-orange" : ""}>{word} </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-medium">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('location')}
                className="w-full sm:w-auto bg-brand-orange text-brand-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                {t.hero.cta_visit}
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="w-full sm:w-auto glass px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-5 h-5" />
                {t.hero.cta_menu}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 py-6 border-y border-white/10 bg-brand-black/50 backdrop-blur-sm overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="text-2xl font-display font-black uppercase tracking-widest opacity-20">Fresh Ingredients</span>
                <span className="text-brand-neon text-2xl font-display font-black uppercase tracking-widest">Premium Quality</span>
                <span className="text-2xl font-display font-black uppercase tracking-widest opacity-20">Mustafa's Döner</span>
                <span className="text-brand-orange text-2xl font-display font-black uppercase tracking-widest">Schwedt/Oder</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-24 bg-brand-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Happy Customers", value: "10k+" },
              { label: "Google Rating", value: "4.8/5" },
              { label: "Years in Schwedt", value: "5+" },
              { label: "Fresh Daily", value: "100%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-black text-brand-orange mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-brand-neon font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Authentic Taste</span>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase leading-none">{t.nav.menu}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {MENU_DATA[lang].map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeCategory === i 
                      ? "bg-brand-orange text-brand-black" 
                      : "bg-white/5 hover:bg-white/10 text-white/60"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-6xl">{MENU_DATA[lang][activeCategory].icon}</span>
                  <h3 className="text-3xl font-display font-black uppercase text-brand-orange">
                    {MENU_DATA[lang][activeCategory].title}
                  </h3>
                </div>
                {MENU_DATA[lang][activeCategory].items.map((item, i) => (
                  <div 
                    key={i}
                    className="group flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-neon/30 transition-all hover:bg-white/[0.08]"
                  >
                    <div>
                      <h4 className="text-lg font-bold group-hover:text-brand-neon transition-colors">{item.name}</h4>
                      {item.description && <p className="text-sm text-white/40 mt-1">{item.description}</p>}
                    </div>
                    <div className="text-xl font-display font-black text-brand-orange group-hover:scale-110 transition-transform">
                      {item.price}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="hidden lg:flex items-center justify-center sticky top-32 h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <div className="text-center p-12">
                <UtensilsCrossed className="w-20 h-20 text-brand-orange mx-auto mb-8 opacity-20" />
                <p className="text-2xl font-display font-black uppercase tracking-widest opacity-20">Fresh & Tasty</p>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-2xl">
                  <p className="text-sm font-medium italic text-white/80">
                    "The best döner I've ever had. The bread is perfectly crispy and the meat is high quality."
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex text-brand-orange">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <span className="text-xs font-bold text-white/40">— Lukas M.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-brand-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-6">{t.experience.title}</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <UtensilsCrossed className="w-10 h-10" />, ...t.experience.fresh, color: "text-brand-orange" },
              { icon: <Zap className="w-10 h-10" />, ...t.experience.fast, color: "text-brand-neon" },
              { icon: <Scale className="w-10 h-10" />, ...t.experience.big, color: "text-white" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white/5 rounded-[40px] border border-white/5 hover:border-white/20 transition-all text-center"
              >
                <div className={`${feature.color} mb-8 flex justify-center`}>{feature.icon}</div>
                <h3 className="text-2xl font-display font-black uppercase mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-brand-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Testimonials</span>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase leading-none">{t.reviews.title}</h2>
            </div>
            <div className="flex items-center gap-4 glass px-6 py-4 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-display font-black text-brand-neon">4.8</div>
                <div className="flex text-brand-orange">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
              <div className="h-10 w-px bg-white/10 mx-2" />
              <div className="text-sm font-bold text-white/40 uppercase tracking-widest">{t.reviews.total_reviews}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {displayedReviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-brand-neon/20 transition-all flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center font-bold text-brand-orange">
                        {review.author[0]}
                      </div>
                      <span className="font-bold">{review.author}</span>
                    </div>
                    <div className="flex text-brand-orange">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star 
                          key={starIdx} 
                          className={`w-3 h-3 ${starIdx < review.rating ? 'fill-current' : 'text-white/10'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed italic flex-grow">"{review.text}"</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="glass px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-all"
            >
              {showAllReviews ? t.reviews.show_less : t.reviews.show_more}
            </button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-white text-brand-black rounded-t-[60px] md:rounded-t-[100px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Visit Us</span>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-12 leading-none">{t.location.title}</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-black text-white rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-1">Address</h4>
                    <p className="text-2xl font-display font-bold">{t.location.address}</p>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Rosa-Luxemburg-Straße+42,16303+Schwedt/Oder,Germany" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-brand-orange font-bold hover:underline"
                    >
                      {t.location.get_directions} <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-black text-white rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-1">Opening Hours</h4>
                    <p className="text-2xl font-display font-bold">{t.location.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-black text-white rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-1">Phone</h4>
                    <a href={`tel:${t.location.phone.replace(/\s/g, '')}`} className="text-2xl font-display font-bold hover:text-brand-orange transition-colors">
                      {t.location.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[500px] rounded-[40px] overflow-hidden border-8 border-brand-black/5 relative shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.736850259854!2d14.282916677164426!3d53.06014597226504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a9969696969697%3A0x9696969696969696!2sRosa-Luxemburg-Stra%C3%9Fe%2042%2C%2016303%20Schwedt%2FOder%2C%20Germany!5e0!3m2!1sen!2sde!4v1712735213000!5m2!1sen!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center font-display font-bold text-brand-black">
                  M
                </div>
                <span className="font-display font-bold text-xl tracking-tight">
                  MUSTAFA'S <span className="text-brand-orange">DÖNER</span>
                </span>
              </div>
              <p className="text-white/40 max-w-xs">
                The real street food experience in the heart of Schwedt/Oder.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <h3 className="text-3xl font-display font-black uppercase">{t.footer.visit_today}</h3>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/20">
            <p>© 2026 MUSTAFA'S DÖNER SCHWEDT. {t.footer.rights}</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Visit Button */}
      <motion.button
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        onClick={() => scrollToSection('location')}
        className="fixed bottom-8 right-8 z-40 bg-brand-neon text-brand-black px-6 py-4 rounded-full font-black shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform active:scale-95 md:hidden"
      >
        <MapPin className="w-5 h-5" />
        {t.hero.cta_visit}
      </motion.button>
    </div>
  );
}
