/** @format */

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { featuredDrinks } from "../data/coffeeData";

export default function FeaturedSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".fade-up-card"),
        {
          y: 32,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
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

      <div ref={sectionRef} className="grid gap-6 md:grid-cols-3">
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
  );
}
