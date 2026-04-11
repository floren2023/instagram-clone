import {
  Sidebar,
  SidebarContent,
  
  SidebarGroup,
  SidebarHeader,

  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Search } from "lucide-react";

import Link from "next/link";
import { BsCameraReels } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { CgAdd, CgProfile } from "react-icons/cg";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";


import { PiBrowsers } from "react-icons/pi";
import Logo from "./Logo";
import ButtonSignUp from "./ButtonSignUp";

export function AppSidebar({email}:{email:string|undefined}) {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="pl-4 font-[poppins] text-sm">
        <SidebarGroup>
          <SidebarMenuItem className="flex gap-2 pt-4 items-center hover:text-rose-800">
            <Link href="/" className="flex gap-2">
              <Home className="w-4 h-4 align-items-center hover:text-rose-800" />
              <span>Home</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-4 items-center hover:text-rose-800">
            <Link href="#" className="flex gap-2">
              <Search className="w-4 h-4 align-items-center hover:text-rose-800" />
              <span>Search</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-4 items-center hover:text-rose-800">
            <Link href="#" className="flex gap-2">
              <PiBrowsers className="w-4 h-4 align-items-center hover:text-rose-800" />
              <span>Explore</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-4 items-center hover:text-rose-800">
            <Link href="#" className="flex gap-2">
              <BsCameraReels className="w-4 h-4 align-items-center hover:text-rose-800" />
              <span>Reels</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-4 items-center hover:text-rose-800">
            <Link href="#" className="flex gap-2">
              <FiMessageCircle className="w-4 h-4 align-items-center hover:text-rose-800" />
              <span>Messages</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-4 items-center hover:text-rose-800">
            <Link href="#" className="flex gap-2">
              <IoMdNotificationsOutline className="w-4 h-4 align-items-center hover:text-rose-800" />
              <span>Notifications</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-4 items-center hover:text-rose-800">
            <Link href="/settings" className="flex gap-2">
              <CgProfile className="w-4 h-4 align-items-center hover:text-rose-800" />
              <span>Profile</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-4 items-center hover:text-rose-800">
            <Link href="/create" className="flex gap-2">
              <CgAdd className="w-4 h-4 align-items-center hover:text-rose-800" />
              <span>Create</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-4 items-center hover:text-rose-800">
            <CiCircleMore className="w-4 h-4 align-items-center hover:text-rose-800 font-medium" />
            <span>More</span>
          </SidebarMenuItem>
            </SidebarGroup>
          <SidebarMenuItem className="mt-20 list-none text-rose-800" >
               <ButtonSignUp  />
       
          </SidebarMenuItem>
           <SidebarMenuItem className="mt-4 list-none items-center " >
                   <SidebarTrigger />Hide Menu
           </SidebarMenuItem>
           
      
      </SidebarContent>
     
    </Sidebar>
  );
}
