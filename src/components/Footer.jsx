/** @format */

import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 rounded-[3rem] bg-[#3b2519] px-8 py-12 text-[#f4e6dc] shadow-[0_40px_110px_rgba(46,24,12,0.28)]">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b99d81]">
            Coffee Shop
          </p>
          <p className="max-w-sm text-sm leading-7 text-[#e7d5c8]">
            Premium coffee crafted with care. Visit us for cozy moments, curated
            beans, and beautifully presented beverages.
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
  );
}
