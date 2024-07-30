"use client";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
    setItemQuantity,
  } = useShoppingCart();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        setError(result.error.message);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleIncQty = (id: any, qty: any) => {
    setItemQuantity(id, qty + 1);
  };

  const handleDecQty = (id: any, qty: any) => {
    if (qty > 1) {
      setItemQuantity(id, qty - 1);
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You dont have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={
                            (entry.imageUrl as string) ||
                            (entry.image as string)
                          }
                          alt="image cart"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex flex-1  items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>
                          <p className="flex border mt-8 border-gray-200 p-[6px]">
                            <span
                              className="text-[16px] py-[6px] px-[12px] cursor-pointer border-r-gray-200 text-green-400"
                              onClick={() =>
                                handleIncQty(entry.id, entry.quantity)
                              }
                            >
                              <Plus />
                            </span>

                            <span
                              className="text-[16px] py-[6px] px-[12px] cursor-pointer border-r-gray-200 text-[#f02d34]"
                              onClick={() =>
                                handleDecQty(entry.id, entry.quantity)
                              }
                            >
                              <Minus />
                            </span>
                          </p>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              <Trash2 />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="mt-6">
              <Button
                className="w-full"
                onClick={handleCheckoutClick}
                disabled={loading}
              >
                {loading ? "Processing..." : "Checkout"}
              </Button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR
                <button
                  onClick={() => handleCartClick()}
                  className=" font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;

<p className="border border-gray-200 p-[6px]">
  <span className="text-[16px] py-[6px] px-[12px] cursor-pointer text-[rgb(49, 168, 49)]">
    <Plus />
  </span>

  <span className="text-[16px] py-[6px] px-[12px] cursor-pointer border-r-gray-200 text-[#f02d34]">
    <Minus />
  </span>
</p>;
