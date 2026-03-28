import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronLeftCircle, Cog } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Posts from "@/components/posts";
import { LuAlignJustify } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";


const page = async () => {
  const user = await currentUser();
  if (!user) {
    return <div> no authorizado</div>;
  } else {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex justify-between pt-4 gap-2 ">
          <SidebarTrigger>
          <div className="text-red-400 text-md" ><LuAlignJustify /></div> 
          </SidebarTrigger>
          <div className="w-full flex flex-col gap-10">
            <div className="text-neutral-400  text-sm   gap-2 justify-end w-full flex flex-end px-10">
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
                 <div className="ml-6"><ModeToggle/></div>
                </div>
          
              <div className="w-full  flex justify-center ">
              
                <div className="flex lg:w-1/3 md:w-1/2 sm:w-full gap-2 p-4 items-center justify-center  bg-neutral-100 dark:bg-neutral-800  border-neutral-300 rounded-sm">
                  <div className=" items-center">
                    <Avatar className="w-28 h-28  items-center  p-1 bg-linear-to-r from-gray-100 to-red-400  ">
                      <div className=" rounded-full items-center justify-center m-auto">
                        <AvatarImage
                          src={user?.imageUrl}
                          alt="foto perfil"
                          className="h-24 w-24 border-4 border-white mx-auto items-center justify-center"
                        />
                      </div>
                    </Avatar>
                  </div>

                  <div className="flex flex-col gap-4     p-4  rounded-sm">
                    <div className="text-red-600 text-md justify-center items-center pt-2 text-bold font-[poppins]">
                      {user?.fullName}
                    </div>
                    
                    <div className="flex text-thin text-neutral-500 text-sm gap-4 ">
                      <Button variant="outline">
                          Follow
                    </Button>
                    <Button  variant="outline">
                      Message
                    </Button>
                    </div>
                    <div className="flex gap-4">
                      
                        <span className="text-red-800 bg-neutral-100 text-sm rounded-lg dark:bg-red-900 px-2  dark:text-white"> 1 posts</span>
                        <span className="text-red-800 bg-neutral-100 text-sm rounded-lg dark:bg-red-900 px-2  dark:text-white"> 1 follow</span>
                         <span className="text-red-800 bg-neutral-100 text-sm rounded-lg dark:bg-red-900 px-2  dark:text-white">1 following </span>
                      
                    </div>
                    
                    {/* <div className="">
                      Contact: {user?.primaryEmailAddress?.emailAddress}
                    </div> */}
                  </div>
                </div>

                
              </div>
              <div>
                {/* galeria posts */}
                <Posts />
              </div>
            </div>
         
        </main>
      </SidebarProvider>
    );
  }
  //wait until
  /* else {
    redirect("/not-authorized")
  } */
};

export default page;
