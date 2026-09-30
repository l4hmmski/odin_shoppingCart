import {
  useEffect,
  useState,
} from "react";

import ProductCard from "../components/ProductCard.jsx";

export default function ShopPage({
  onAddToCart,
}) {
  const [products, setProducts] =
    useState([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError("");

        const response =
          await fetch(
            "https://fakestoreapi.com/products"
          );

        if (!response.ok) {
          throw new Error(
            "Products could not be loaded."
          );
        }

        const productData =
          await response.json();

        setProducts(productData);
      } catch (fetchError) {
        setError(
          fetchError.message
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-5 py-14">
      <header className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
          Shop
        </p>

        <h1 className="mt-3 text-5xl font-black tracking-[-0.04em] text-zinc-950">
          All products
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-600">
          Select a quantity and add the
          product to your cart.
        </p>
      </header>

      {isLoading && (
        <div
          className="grid min-h-72 place-items-center"
          role="status"
        >
          <p className="font-bold text-zinc-500">
            Loading products...
          </p>
        </div>
      )}

      {error && (
        <div
          className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700"
          role="alert"
        >
          {error}
        </div>
      )}

      {!isLoading &&
        !error && (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map(
              function (product) {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={
                      onAddToCart
                    }
                  />
                );
              }
            )}
          </section>
        )}
    </main>
  );
}