import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Search, SidebarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CgAdd, CgProfile } from "react-icons/cg"
import { IoCreateOutline } from "react-icons/io5"
import { PiBrowsers } from "react-icons/pi"


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader >
        <Image src="/logo.png" alt="logo" width={100} height={100} className="pt-10 w-1/2 items-center justify-content-center mx-auto"/>
      </SidebarHeader>
      <SidebarContent className="pl-4">
        <SidebarGroup >
          <SidebarMenuItem className="flex gap-2 pt-2">
             <Home className="w-4 h-4 align-items-center"/>
           Home
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-2">
              <Search className="w-4 h-4 align-items-center"/>
           
          Search
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-2">
            < PiBrowsers/> 
          Browse
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-2">
              <CgProfile /> 
            Profile
          </SidebarMenuItem>
          <SidebarMenuItem className="flex gap-2 pt-2">
             <CgAdd/>  
           Create
          </SidebarMenuItem>
        </SidebarGroup>
    
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}