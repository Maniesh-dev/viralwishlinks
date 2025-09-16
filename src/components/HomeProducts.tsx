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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {productData.reverse().map((product, index) => 
          <div key={index} className="flex flex-col items-center gap-3 rounded-lg bg-[#fed7f6] p-2 cursor-pointer hover:shadow-xl" onClick={() => window.open(product.link, '_blank')}>
            <Image width={200} height={200} src={product.image} alt={product.name} className=' mt-2 rounded-lg'/>
            <Link href={product.link} target='_blank' className=" flex items-center justify-center gap-4 w-full text-center bg-[#56091f] text-white px-3 py-1 rounded-md hover:bg-[#ed9ac2]">
              <ShoppingCart className='w-4 h-4 mt-1' />
              Shop now
            </Link>
          </div>
        )}
      </div>
      <Link href="/all-collections" className="flex items-center justify-center gap-2 text-center bg-[#56091f] text-white px-3 py-1 rounded-full hover:bg-[#fed7f6] hover:text-[#56091f] cursor-pointer group-hover:bg-red-600">
        <Tags className='w-4 h-4 mt-1'/>
        See more...
      </Link>
    </div>
  )
}

export default HomeProducts