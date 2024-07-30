import { CircleX } from "lucide-react";
import Link from "next/link";
import React from "react";

const ErrorStripe = () => {
  return (
    <div className="bg-white min-h-[60vh] error-wrapper">
      <div className="w-[1000px] m-auto mt-[160px] bg-[#dcdcdc] p-[50px] rounded-2xl flex justify-center items-center flex-col error">
        <p className="text-red-600 text-4xl">
          <CircleX />
        </p>
        <h2 className="capitalize mt-[15px] text-4xl font-black text-[#324d67]">
          Oops!
        </h2>
        <p className="text-[16px] font-semibold text-center mt-2">
          Something went wrong....
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

export default ErrorStripe;
