"use client";

import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/app/lib/sanity";
import { toast } from "react-hot-toast";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

const AddToCart = ({
  currency,
  name,
  description,
  price,
  image,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  const handleCart = () => {
    addItem(product), handleCartClick();
    toast.success("item added to the cart.");
  };
  return (
    <Button
      onClick={() => {
        handleCart();
      }}
      className="hover:scale-105 transition-all"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
