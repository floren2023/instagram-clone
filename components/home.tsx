import { currentUser } from "@clerk/nextjs/server";
import Navbar from "./Navbar";
import { redirect } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

const HomePage = async () => {
  const user = await currentUser();
  if (user) redirect("/dashboard");

  return <div className="flex w-full justify-between px-10">
    <Navbar />
    <div><ModeToggle/></div>

  </div>
  
};

export default HomePage;
