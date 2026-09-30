import {
  NavLink,
} from "react-router";

export default function Navbar({
  cartQuantity,
}) {
  function getLinkClass({
    isActive,
  }) {
    const baseClasses =
      "rounded-full px-4 py-2 text-sm font-semibold transition";

    if (isActive) {
      return `${baseClasses} bg-lime-300 text-zinc-950`;
    }

    return `${baseClasses} text-zinc-300 hover:bg-zinc-800 hover:text-white`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 text-white backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-6 px-5">
        <NavLink
          className="text-lg font-black tracking-tight"
          to="/"
        >
          L4HMMSKI STORE
        </NavLink>

        <nav
          className="flex items-center gap-1"
          aria-label="Main navigation"
        >
          <NavLink
            className={getLinkClass}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={getLinkClass}
            to="/shop"
          >
            Shop
          </NavLink>

          <NavLink
            className={getLinkClass}
            to="/cart"
          >
            <span className="flex items-center gap-2">
              Cart

              <span className="grid min-w-6 place-items-center rounded-full bg-white px-1.5 py-0.5 text-xs font-black text-zinc-950">
                {cartQuantity}
              </span>
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}