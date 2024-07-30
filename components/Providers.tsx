"use client";

import { ReactNode } from "react";
import { CartProvider as OURProvider } from "use-shopping-cart";

const stripePublicKey =
  "pk_test_51PRLkaP6BlxGFZlKsFkRTiBH3cycLFCMJg3DIXVoZFiq0xXCskPZfCnBJMsD3KrSOon37tFFRR3X7K9fCYpOHJKO00qY4HlDZY";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <OURProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripePublicKey}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true} // to keep products in shopping cart in localStorage when reload the page
      language="en-US"
    >
      {children}
    </OURProvider>
  );
};

export default CartProvider;
