/** @format */

export default function About() {
  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#3c2417]">
          Coffee Lea is a community-first coffee house built for people who love
          quality, conversation, and comfort. We brew thoughtfully sourced beans
          and pair every cup with warm hospitality that makes every visit feel
          like coming home.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] bg-white p-8 shadow-md">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-base leading-7 text-[#3c2417]">
            We bring together exceptional coffee, handcrafted bites, and a calm
            gathering space so every guest can slow down, connect, and savor the
            moment. Sustainability, quality, and local support guide everything
            we do.
          </p>
        </article>

        <article className="rounded-[2rem] bg-white p-8 shadow-md">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="mt-4 text-base leading-7 text-[#3c2417]">
            From our first small batch to a neighborhood staple, Coffee Lea has
            always been about more than coffee. We grew from a simple idea:
            great coffee deserves a space where people feel welcome and inspired.
          </p>
        </article>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-[#3b2519] p-8 text-[#f4e7dc] shadow-md">
          <h3 className="text-xl font-semibold">Quality Beans</h3>
          <p className="mt-3 text-sm leading-6 text-[#f1e5da]">
            We work with trusted roasters and source beans that are ethically
            produced and freshly roasted for the best flavor.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#3b2519] p-8 text-[#f4e7dc] shadow-md">
          <h3 className="text-xl font-semibold">Cozy Space</h3>
          <p className="mt-3 text-sm leading-6 text-[#f1e5da]">
            Designed for both work and relaxation, our café invites you to unwind
            with a cup in hand and a friendly atmosphere.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#3b2519] p-8 text-[#f4e7dc] shadow-md">
          <h3 className="text-xl font-semibold">Local Focus</h3>
          <p className="mt-3 text-sm leading-6 text-[#f1e5da]">
            We celebrate local artisans and ingredients with every seasonal menu
            item and community collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
