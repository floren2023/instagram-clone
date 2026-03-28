import Link from "next/link";

import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

type variant = "primary" | "secondary";
type linkTypes = {
  id: number;
  path: string;
  text: string;
  variant: variant;
};
const links: linkTypes[] = [
  {
    id: 1,
    path: "/sign-in",
    text: " Sign In",
    variant: "primary",
  },
];
const baseStyles = "border px-4 py-1 rounded-md cursor-pointer";
const variants: Record<variant, string> = {
  primary: "bg-neutral-200 text-red-600 hover:bg-neutral-500 transition",
  secondary:
    "hover:bg-neutral-400 text-neutral-800 transition hover:text-white bg-white border-1 border-neutral-900",
};

const Navbar = () => {
  return (
    <div className="w-full flex gap-2 items-center justify-between ">
    
        <div>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="text-5xl font-bold     font-[dancing_script] text-red-400 items-center">
          Blogging and sunrise
        </div>
      <div>
          {links.map((link: linkTypes) => (
        <Link
          key={link.id}
          href={link.path}
          className={`${baseStyles} ${variants[link.variant]}`}
        >
          {link.text}
        </Link>
      ))}
      </div>
     
    </div>
  );
};

export default Navbar;
