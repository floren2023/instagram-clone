import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Search } from "lucide-react"
import Image from "next/image"

import { CgAdd, CgProfile } from "react-icons/cg"
import { FiMessageCircle } from "react-icons/fi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { LuAlignJustify } from "react-icons/lu"


import { PiBrowsers } from "react-icons/pi"


export function AppSidebar() {
  return (
    <Sidebar>
     
      <SidebarHeader >
        <Image src="/logo.png" alt="logo" width={100} height={100} className="pt-10 w-1/2 items-center justify-content-center mx-auto"/>
      </SidebarHeader>
      <SidebarContent className="pl-4 font-[poppins] ">
        <SidebarGroup >
          <SidebarMenuItem className="flex gap-2 pt-2 items-center">
             <Home className="w-4 h-4 align-items-center"/>
           Home
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-2 items-center">
              <Search className="w-4 h-4 align-items-center"/>
           
          Search
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-2 items-center">
            < PiBrowsers/> 
          Explore
          </SidebarMenuItem>
           <SidebarMenuItem className="flex gap-2 pt-2 items-center">
          <FiMessageCircle />
          Messages
          </SidebarMenuItem>
           <SidebarMenuItem className="flex gap-2 pt-2 items-center">
           <IoMdNotificationsOutline />
          Notifications
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-2 items-center">
              <CgProfile /> 
            Profile
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-2 items-center">
             <CgAdd/>  
           Create
          </SidebarMenuItem>
        </SidebarGroup>
    
      </SidebarContent>
      <SidebarFooter >
         <SidebarTrigger ><LuAlignJustify />Menu Off</SidebarTrigger>
        </SidebarFooter>
    </Sidebar>
  )
}