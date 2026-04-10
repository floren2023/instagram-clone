
"use server"
import { currentUser } from "@clerk/nextjs/server";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar1 } from "@/components/app-sidebar1";

import Posts from "@/components/posts";

import { AllUsers } from "../actions/posts";


 
const HomePage = async () => {
  const user = await currentUser();
    
  if (user) redirect("/dashboard");

const users=await AllUsers()
 const posts = users[0].posts;
  return (
    <SidebarProvider>
      <AppSidebar1 />
      <main className="w-full   ">
        <Navbar />

        <div className="flex flex-col gap-10 pl-10">
         
             <Posts posts={posts} userName=""/>
        </div>

        
      </main>
    </SidebarProvider>
  );
};

export default HomePage;
