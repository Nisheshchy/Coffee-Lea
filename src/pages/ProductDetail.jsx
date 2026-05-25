/** @format */
import { useEffect } from "react";
import { menuProducts } from "../data/coffeeData";

export default function ProductDetail({ id, navigateTo }) {
  const product = menuProducts.find((p) => String(p.id) === String(id));
  if (!product) {
    return (
      <section className="py-24 text-center">
        <p className="text-xl text-[#3c2417]">Product not found.</p>
        <button
          className="mt-4 rounded-full bg-[#3b2519] px-6 py-2 text-[#f4e7dc] hover:bg-[#5c3d2e]"
          onClick={() => navigateTo("#home")}
        >
          Back to Home
        </button>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-[0_30px_90px_rgba(57,32,20,0.2)]">
        <img src={product.image} alt={product.title} className="mb-6 max-h-80 w-full object-cover rounded" />
        <h2 className="mb-4 text-3xl font-bold text-[#2f1b12]">{product.title}</h2>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#8c6b53]">{product.category}</p>
        <p className="mb-4 text-[#5c4236]">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#3b2519]">{product.price}</span>
          <button
            className="rounded-full bg-[#3b2519] px-5 py-2 text-[#f4e7dc] hover:bg-[#5c3d2e]"
            onClick={() => navigateTo("#home")}
          >
            Back to Menu
          </button>
        </div>
      </div>
    </section>
  );
}
