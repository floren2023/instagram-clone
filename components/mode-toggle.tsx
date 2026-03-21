"use client"
import {Sun, Moon} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,  
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export function ModeToggle(){
    const {setTheme} =useTheme()
    return (
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon" className="items-center text-center p-1">
        <Sun className="h-6 w-6 rotate-0 transition-all items-center scale-100 dark:-rotate-90 dark:scale-0 "/>
        <Moon className="h-6 w-6 rotate-90 transition-all items-center scale-0 dark:rotate-0 dark:scale-100 "/>
        <span className="sr-only">Toggle Theme</span>
        </Button>
        </DropdownMenuTrigger>
  <DropdownMenuContent className="align-end">
   
      <DropdownMenuItem onClick={()=>setTheme("light")}>Light</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>setTheme("dark")}>Dark</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>setTheme("system")}>System</DropdownMenuItem>
   
    
  
  </DropdownMenuContent>
</DropdownMenu>
    )

}