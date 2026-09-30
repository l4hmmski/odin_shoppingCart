export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}) {
  function decreaseQuantity() {
    onUpdateQuantity(
      item.id,
      item.quantity - 1
    );
  }

  function increaseQuantity() {
    onUpdateQuantity(
      item.id,
      item.quantity + 1
    );
  }

  function handleQuantityChange(
    event
  ) {
    const quantity =
      Number(event.target.value);

    if (Number.isNaN(quantity)) {
      return;
    }

    onUpdateQuantity(
      item.id,
      quantity
    );
  }

  return (
    <article className="grid gap-5 border-b border-zinc-200 py-6 sm:grid-cols-[110px_1fr_auto] sm:items-center">
      <div className="grid h-28 place-items-center rounded-xl bg-white p-4">
        <img
          className="h-full w-full object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
          {item.category}
        </p>

        <h2 className="mt-1 font-bold text-zinc-950">
          {item.title}
        </h2>

        <p className="mt-2 font-black">
          ${item.price.toFixed(2)}
        </p>

        <button
          className="mt-3 text-sm font-bold text-red-600 underline underline-offset-4"
          type="button"
          onClick={function () {
            onRemove(item.id);
          }}
        >
          Remove
        </button>
      </div>

      <div className="flex items-center sm:justify-end">
        <button
          className="h-10 w-10 rounded-l-lg border border-zinc-300 bg-white text-lg font-bold hover:bg-zinc-100"
          type="button"
          onClick={
            decreaseQuantity
          }
          aria-label={`Decrease ${item.title} quantity`}
        >
          −
        </button>

        <input
          className="h-10 w-16 border-y border-zinc-300 bg-white text-center font-bold outline-none"
          type="number"
          min="0"
          value={item.quantity}
          onChange={
            handleQuantityChange
          }
          aria-label={`${item.title} cart quantity`}
        />

        <button
          className="h-10 w-10 rounded-r-lg border border-zinc-300 bg-white text-lg font-bold hover:bg-zinc-100"
          type="button"
          onClick={
            increaseQuantity
          }
          aria-label={`Increase ${item.title} quantity`}
        >
          +
        </button>
      </div>
    </article>
  );
}