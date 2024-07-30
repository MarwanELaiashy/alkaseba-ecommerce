import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col py-6 bg-gray-100 mt-6 ">
      <p className="text-gray-500 hover:text-primary capitalize font-semibold">
        2024 @Al-Kaseba All rights reserverd
      </p>
      <p className="flex flex-row gap-2 mt-2 text-gray-500 hover:text-primary cursor-pointer">
        <Instagram />
        <Twitter />
        <Facebook />
      </p>
    </div>
  );
};

export default Footer;
