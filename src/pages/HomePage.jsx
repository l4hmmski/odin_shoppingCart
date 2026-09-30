import {
  Link,
} from "react-router";

export default function HomePage() {
  return (
    <main>
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-lime-300">
              Modern essentials
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Simple products.
              Better everyday living.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              Explore a curated collection
              of clothing, jewellery and
              technology for everyday use.
            </p>

            <Link
              className="mt-9 inline-flex min-h-13 items-center rounded-lg bg-lime-300 px-7 font-black text-zinc-950 transition hover:bg-lime-200"
              to="/shop"
            >
              Shop the collection →
            </Link>
          </div>

          <div
            className="relative hidden min-h-96 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 lg:block"
            aria-hidden="true"
          >
            <div className="absolute left-12 top-12 h-52 w-52 rounded-full bg-lime-300"></div>

            <div className="absolute bottom-10 right-8 h-64 w-48 rotate-12 rounded-3xl border border-zinc-600 bg-zinc-800 shadow-2xl"></div>

            <div className="absolute bottom-20 left-24 h-24 w-56 -rotate-6 rounded-full border border-zinc-600 bg-zinc-700"></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
          Why shop with us
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 bg-white p-7">
            <span className="text-3xl">
              ✓
            </span>

            <h2 className="mt-5 text-xl font-black">
              Curated products
            </h2>

            <p className="mt-3 text-zinc-600">
              A focused collection without
              unnecessary clutter.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7">
            <span className="text-3xl">
              ↻
            </span>

            <h2 className="mt-5 text-xl font-black">
              Flexible cart
            </h2>

            <p className="mt-3 text-zinc-600">
              Add, remove and change
              quantities whenever needed.
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-7">
            <span className="text-3xl">
              ◇
            </span>

            <h2 className="mt-5 text-xl font-black">
              Simple experience
            </h2>

            <p className="mt-3 text-zinc-600">
              A clear interface designed to
              make shopping straightforward.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}