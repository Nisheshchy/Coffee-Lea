/** @format */

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Coffee,
  Sparkles,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { gsap } from "gsap";

const featuredDrinks = [
  {
    title: "Espresso Masterpieces",
    category: "Espresso",
    description:
      "Bold crema, rich body, and a clean finish crafted by our expert baristas.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Iced Favorites",
    category: "Iced",
    description:
      "Chilled and sweetened to perfection for a refreshing afternoon treat.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80&sat=-20",
  },
  {
    title: "Organic Beans",
    category: "Beans",
    description:
      "Sustainably farmed blends roasted fresh to deliver bright, balanced flavor.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
];

const dailyDeals = [
  {
    title: "Daily Deal",
    price: "2 for 1 Coffee",
    description:
      "Enjoy two handcrafted coffees for the price of one during our morning happy hour.",
  },
  {
    title: "Bakery Bundle",
    price: "Combo Save 20%",
    description:
      "Pair your latte with a fresh pastry for a perfectly balanced breakfast.",
  },
  {
    title: "Signature Sip",
    price: "Cold Brew Special",
    description:
      "Smooth, bold cold brew served over ice with a hint of caramel.",
  },
];

function App() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const promoRef = useRef(null);
  const dealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: -28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(heroRef.current.querySelectorAll(".fade-up"), {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(featureRef.current.querySelectorAll(".fade-up-card"), {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(promoRef.current.querySelectorAll(".fade-up-card"), {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.45,
        ease: "power3.out",
      });

      gsap.from(dealRef.current.querySelectorAll(".fade-up-card"), {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.6,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#f2e3d7] text-[#3c2417]">
      <div className="mx-auto max-w-[1400px] px-6 py-6 sm:px-10 lg:px-14">
        <header
          ref={headerRef}
          className="mb-10 flex flex-col gap-6 rounded-[2.5rem] bg-[#3b2519] px-6 py-6 text-[#f4e7dc] shadow-[0_30px_90px_rgba(57,32,20,0.3)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#f2d5c3] text-[#3b2519] shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
              <Coffee className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.35em] text-[#e6cab8]">
                Coffee Lea
              </p>
              <p className="text-lg font-semibold">Brewed to Perfection</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-[#f1e5da]">
            <a href="#home" className="transition hover:text-[#f9e8dc]">
              Home
            </a>
            <a href="#featured" className="transition hover:text-[#f9e8dc]">
              Menu
            </a>
            <a href="#story" className="transition hover:text-[#f9e8dc]">
              Story
            </a>
            <a href="#contact" className="transition hover:text-[#f9e8dc]">
              Contact
            </a>
            <a
              href="#order"
              className="rounded-full bg-[#f2d5c3] px-5 py-2 text-sm font-semibold text-[#3b2519] transition hover:bg-[#e5c0ad]">
              Order Today
            </a>
          </nav>
        </header>

        <main className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <section ref={heroRef} className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e4c6b1] bg-[#f8e4d8] px-4 py-2 text-sm text-[#7c563f] shadow-sm fade-up">
              <Sparkles className="h-4 w-4" />
              Smooth flavor, every cup.
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[#95715e] fade-up">
                From bean to cup
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.05em] text-[#2f1b12] sm:text-6xl fade-up">
                Brewed to Perfection, Crafted for Every Moment.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[#5a3f32] fade-up">
                Discover a warm café landing page with premium coffee
                collections, daily deals, and stylish presentation built on
                React, Tailwind, and GSAP.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 fade-up">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-full bg-[#3b2519] px-6 py-3 text-sm font-semibold text-[#f6e8de] transition hover:bg-[#5c3d2e]">
                Explore Menu
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#daily-deal"
                className="inline-flex items-center justify-center rounded-full border border-[#3b2519] bg-white/90 px-6 py-3 text-sm font-semibold text-[#3b2519] transition hover:bg-[#f3e0d5]">
                Daily Deal
              </a>
            </div>

            <div className="grid gap-4 sm:max-w-lg sm:grid-cols-3 fade-up">
              <div className="rounded-[2rem] bg-white/90 p-5 shadow-[0_25px_60px_rgba(78,42,29,0.14)]">
                <p className="text-xs uppercase tracking-[0.35em] text-[#a4826b]">
                  Featured
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#2f1b12]">
                  Espresso
                </p>
              </div>
              <div className="rounded-[2rem] bg-white/90 p-5 shadow-[0_25px_60px_rgba(78,42,29,0.14)]">
                <p className="text-xs uppercase tracking-[0.35em] text-[#a4826b]">
                  Popular
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#2f1b12]">
                  Iced Latte
                </p>
              </div>
              <div className="rounded-[2rem] bg-white/90 p-5 shadow-[0_25px_60px_rgba(78,42,29,0.14)]">
                <p className="text-xs uppercase tracking-[0.35em] text-[#a4826b]">
                  Organic
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#2f1b12]">
                  Single Origin
                </p>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[3rem] bg-[radial-gradient(circle_at_top,_rgba(248,226,216,0.65),_transparent_33%),_linear-gradient(180deg,#604133_0%,#3b2519_55%,#21140f_100%)] p-6 shadow-[0_40px_120px_rgba(46,24,12,0.35)]">
            <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#f8e0d0]/70 blur-3xl" />
            <div className="absolute -right-12 bottom-10 h-36 w-36 rounded-full bg-[#d7b19a]/60 blur-3xl" />
            <div className="relative grid gap-6">
              <div className="rounded-[2.5rem] bg-[#2e1c16]/95 p-6 text-[#f3e7dc] shadow-[0_28px_70px_rgba(0,0,0,0.18)] fade-up-card">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#f2d5c3] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#3b2519]">
                    Signature
                  </span>
                  <span className="rounded-full bg-[#5d3d2e]/20 px-3 py-2 text-xs text-[#f3e7dc]">
                    New
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-24 w-24 place-items-center rounded-[1.9rem] bg-[#f3dfd3]">
                    <img
                      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=240&q=80"
                      alt="Cappuccino"
                      className="h-full w-full rounded-[1.9rem] object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#d8b6a1]">
                      Barista Craft
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold text-white">
                      Cappuccino
                    </h2>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-[#d3b9a4]">
                      Velvety steamed milk with rich espresso for a smooth
                      morning boost.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] bg-[#f4e2d8]/95 p-8 text-[#3b2519] shadow-[0_24px_66px_rgba(85,45,29,0.12)] fade-up-card">
                <p className="text-sm uppercase tracking-[0.3em] text-[#8a6d53]">
                  Today’s Special
                </p>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em]">
                  Get 1 + 1 Combo
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#5e453b]">
                  Share your favorite brew with someone special and enjoy a
                  limited-time offer on all signature drinks.
                </p>
                <a
                  href="#order"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3b2519] px-6 py-3 text-sm font-semibold text-[#f6e5dc] transition hover:bg-[#543d31]">
                  Order Now
                </a>
              </div>
            </div>
          </section>
        </main>

        <section id="featured" className="mt-24">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#8b6d55]">
              Featured Drinks
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#2f1b12]">
              Featured Drinks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5d4033]">
              Premium coffee moments that showcase craft, flavor, and cafe-style
              presentation.
            </p>
          </div>

          <div ref={featureRef} className="grid gap-6 md:grid-cols-3">
            {featuredDrinks.map((drink) => (
              <article
                key={drink.title}
                className="fade-up-card overflow-hidden rounded-[2.2rem] bg-[#f7e2d7] p-6 shadow-[0_24px_70px_rgba(80,40,24,0.14)]">
                <img
                  src={drink.image}
                  alt={drink.title}
                  className="h-64 w-full rounded-[1.9rem] object-cover"
                />
                <div className="mt-6 space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#8c6b53]">
                    {drink.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-[#2f1b12]">
                    {drink.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#5c4236]">
                    {drink.description}
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-full bg-[#3b2519] px-5 py-3 text-sm font-semibold text-[#f6e5dc] transition hover:bg-[#553b2f]">
                    Browse
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div ref={promoRef} className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
            <article className="fade-up-card rounded-[2.5rem] bg-[#3b2519] p-10 text-[#f4e6dc] shadow-[0_30px_100px_rgba(46,24,12,0.28)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b99d81]">
                Daily Deal
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-tight">
                Fresh pastries & brew for 25% off
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#d6b8a8]">
                Treat yourself to a morning bundle featuring a flaky pastry and
                your favorite coffee at a special price.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f2d5c3] px-6 py-3 text-sm font-semibold text-[#3b2519] transition hover:bg-[#e6c2ab]">
                Grab Deal
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>

            <article className="fade-up-card grid gap-6 rounded-[2.5rem] bg-[#f7e2d8] p-8 shadow-[0_24px_66px_rgba(85,45,29,0.12)]">
              <div className="rounded-[2rem] bg-[#fff4ec] p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#8b6d55]">
                  Newsletter
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#2f1b12]">
                  Never miss a new flavor.
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5c4338]">
                  Subscribe for seasonal offers, new roasts, and cafe event
                  updates delivered straight to your inbox.
                </p>
              </div>
              <div className="rounded-[2rem] bg-[#3b2519] p-6 text-[#f4e6dc]">
                <p className="text-base font-semibold">Coffee lover sign-up</p>
                <p className="mt-4 text-sm leading-6 text-[#d2b7a2]">
                  Get the latest promotions and limited releases first.
                </p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f2d5c3] px-5 py-3 text-sm font-semibold text-[#3b2519] transition hover:bg-[#e6c2ad]">
                  Subscribe
                </button>
              </div>
            </article>
          </div>
        </section>

        <section ref={dealRef} className="mt-24 grid gap-6 md:grid-cols-3">
          {dailyDeals.map((item) => (
            <div
              key={item.title}
              className="fade-up-card rounded-[2.2rem] bg-[#fff0e8] p-7 shadow-[0_22px_55px_rgba(86,40,23,0.12)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#8b6d55]">
                {item.title}
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[#2f1b12]">
                {item.price}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#5c4236]">
                {item.description}
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3b2519] px-4 py-3 text-sm font-semibold text-[#f4e6dc] transition hover:bg-[#553b2f]">
                Order Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </section>

        <footer
          id="contact"
          className="mt-24 rounded-[3rem] bg-[#3b2519] px-8 py-12 text-[#f4e6dc] shadow-[0_40px_110px_rgba(46,24,12,0.28)]">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b99d81]">
                Coffee Shop
              </p>
              <p className="max-w-sm text-sm leading-7 text-[#e7d5c8]">
                Premium coffee crafted with care. Visit us for cozy moments,
                curated beans, and beautifully presented beverages.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b99d81]">
                Our Coffee
              </p>
              <ul className="space-y-3 text-sm leading-7 text-[#d9c4b6]">
                <li>Espresso Masterpieces</li>
                <li>Iced Favorites</li>
                <li>Organic Beans</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b99d81]">
                Contact
              </p>
              <div className="space-y-3 text-sm leading-7 text-[#d9c4b6]">
                <p className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> 123 Roast Street
                </p>
                <p className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +1 (555) 220-9876
                </p>
                <p className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> hello@coffeelea.com
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
