import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import ProductCard from "./components/ProductCard.jsx";

const exampleProduct = {
  id: 1,
  title: "Test Product",
  price: 25,
  category: "Test Category",
  image:
    "https://example.com/product.jpg",
};

describe(
  "ProductCard",
  function () {
    test(
      "increases the selected quantity",
      async function () {
        const user =
          userEvent.setup();

        render(
          <ProductCard
            product={
              exampleProduct
            }
            onAddToCart={
              function () {}
            }
          />
        );

        const quantityInput =
          screen.getByRole(
            "spinbutton",
            {
              name:
                /test product quantity/i,
            }
          );

        const increaseButton =
          screen.getByRole(
            "button",
            {
              name:
                /increase test product quantity/i,
            }
          );

        expect(
          quantityInput
        ).toHaveValue(1);

        await user.click(
          increaseButton
        );

        expect(
          quantityInput
        ).toHaveValue(2);
      }
    );

    test(
      "sends the product and quantity to the cart",
      async function () {
        const user =
          userEvent.setup();

        const addToCart =
          vi.fn();

        render(
          <ProductCard
            product={
              exampleProduct
            }
            onAddToCart={
              addToCart
            }
          />
        );

        await user.click(
          screen.getByRole(
            "button",
            {
              name:
                /increase test product quantity/i,
            }
          )
        );

        await user.click(
          screen.getByRole(
            "button",
            {
              name:
                /add to cart/i,
            }
          )
        );

        expect(
          addToCart
        ).toHaveBeenCalledWith(
          exampleProduct,
          2
        );
      }
    );
  }
);