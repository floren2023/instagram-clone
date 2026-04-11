import Logo from "./Logo";
import NavSup from "./NavSup";
import { SidebarTrigger } from "./ui/sidebar";


const Navbar = () => {
  return (
    <div className="w-full flex gap-2 border-b-2 border-slate-100 dark:border-b-neutral-700 sticky top-0 bg-slate-50 dark:bg-neutral-900 z-50">
   <SidebarTrigger/>
   
        <div className="w-full flex flex-col sm:w-full sm: sm:max-h-max sm:px-10">
           <div className="flex justify-end">
            <NavSup/>
        </div>
          
        <div className="w-full flex flex-col gap-2 items-center sm:justify-center">
          
            <div className="text-slate-500 text-2xl mt-2 font-[poppins]  font-bold ">Women. Mothers.  Art.</div>  
      
                
                <div className="text-rose-800 text-md mb-4 text-xl capitalize pl-20 font-[poppins]"> A space to create, feel, and share… unfiltered. 💜</div>
      
        </div>
       
 
        </div>
        
      
        
    
     
    </div>
  );
};

export default Navbar;
