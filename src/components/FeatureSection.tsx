import { Baby, Footprints, Gift, Headset, Highlighter, Mars, Tags, Utensils, Venus, Watch } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FeatureSection = () => {
  return (
    <section className='w-full  bg-[#ed9ac2] h-auto'>
      <main className=' flex items-center justify-center gap-2 bg-[#fed7f6] px-3 py-1'>
        <div className='flex items-center justify-between gap-2 bg-[#ed9ac2] pl-1 pr-3 py-1 rounded-full font-semibold'>
          <h2 className=' bg-[#56091f] px-2 py-1 rounded-full text-white'>Fashion</h2>
          <div className='flex items-center justify-center gap-1 cursor-pointer hover:underline'>
            <Mars className='w-4 h-4'/>
            Men&apos;s
          </div>
          <p className='pb-1 text-[#56091f]'>|</p>
          <div className='flex items-center justify-center gap-1 cursor-pointer hover:underline'>
            <Venus className='w-4 h-4'/>
            Women&apos;s
          </div>
        </div>
        <div className='hidden md:flex flex-1 items-center justify-between px-5'>
          <div className='cursor-pointer flex item-center justify-center gap-2 hover:bg-[#56091f] hover:text-white px-2 py-1 rounded-lg'>
            <Baby className='w-4 h-4 mt-1' />
            Kid&apos;s
          </div>
          <div className='cursor-pointer flex item-center justify-center gap-2 hover:bg-[#56091f] hover:text-white px-2 py-1 rounded-lg'>
            <Watch className='w-4 h-4 mt-1' />
            Accessories
          </div>
          <div className='cursor-pointer flex item-center justify-center gap-2 hover:bg-[#56091f] hover:text-white px-2 py-1 rounded-lg'>
            <Footprints className='w-4 h-4 mt-1' />
            Shoes
          </div>
          <div className='cursor-pointer flex item-center justify-center gap-2 hover:bg-[#56091f] hover:text-white px-2 py-1 rounded-lg'>
            <Highlighter className='w-4 h-4 rotate-180 mt-1' />
            Beauty
          </div>
          <div className='cursor-pointer flex item-center justify-center gap-2 hover:bg-[#56091f] hover:text-white px-2 py-1 rounded-lg'>
            <Headset className='w-4 h-4 mt-1' />
            Electronics
          </div>
          <div className='cursor-pointer flex item-center justify-center gap-2 hover:bg-[#56091f] hover:text-white px-2 py-1 rounded-lg'>
            <Utensils className='w-4 h-4 mt-1'/>
            Home Finds
          </div>
          <div className='cursor-pointer flex item-center justify-center gap-2 hover:bg-[#56091f] hover:text-white px-2 py-1 rounded-lg'>
            <Gift className='w-4 h-4 mt-1' />
            Gifts
          </div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <Link href="/all-collections" className='cursor-pointer flex item-center justify-center gap-2 hover:bg-[#56091f] hover:text-white px-1 py-1 rounded-lg text-xs' >
            <Tags className='w-4 h-4 mt-1'/>
            See more...
          </Link>
        </div>
      </main>
    </section>
  )
}

export default FeatureSection