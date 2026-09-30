import {
  useState,
} from "react";

import {
  Route,
  Routes,
} from "react-router";

import Navbar from "./components/Navbar.jsx";

import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CartPage from "./pages/CartPage.jsx";

export default function App() {
  const [cart, setCart] =
    useState([]);

  const cartQuantity =
    cart.reduce(
      function (total, item) {
        return (
          total +
          item.quantity
        );
      },
      0
    );

  function addToCart(
    product,
    quantity
  ) {
    setCart(function (
      currentCart
    ) {
      const existingItem =
        currentCart.find(
          function (item) {
            return (
              item.id ===
              product.id
            );
          }
        );

      if (existingItem) {
        return currentCart.map(
          function (item) {
            if (
              item.id ===
              product.id
            ) {
              return {
                ...item,

                quantity:
                  item.quantity +
                  quantity,
              };
            }

            return item;
          }
        );
      }

      return [
        ...currentCart,

        {
          ...product,
          quantity,
        },
      ];
    });
  }

  function updateQuantity(
    productId,
    quantity
  ) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(function (
      currentCart
    ) {
      return currentCart.map(
        function (item) {
          if (
            item.id === productId
          ) {
            return {
              ...item,
              quantity,
            };
          }

          return item;
        }
      );
    });
  }

  function removeFromCart(
    productId
  ) {
    setCart(function (
      currentCart
    ) {
      return currentCart.filter(
        function (item) {
          return (
            item.id !== productId
          );
        }
      );
    });
  }

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950">
      <Navbar
        cartQuantity={
          cartQuantity
        }
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/shop"
          element={
            <ShopPage
              onAddToCart={
                addToCart
              }
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              onUpdateQuantity={
                updateQuantity
              }
              onRemove={
                removeFromCart
              }
            />
          }
        />
      </Routes>
    </div>
  );
}