"use client";

import {
  BookMarkedIcon,
  ContactIcon,
  HomeIcon,
  LibraryBig,
  Shirt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  return (
    <div className="flex md:hidden items-center space-x-2">
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="primary" size="icon">
            <Image src="/burger-bar.png" alt="logo" width={30} height={30} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-[#ed9ac2]">
          <SheetHeader className="bg-[#fed7f6]">
            <SheetTitle>
              <Image src="/Menu_Text.png" alt="logo" width={120} height={120} />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6 font-medium">
            <Button variant="primary" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                Home
              </Link>
            </Button>

            <Button variant="primary" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="#recent-event">
                <Shirt className="w-4 h-4" />
                Latest Product
              </Link>
            </Button>

            <Button variant="primary" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="#awards">
                <LibraryBig className="w-4 h-4" />
                All Collections
              </Link>
            </Button>

            <Button variant="primary" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="#about">
                <BookMarkedIcon className="w-4 h-4" />
                About us
              </Link>
            </Button>

            <Button variant="primary" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="#contact">
                <ContactIcon className="w-4 h-4" />
                Contact us
              </Link>
            </Button>

            <p className="px-3 flex flex-col items-end">
              <span className="text-3xl uppercase font-bold">-- Because</span>
              <span className="text-xl uppercase font-bold bg-[#56091f] text-[#fed7f6] px-2">the viral Best</span>
              <span className="text-5xl uppercase font-bold">products</span>
              <span className="text-xl uppercase font-bold">don&apos;t stay</span>
              <span className="text-2xl uppercase font-bold bg-[#56091f] text-[#fed7f6] px-2">Secret for long.</span>
              {/* <span className="font-bold text-4xl">-- Because --</span> 
              <span className="my-2">the</span> 
              <span className="font-bold text-4xl bg-[#56091f] text-[#fed7f6] px-2 pt-1 pb-3 rounded-lg">
                Best products
              </span> 
              <span className="my-2">don&apos;t stay</span> 
              <span className="font-bold text-3xl text-[#56091f] bg-[#fed7f6] px-2 pt-1 pb-2 rounded-lg">
                Secret for long.
              </span> */}
            </p>
            <hr />
            <p className="px-3 text-xl text-right">So You wish, We provide you that 
              <span className="font-bold ml-1 bg-[#56091f] text-[#fed7f6] px-2">Viral Wishlinks.</span>
            </p>
            <hr />

            <div className="px-3 text-center">
              <Button variant="primary"  asChild>
                <Link href="https://www.instagram.com/viral.wishlinks/">
                  <Image src="/instagram.png" alt="logo" width={20} height={20} className="mb-10" />
                </Link>
              </Button>
              <Button variant="primary"  asChild>
                <Link href="https://youtube.com/@viral.wishlinks?si=4TGDISxpuEuvyy4Y?sub_confirmation=1">
                  <Image src="/youtube.png" alt="logo" width={20} height={20} />
                </Link>
              </Button>
              <Button variant="primary"  asChild>
                <Link href="https://pin.it/6xQYbDtl0">
                  <Image src="/social.png" alt="logo" width={20} height={20} />
                </Link>
              </Button>
              <Button variant="primary"  asChild>
                <Link href="https://whatsapp.com/channel/0029Vb6yoTSDDmFLky3FCk0L">
                  <Image src="/whatsappicon.png" alt="logo" width={20} height={20} />
                </Link>
              </Button>
              <Button variant="primary"  asChild>
                <Link href="https://t.me/+Ib68PVv9M741YTM1">
                  <Image src="/telegramicon.png" alt="logo" width={20} height={20} />
                </Link>
              </Button>
              
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;