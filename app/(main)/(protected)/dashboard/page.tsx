import { currentUser } from "@clerk/nextjs/server";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Posts from "@/components/posts";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import { AllUsers } from "@/app/actions/posts";

const header = [
  {
    id: 1,
    text: "Posts",
    href: "/",
  },
  {
    id: 2,
    text: "Reels",
    href: "/",
  },
  {
    id: 3,
    text: "Saved",
    href: "/",
  },
  {
    id: 4,
    text: "Tagged",
    href: "/",
  },
];

const page = async () => {
  const user = await currentUser();

  const users = await AllUsers();

  if (!user) {
    return <div> no authorizado</div>;
  } else {
   const posts = users[0].posts;
    return (
      <SidebarProvider>
        <AppSidebar email={user.primaryEmailAddress?.emailAddress} />
        <main className="w-full flex justify-between pt-4 gap-2 ">
          <SidebarTrigger />

          <div className="w-full flex flex-col gap-10">
            <div className="text-neutral-400  text-sm   gap-2 justify-end w-full flex flex-end px-10">
              <div className="ml-6">
                <ModeToggle />
              </div>
            </div>

            <div className="w-full  flex justify-center mx-auto ">
              <div className="flex lg:w-1/3 md:w-1/2 sm:w-full gap-2 p-4 items-center justify-center mx-auto  ">
                <div className=" items-center mx-auto justify-center ml-20">
                  <Avatar className="w-34 h-34  items-center  p-1 bg-linear-to-r from-neutral-100 to-neutral-100 mx-auto ">
                    <div className=" rounded-full items-center justify-center ">
                      <AvatarImage
                        src="/foto2.jpg"
                        alt="foto perfil"
                        className="h-30 w-30 border-4 border-rose-800 mx-auto items-center justify-center"
                      />
                    </div>
                  </Avatar>
                </div>

                <div className="flex flex-col gap-4     p-4  rounded-sm">
                  <div className="text-rose-800 text-xl justify-center items-center pt-2 text-bold font-[poppins]">
                    {user?.fullName}
                  </div>

                  <div className="flex text-thin text-neutral-500 text-sm gap-4 ">
                    <Button variant="outline">Follow</Button>
                    <Button variant="outline">Following</Button>
                    <Button className="text-white bg-rose-800 px-4 py-1 ">
                      Post
                    </Button>
                  </div>
                  <div className="flex gap-2 w-100">
                    <div className="text-rose-800 bg-neutral-100 text-sm rounded-lg dark:bg-rose-900 px-2  dark:text-white">
                      {" "}
                      1 posts
                    </div>
                    <div className="text-rose-800 bg-neutral-100 text-sm rounded-lg dark:bg-rose-900 px-2  dark:text-white">
                      {" "}
                      1 follow
                    </div>
                    <div className="text-rose-800 bg-neutral-100 text-sm rounded-lg dark:bg-rose-900 px-2  dark:text-white">
                      1 following{" "}
                    </div>
                  </div>

                  {/* <div className="">
                      Contact: {user?.primaryEmailAddress?.emailAddress}
                    </div> */}
                </div>
              </div>
            </div>
            <div>
              <div className=" w-full  border-t-2 border-neutral-200 dark:border-neutral-700 justify-start items-start  mx-auto   ">
                <Tabs defaultValue="Posts">
                  <TabsList variant="line">
                    {header.map((item) => (
                      <TabsTrigger
                        value={item.text}
                        key={item.id}
                        className="text-center  font-medium font-[poppins] border-t-2 text-neutral-600 top-0"
                      >
                        <Link href={item.href}>{item.text}</Link>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              {/* galeria posts */}

               <Posts posts={posts} userName={user.fullName}/> 
            </div>
          </div>
        </main>
      </SidebarProvider>
    );
  }
  //wait until
  /* else {
    roseirect("/not-authorized")
  } */
};

export default page;
