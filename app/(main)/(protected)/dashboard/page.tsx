"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronLeftCircle, Cog } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { redirect } from "next/navigation";

const page = () => {
  const { user, isSignedIn } = useUser();
  if (isSignedIn) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex justify-between pt-4 gap-2 ">
          <SidebarTrigger />
<div className="w-full flex flex-col gap-10">

    <div className="w-full text-semibold text-neutral-500 text-md capitalize pt-4 items-center">
            <div className="w-full  flex justify-between ">
              <div className="text-neutral-400 text-start text-sm ml-8">
                <ChevronLeftCircle />
              </div>
              <div className="flex  items-center gap-6 w-1/2  p-4   shadow1">
                <div className="w-1/3">
                  <Avatar className="w-36 h-36  items-center  p-1 bg-linear-to-r from-gray-100 to-red-400  ">
                    <div className=" rounded-full items-center justify-center m-auto">
                      <AvatarImage
                        src={user?.imageUrl}
                        alt="foto perfil"
                        className="h-30 w-30 border-4 border-white mx-auto items-center justify-center"
                      />
                    </div>
                  </Avatar>
                </div>

                <div className="flex flex-col gap-4 bg-neutral-100 pl-6 border-2 border-neutral-300 p-4 w-full rounded-lg">
                  <div className="text-red-600 text-xl justify-center items-center pt-2 text-bold">
                    {user?.fullName}
                  </div>
                  <div className="text-thin text-neutral-400 text-md">
                    Buisiness account
                  </div>
                  <div className="text-sm text-neutral-500">
                    Entrepreneur, ...
                  </div>
                  <div className="">
                    Contact: {user?.primaryEmailAddress?.emailAddress}
                  </div>
                </div>
              </div>


              <div className="text-neutral-400 text-start text-sm mr-8 flex gap-2 flex-end">
                <div>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: {
                          height: 30,
                          width: 30,
                        },
                      },
                    }}
                  />
                </div>
                <Cog />
              </div>
            </div>
             <section >
            {/* galeria imagenes */}
            <div className="flex gap-4 mt-10 justify-center text-center">
            <div className="text-center text-neutral-700 font-medium"> Posts </div>
            <div> Highlights </div>

            </div>
          </section>
          </div>
         
</div>
      
        </main>
      </SidebarProvider>
    );
  } else {
    redirect("/not-authorized")
  }
};

export default page;
