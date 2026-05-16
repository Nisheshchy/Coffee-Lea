/** @format */

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { dailyDeals } from "../data/coffeeData";

export default function DailyDealsSection() {
  const dealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(dealRef.current.querySelectorAll(".fade-up-card"), {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.6,
        ease: "power3.out",
      });
    }, dealRef);

    return () => ctx.revert();
  }, []);

  return (
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
  );
}
