import Logo from "./Logo";
import NavSup from "./NavSup";
import { SidebarTrigger } from "./ui/sidebar";


const Navbar = () => {
  return (
    <div className="w-full flex gap-2 border-b-2 border-slate-100 dark:border-b-neutral-700 sticky top-0 bg-slate-50 dark:bg-neutral-900 z-50">
   <SidebarTrigger/>
    <div className="px-10 pt-4">
      {/* <div className="flex flex-col gap-2">
           <Logo/>
            
     <div className=" text-3xl font-bold     font-[dancing_script] text-rose-400 text-center ml-10 opacity-60 ">
          Post && Smile
        </div> 
      </div>*/}
 
    </div>
        <div className="w-full flex  gap-10 flex-between ">
          
        <div className="w-full flex flex-col gap-2 items-center">
          
            <div className="text-slate-500 text-3xl mt-10 font-[poppins] pl-10 font-bold ">Women. Mothers.  Art.</div>  
      
                
                <div className="text-rose-800 text-md mb-4 text-xl capitalize pl-20 font-[poppins]"> A space to create, feel, and share… unfiltered. 💜</div>
      
        </div>
        <div>
            <NavSup/>
        </div>
 
        </div>
        
      
        
    
     
    </div>
  );
};

export default Navbar;
