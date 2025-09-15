import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";


async function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b bg-[#fed7f6] z-50 px-0 md:px-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={100}/>
            </Link>
          </div>

          <DesktopNavbar />
          
          <div className="flex items-center justify-between gap-2 bg-[#56091f] px-1 py-1 rounded-full text-white ">
            <p className="font-semibold bg-[#ed9ac2] px-3 py-1 rounded-full">
              Join Channel
            </p>
            <div className="flex items-center justify-between gap-2">
              <Link href="/contact">
                <Image src={"/whatsapp.png"} alt="logo" width={29} height={29}/>
              </Link>
              <Link href="/contact">
                <Image src={"/telegram.png"} alt="logo" width={30} height={30}/>
              </Link>
            </div>
          </div>

          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;