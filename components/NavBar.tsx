"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
const links = [
  { name: "Home", href: "/" },
  { name: "Wear", href: "/Wear" },
  { name: "Electronic", href: "/Electronic" },
  { name: "Fashion", href: "/fashion" },
  { name: "House", href: "/house" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { cartCount, handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-600">
            Al<span className="text-primary">-Kaseba</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 md:flex md:mr-6 2xl:ml-16">
          {links.map((link, index) => (
            <div key={index} className="hover:bg-slate-100">
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="relative">
          <Button
            className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-primary to-blue-700 text-white shadow-lg transform transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
            onClick={() => handleCartClick()}
          >
            <div className="relative">
              <ShoppingBag className="h-8 w-8 md:h-10 md:w-10" />

              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            </div>
          </Button>
          <span className="mt-2 text-sm font-bold text-gray-700 animate-pulse">
            {cartCount} {cartCount === 1 ? "item" : "items"}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
