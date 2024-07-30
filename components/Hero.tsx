import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  // this function to filter and get heroImages
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);
  return data;
}

const Hero = async () => {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-primary sm:text-5xl md:mb-8 md:text-6xl">
            Your best market with a little price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality products for you.
            We are the best so come and shop with us.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 transition-all hover:scale-105">
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority // to make images loaded as fast as possible
              width={500}
              height={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-all hover:scale-110">
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority // to make images loaded as fast as possible
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start md:items-center justify-start md:justify-center gap-8 md:flex-row">
        <div className="flex h-12 w-64 items-start md:items-center justify-start md:justify-center  rounded-lg  gap-x-1">
          <Link
            href="/Wear"
            className="flex w-1/3 items-center justify-center font-semibold border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 active:bg-primary"
          >
            Wear
          </Link>
          <Link
            href="/Electronic"
            className="flex w-24 items-center justify-center font-semibold border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 active:bg-primary"
          >
            Electronic
          </Link>
          <Link
            href="/fashion"
            className="flex w-1/3 items-center justify-center font-semibold border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 active:bg-primary"
          >
            Fashion
          </Link>
          <Link
            href="/house"
            className="flex w-1/3 items-center justify-center font-semibold border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 active:bg-primary"
          >
            House
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
