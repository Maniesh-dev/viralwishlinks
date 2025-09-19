import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ChevronRight, MoveRight, Pointer, ShoppingBag, TrendingUp } from 'lucide-react'
import ColourfulText from './ui/colourful-text'

const Hero = () => {
  return (
    <section className='w-full h-auto bg-[#ed9ac2] p-3'>
      <h2 className='text-2xl md:text-3xl font-semibold text-center py-3'>VIvek Singh</h2>
      <main className='flex flex-col md:flex-row items-center justify-between gap-3 rounded-lg w-full'>
        <div className='flex flex-col md:flex-row flex-2 justify-between items-center bg-[#fed7f6] rounded-lg'>
          <div className='p-3 flex flex-col gap-6 md:gap-3'>
            <p className='flex items-center text-center gap-2 bg-[#56091f] p-1 rounded-full text-white'>
              <span className='flex items-center justify-center gap-2 font-semibold bg-[#ed9ac2] px-2 pt-0.5 pb-1 rounded-full'>News <TrendingUp className="w-4 h-4 text-[#56091f]" /></span>
              Get latest Viral items for you!!
              <ChevronRight className="w-4 h-4" />
            </p>
            <div className='font-bold capitalize'>
              <p className='text-5xl md:text-6xl'>Discover the products</p>
              <p className='text-2xl md:text-3xl'>everyone is talking about.</p>
            </div>
            <p className='text-lg md:text-sm flex items-center gap-1'> 
              One click away from what&apos;s trending everywhere. 
              <Pointer className="md:w-4 md:h-4" />
            </p>
            <div className='flex items-center gap-3'>
              <Button variant="secondBtn" className="flex items-center gap-3 justify-start bg-[#56091f]" asChild>
                <Link href="/all-collections/girls">
                  <ShoppingBag className="w-4 h-4" />
                  Shop Now
                </Link>
              </Button>
              <Link href="/all-collections" className='flex items-center text-center gap-3 text-sm hover:underline decoration-[#56091f]'>
                see collections now
                <MoveRight className="w-4 h-4 mt-1"/> 
              </Link>
            </div>
          </div>
          <Image src="/girl_model.png" alt="logo" width={400} height={400}/>
        </div>

        <div className='flex flex-1 flex-col justify-between items-center gap-3'>
          <div className='flex flex-1 items-center justify-between px-3 h-1/2 w-full bg-[#fed7f6] rounded-lg'>
            <div className='flex flex-col gap-3'>
              <div className='space-y-2'>
                <p className='font-bold text-2xl uppercase leading-[22px] md:leading-2'>New Arrivals</p>
                <p className='text-sm tracking-[10px] uppercase'>Trending</p>
              </div>
              
              <Link href="/latest-products" className='flex items-center text-center gap-3 text-sm hover:underline decoration-[#56091f]'>
                Get!! Before It&apos;s Gone 
                <MoveRight className="w-4 h-4 mt-1"/> 
              </Link>
            </div>
            <Image src="/man_model.png" alt="logo" width={190} height={190}/>
          </div>

          <div className='flex flex-1 items-center justify-between px-3 h-1/2 w-full bg-[#fed7f6] rounded-lg'>
            <div className='flex flex-col gap-3'>
              <div className='space-y-2'>
                <p className='font-bold text-[22px] uppercase leading-[22px] md:leading-2'>Trending Now</p>
                <p className='text-sm tracking-[5px] uppercase'>For Everyone!!</p>
              </div>
              
              <Link href="/all-collections" className='flex items-center text-center gap-3 text-sm hover:underline decoration-[#56091f]'>
                Grab the Trend 
                <MoveRight className="w-4 h-4 mt-1"/> 
              </Link>
            </div>
            <Image src="/couple_model.png" alt="logo" width={200} height={200}/>
          </div>
        </div>
      </main>

      <h1 className="text-2xl md:text-5xl font-bold text-center text-[#fed7f6] relative z-2 font-sans my-5 md:my-10">
        The best <ColourfulText text="Viral Wishlinks" /> you will ever find!!
      </h1>
    </section>
  )
}

export default Hero