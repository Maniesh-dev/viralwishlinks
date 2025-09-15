"use client";

import {
  AwardIcon,
  BookMarkedIcon,
  ContactIcon,
  HomeIcon,
  PartyPopperIcon,
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
            <SheetTitle className="text-xl">Viral WishLinks</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6 font-medium">
            <Button variant="primary" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                Home
              </Link>
            </Button>

            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="#recent-event">
                <PartyPopperIcon className="w-4 h-4" />
                Recent Event
              </Link>
            </Button>

            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="#awards">
                <AwardIcon className="w-4 h-4" />
                Awards
              </Link>
            </Button>

            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="#about">
                <BookMarkedIcon className="w-4 h-4" />
                About us
              </Link>
            </Button>

            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild onClick={() => setShowMobileMenu(false)}>
              <Link href="#contact">
                <ContactIcon className="w-4 h-4" />
                Contact us
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;