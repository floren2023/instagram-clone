
"use client"
import { UserButton, useUser } from '@clerk/nextjs';
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
    {   
        id:2,
        path:"/sign-up",
        text:" Sign Up",
        variant:"secondary",
    },
]
const baseStyles="boder px-4 py-1 rounded-md cursor-pointer"
const variants:Record<variant, string>={
    primary:"bg-black text-white hover:bg-neutral-800 transition",
    secondary:"hover:bg-neutral-400 text-neutral-800 transition hover:text-white bg-white border-1 border-neutral-900"


}

const Navbar = () => {
    const {user,isSignedIn}=useUser()
  return (
    <div className='p-2 border-b-2  border-neutral-200 flex gap-2 justify-between top-0 sticky-top  '>
      <div className="text-xl font-bold text-neutral-500 flex gap-4 items-center"><span><Image src="/logo.png" alt="logo" width={80} height={80}/></span>Blogging and sunrise</div> 
      <div className='justify-end flex gap-4'>
{!isSignedIn?(  <div className='flex items-center gap-2'>
        {links.map((link:linkTypes)=>(
            <Link key={link.id} href={link.path} className={`${baseStyles} ${variants[link.variant]}`}>{link.text}</Link>

        )

        )}
      </div>):(
      <div className="items-end gap-2 flex">
        <div className='text-semibold text-neutral-500 text-md capitalize'>{user?.fullName}</div>
        <UserButton appearance={{
            elements:{
                avatarBox:{
                    height:30,
                    width:30
                }
            }
        }}/>
      </div>)
}
<div><ModeToggle/></div>
        </div> 
    

      </div>
  )
}

export default Navbar