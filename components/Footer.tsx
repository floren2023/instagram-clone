import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { Separator } from "@/components/ui/separator";

import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full  mt-10 bg-linear-to-br from-gray-50 to-rose-50 font-[InterSans] text-gray-500">
      <div className=" mx-auto flex w-full items-center justify-between gap-3 px-4 py-2 max-md:flex-col sm:px-6 z-50 sm:py-2 md:gap-4 md:py-2 ">
        <div className="lg:pl-50 md:pl-20 sm:pl-0 lg:w-1/2 sm:w-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 sm:text-center sm:items-center gap-5 whitespace-nowrap text-center sm:justify-center">
        
          <Link href="/">
            <div className="text-xl text-pink-800 font-semibold font-[InterSans]  text-center p-4">
              P&S
            </div>
          </Link>
          <Link
            href="#"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100 text-center"
          >
            About
          </Link>
          <Link
            href="/about"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Features
          </Link>
          <Link
            href="#"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Works
          </Link>
          <Link
            href="#"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Career
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#">
            <FiFacebook className="size-5" />
          </Link>
          <Link href="#">
            <FaInstagram className="size-5" />
          </Link>
          <Link href="#">
            <RiTwitterXLine className="size-5" />
          </Link>
          <Link href="#">
            <SlSocialYoutube className="size-5" />
          </Link>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex w-full justify-center px-4 py-4 sm:px-4  bg-rose-100 h-20">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`} Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
