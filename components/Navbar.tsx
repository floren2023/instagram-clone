
"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

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
    <div className='p-5 border-b border-neutral-100 flex items-center gap-2 justify-between shadow-md'>
      <div className="text-xl font-bold text-neutral-500">Clerk Authentication</div>  
    {!isSignedIn?(  <div className='flex items-center gap-2'>
        {links.map((link:linkTypes)=>(
            <Link key={link.id} href={link.path} className={`${baseStyles} ${variants[link.variant]}`}>{link.text}</Link>

        )

        )}
      </div>):(
      <div className="items-center gap-2 flex">
        <div className='text-semibold text-neutral-400 text-sm'>{user?.fullName}</div>
        <UserButton appearance={{
            elements:{
                avatarBox:{
                    height:36,
                    width:36
                }
            }
        }}/>
      </div>)
}
      </div>
  )
}

export default Navbar