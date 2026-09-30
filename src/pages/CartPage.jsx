import {
  Link,
} from "react-router";

import CartItem from "../components/CartItem.jsx";

export default function CartPage({
  cart,
  onUpdateQuantity,
  onRemove,
}) {
  const totalPrice =
    cart.reduce(
      function (total, item) {
        return (
          total +
          item.price *
            item.quantity
        );
      },
      0
    );

  if (cart.length === 0) {
    return (
      <main className="mx-auto grid min-h-[650px] max-w-7xl place-items-center px-5 py-16">
        <div className="max-w-lg text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
            Your cart
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em]">
            Your cart is empty.
          </h1>

          <p className="mt-5 text-zinc-600">
            Visit the shop and add something
            you like.
          </p>

          <Link
            className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-zinc-950 px-6 font-bold text-white hover:bg-lime-300 hover:text-zinc-950"
            to="/shop"
          >
            Browse products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <header>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
          Your cart
        </p>

        <h1 className="mt-3 text-5xl font-black tracking-[-0.04em]">
          Shopping cart
        </h1>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
        <section>
          {cart.map(function (
            item
          ) {
            return (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={
                  onUpdateQuantity
                }
                onRemove={
                  onRemove
                }
              />
            );
          })}
        </section>

        <aside className="h-fit rounded-2xl bg-zinc-950 p-7 text-white lg:sticky lg:top-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
            Order summary
          </p>

          <div className="mt-6 flex items-center justify-between border-b border-zinc-700 pb-5">
            <span>Total</span>

            <strong className="text-2xl">
              ${totalPrice.toFixed(2)}
            </strong>
          </div>

          <p className="mt-5 text-sm leading-6 text-zinc-400">
            This is a learning project.
            Checkout and payment are not
            implemented.
          </p>
        </aside>
      </div>
    </main>
  );
}