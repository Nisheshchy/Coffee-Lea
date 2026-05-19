/** @format */

import { stories } from "../data/stories";

export default function StoriesList({ navigateTo }) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">Stories</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <article key={s.id} className="rounded-xl bg-white p-4 shadow">
            <img
              src={s.image}
              alt={s.title}
              className="h-40 w-full rounded-md object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{s.excerpt}</p>
            <div className="mt-3">
              <a
                href={`#/stories/${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(`/stories/${s.id}`);
                }}
                className="text-sm font-medium text-[#3b2519] underline">
                Read story
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
