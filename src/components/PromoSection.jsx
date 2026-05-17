/** @format */

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

export default function PromoSection() {
  const promoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(promoRef.current.querySelectorAll(".fade-up-card"), {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.45,
        ease: "power3.out",
      });
    }, promoRef);

    return () => ctx.revert();
  }, []);

  return (
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
            Treat yourself to a morning bundle featuring a flaky pastry and your
            favorite coffee at a special price.
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
              Subscribe for seasonal offers, new roasts, and cafe event updates
              delivered straight to your inbox.
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
  );
}
