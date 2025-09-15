import { HomeIcon, PartyPopperIcon, AwardIcon, BookMarkedIcon, Shirt, LibraryBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function DesktopNavbar() {

  return ( <>
    <div className="hidden md:flex items-center space-x-4">

      <Button variant="primary" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      <Button variant="primary" className="flex items-center gap-2" asChild>
        <Link href="#recent-event">
          <Shirt className="w-4 h-4" />
          <span className="hidden lg:inline">Latest Product</span>
        </Link>
      </Button>

      <Button variant="primary" className="flex items-center gap-2" asChild>
        <Link href="#awards">
          <LibraryBig className="w-4 h-4" />
          <span className="hidden lg:inline">All Collections</span>
        </Link>
      </Button>
      
      <Button variant="primary" className="flex items-center gap-2" asChild>
        <Link href="#about">
          <BookMarkedIcon className="w-4 h-4" />
          <span className="hidden lg:inline">About us</span>
        </Link>
      </Button>

      
    </div>
    
    </>
  );
}
export default DesktopNavbar;