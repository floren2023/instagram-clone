import { GrLike } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";

const Feature = () => {
  return (
      <div className="w-full flex gap-4 flex-end mb-6 justify-end text-medium">
                      
                        <div className="text-rose-800 bg-neutral-200 text-sm rounded-lg dark:bg-rose-900 p-2  dark:text-white"><GrLike /> </div>
                        <div className="text-rose-800 bg-neutral-200 text-sm rounded-lg dark:bg-rose-900 p-2  dark:text-white"> <FaRegMessage /></div>
                         <div className="text-rose-800 bg-neutral-200 text-sm rounded-lg dark:bg-rose-900 p-2  dark:text-white"><IoPricetagsOutline /> </div>
                      
                    </div>
  )
}

export default Feature