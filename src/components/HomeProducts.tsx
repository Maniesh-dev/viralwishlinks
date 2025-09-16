"use client"

import Link from 'next/link'
import React from 'react'
import { productData } from '../../productData/productData'
import Image from 'next/image'
import { ShoppingCart, Tags } from 'lucide-react'

const HomeProducts = () => {
  return (
    <div className="flex flex-col items-center pt-14 pb-5 bg-[#ed9ac2] h-auto px-3">
      <p className="text-4xl font-bold text-left w-full">Trending Now</p>

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-6 pb-14 w-full">
        {productData.reverse().map((product, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer rounded-lg bg-[#fed7f6] p-2 hover:shadow-xl"
            onClick={() => window.open(product.link, "_blank")}
          >
            <Image
              width={400}
              height={400}
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg object-cover"
            />
            <Link
              href={product.link}
              target="_blank"
              className="mt-3 flex items-center justify-center gap-2 w-full text-center bg-[#56091f] text-white px-3 py-2 rounded-md hover:bg-[#ed9ac2]"
            >
              <ShoppingCart className="w-4 h-4" />
              Shop now
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="/all-collections"
        className="flex items-center justify-center gap-2 text-center bg-[#56091f] text-white px-3 py-1 rounded-full hover:bg-[#fed7f6] hover:text-[#56091f] cursor-pointer"
      >
        <Tags className="w-4 h-4" />
        See more...
      </Link>
    </div>
  )
}

export default HomeProducts