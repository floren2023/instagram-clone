import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
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
    text: " Sign up",
    variant: "primary",
  },
];
const baseStyles = "border px-4 py-1 rounded-full cursor-pointer text-sm font-[poppins] text-center w-24  mr-4 h-8";
const variants: Record<variant, string> = {
  primary: "bg-rose-900 text-white hover:bg-rose-700 transition",
  secondary:
    "hover:bg-neutral-200 text-slate-800 transition hover:text-white bg-white border-1 border-slate-900",
};

const NavSup = () => {
  return (
    <div className="flex flex-end gap-2 px-2" >
     
      <div className="flex flex-row gap-2 mt-10">
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
      <div ><ModeToggle/></div> 
      

    </div>
    
   
   
  )
}

export default NavSup