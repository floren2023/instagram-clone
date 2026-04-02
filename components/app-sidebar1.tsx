import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,

  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Search } from "lucide-react";

import Link from "next/link";
import { BsCameraReels } from "react-icons/bs";

import { FiMessageCircle } from "react-icons/fi";



import { PiBrowsers } from "react-icons/pi";
import Logo from "./Logo";


export function AppSidebar1() {
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
              <span>Posts</span>
            </Link>
          </SidebarMenuItem>
         
            
         
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter >
       
      
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}
