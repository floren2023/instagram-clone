
"use client"
import {  useUser } from '@clerk/nextjs';

import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import Image from 'next/image';

type variant="primary"|"secondary"
type linkTypes={
    id:number;
    path:string;
    text:string;
    variant:variant;

}
const links:linkTypes[]=[
    {   
        id:1,
        path:"/sign-in",
        text:" Sign In",
        variant:"primary",
    },
    /* {   
        id:2,
        path:"/sign-up",
        text:" Sign Up",
        variant:"secondary",
    }, */
]
const baseStyles="border px-4 py-1 rounded-md cursor-pointer"
const variants:Record<variant, string>={
    primary:"bg-neutral-200 text-red-600 hover:bg-neutral-500 transition",
    secondary:"hover:bg-neutral-400 text-neutral-800 transition hover:text-white bg-white border-1 border-neutral-900"


}

const Navbar = () => {
    const {user,isSignedIn}=useUser()
  return (
    <div className='w-full p-2 border-b-2  border-neutral-200 flex gap-2 justify-between top-0 sticky z-50  '>
         <div><Image src="/logo.png" alt="logo" width={100} height={100}/></div >
         <div className="text-5xl font-bold flex gap-4   font-[dancing_script] text-red-400 items-center">
       Blogging and sunrise</div> 
      <div className='justify-end flex gap-4'>
      
{!isSignedIn&&(  <div className='w-full flex gap-2 items-center justify-between '>
   
    
        {links.map((link:linkTypes)=>(
            <Link key={link.id} href={link.path} className={`${baseStyles} ${variants[link.variant]}`}>{link.text}</Link>

        )

        )}
        
      </div>)
}
<div className='mr-4'><ModeToggle/></div>
        </div> 
    </div>

     
  )
}

export default Navbar