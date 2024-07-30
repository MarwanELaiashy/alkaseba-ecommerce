"use client";

import { simplifiedProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useShoppingCart } from "use-shopping-cart";

const SeeAll = () => {
  const [data, setData] = useState<simplifiedProduct[]>([]);
  const { handleCartClick } = useShoppingCart();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "product"] | order(_createdAt asc) {
        _id,
        price,
        name,
        "slug":slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url
      }`;
      const data = await client.fetch(query);
      setData(data);
    }
    fetchData();
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            All Products
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          {data.map((product) => (
            <motion.div
              key={product._id}
              className="group relative"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 hover:scale-110 transition-all">
                <Image
                  src={product.imageUrl}
                  alt="product-image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="mt-4 flex flex-col">
                <div className="flex justify-between">
                  <h3 className="text-sm text-gray-500 mb-1">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm font-medium text-primary flex justify-center mb-1">
                    ${product.price}
                  </p>
                </div>
                <div>
                  <Link href={`/product/${product.slug}`}>
                    <button className="border border-primary text-primary px-4 py-2 w-full mt-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SeeAll;
