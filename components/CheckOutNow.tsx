"use client";

import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/app/lib/sanity";
import { ProductCart } from "./AddToCart";

const CheckOutNow = ({
  currency,
  name,
  description,
  price,
  image,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        buyNow(product.price_id);
      }}
      variant={"outline"}
      className="font-semibold hover:scale-110 transition-all"
    >
      Checkout Now
    </Button>
  );
};

export default CheckOutNow;
