/** @format */

import { useEffect, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { gsap } from "gsap";
import { menuProducts } from "../data/coffeeData";

export default function MenuSection() {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Espresso", "Milk Coffee", "Iced", "Specialty"];

  const filteredProducts =
    selectedCategory === "All"
      ? menuProducts
      : menuProducts.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".menu-card"),
        {
          y: 32,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section ref={sectionRef} id="menu" className="mt-24">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#8b6d55]">
          Our Menu
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-[#2f1b12]">
          Complete Coffee Menu
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5d4033]">
          Explore our full selection of handcrafted coffees, from classic
          espresso to specialty drinks.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              selectedCategory === category
                ? "bg-[#3b2519] text-[#f4e6dc]"
                : "border border-[#d4b5a0] bg-white text-[#3b2519] hover:border-[#3b2519]"
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="menu-card overflow-hidden rounded-[1.8rem] bg-white shadow-[0_18px_50px_rgba(80,40,24,0.12)] transition hover:shadow-[0_25px_70px_rgba(80,40,24,0.18)]">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8c6b53]">
                {product.category}
              </p>
              <h3 className="text-lg font-semibold text-[#2f1b12]">
                {product.title}
              </h3>
              <p className="text-xs leading-5 text-[#5c4236]">
                {product.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-lg font-bold text-[#3b2519]">
                  {product.price}
                </span>
                <button className="rounded-full bg-[#3b2519] p-2 text-[#f4e6dc] transition hover:bg-[#553b2f]">
                  <ShoppingCart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
