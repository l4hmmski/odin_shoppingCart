import { useState } from "react";

export default function ProductCard({
  product,
  onAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1),
    );
  }

  function increaseQuantity() {
    setQuantity((currentQuantity) =>
      currentQuantity + 1,
    );
  }

  function handleQuantityChange(event) {
    const newQuantity = Number(event.target.value);

    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  }

  function handleAddToCart() {
    onAddToCart(product, quantity);
    setQuantity(1);
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Fixed-size image area */}
      <div className="flex h-64 items-center justify-center border-b border-gray-100 bg-white p-6">
        <img
          className="h-full w-full object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* Product information */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
          {product.category}
        </p>

        <h2 className="mb-4 line-clamp-2 min-h-12 text-lg font-bold leading-6 text-black">
          {product.title}
        </h2>

        <p className="mb-5 text-xl font-bold text-black">
          ${product.price.toFixed(2)}
        </p>

        <div className="mt-auto">
          <div className="mb-3 grid grid-cols-[50px_1fr_50px] overflow-hidden rounded-lg border border-gray-300">
            <button
              className="bg-gray-50 px-4 py-3 text-lg hover:bg-gray-200"
              type="button"
              onClick={decreaseQuantity}
              aria-label={`Decrease ${product.title} quantity`}
            >
              −
            </button>

            <input
              className="min-w-0 border-x border-gray-300 text-center outline-none"
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              aria-label={`${product.title} quantity`}
            />

            <button
              className="bg-gray-50 px-4 py-3 text-lg hover:bg-gray-200"
              type="button"
              onClick={increaseQuantity}
              aria-label={`Increase ${product.title} quantity`}
            >
              +
            </button>
          </div>

          <button
            className="w-full rounded-lg bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
            type="button"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}