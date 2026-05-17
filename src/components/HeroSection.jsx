/** @format */

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.querySelectorAll(".fade-up"), {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
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
          Discover a warm café landing page with premium coffee collections,
          daily deals, and stylish presentation built on React, Tailwind, and
          GSAP.
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
          <p className="mt-3 text-2xl font-semibold text-[#2f1b12]">Espresso</p>
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
  );
}
