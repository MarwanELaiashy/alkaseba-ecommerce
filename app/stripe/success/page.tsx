"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { runFireWorks } from "@/app/lib/utils";
import { useShoppingCart } from "use-shopping-cart";

const SuccessStripe = () => {
  const { clearCart } = useShoppingCart();
  useEffect(() => {
    runFireWorks();
    setTimeout(() => {
      clearCart();
    }, 100);
  }, []);

  return (
    <div className="bg-white min-h-[60vh] success-wrapper">
      <div className="w-[1000px] m-auto mt-[160px] bg-[#dcdcdc] p-[50px] rounded-2xl flex justify-center items-center flex-col success">
        <p className="text-green-900 text-4xl">
          <ShoppingBag />
        </p>
        <h2 className="capitalize mt-[15px] text-4xl font-black text-[#324d67]">
          Thank you for your order!
        </h2>
        <p className="text-[16px] font-semibold text-center mt-2">
          Check your email inbox for the receipt.
        </p>
        <p className="text-[16px] font-semibold text-center m-[10px] mt-[30px]">
          If you have any questions, please email
          <a
            className="ml-[5px] text-[#3d38c6]"
            href="mailto:order@example.com"
          >
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button
            type="button"
            className="text-primary font-bold hover:text-primary/80"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessStripe;
