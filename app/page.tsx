import Electronics from "@/components/Electronics";
import Fashion from "@/components/Fashion";
import Hero from "@/components/Hero";
import House from "@/components/House";
import Newest from "@/components/Newest";
import Wear from "@/components/Wear";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <Electronics />
      <Wear />
      <Fashion />
      <House />
    </div>
  );
}
