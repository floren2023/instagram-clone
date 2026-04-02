import { currentUser } from "@clerk/nextjs/server";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar1 } from "@/components/app-sidebar1";

import Posts from "@/components/posts";

const HomePage = async () => {
  const user = await currentUser();
  if (user) redirect("/dashboard");

  return (
    <SidebarProvider>
      <AppSidebar1 />
      <main className="w-full   ">
        <Navbar />

        <div className="flex flex-col gap-10 pl-10">
          <div className="text-md text-rose-700 bg-slate-100 w-40 text-medium text-center rounded-full mt-4 dark:bg-neutral-800">
            Last posts
          </div>
        </div>

        <Posts />
      </main>
    </SidebarProvider>
  );
};

export default HomePage;
