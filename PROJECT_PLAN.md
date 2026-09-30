# Shopping Cart Project Plan

## Pages

- Home page
- Shop page
- Cart page

## Components

- Navbar
- ProductCard
- CartItem

## State

The main App component stores the cart because the navbar and cart page both need access to it.

Each ProductCard stores the quantity the user wants to add.

## API

Products are fetched from:

https://fakestoreapi.com/products

## Cart functionality

- Add products
- Increase quantity
- Decrease quantity
- Manually enter quantity
- Remove products
- Display total cart quantity in navbar
- Display total price

## Testing

Test our own components and cart behaviour.

Do not test whether React Router itself works.

## Deployment

Deploy through Vercel using an SPA rewrite in vercel.json.