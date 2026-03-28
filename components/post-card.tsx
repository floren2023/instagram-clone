import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Photo } from "@/types/pexels-zod";

const PostCard = ({ photo }: { photo: Photo }) => {
  return (    
    <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2  p-6 lg:gap-6 md:gap-4 bg-neutral-100 text-neutral-600 m-auto rounded-sm  items-center dark:bg-neutral-800 dark:text-white w-full ">
        <div className=" aspect-video rounded-sm  items-center bg-red-400  " >
        <Image
          src={photo.src.medium}
          alt={photo.alt}  height={photo.height} width={photo.width}
          className=" aspect-video  object-cover brightness-60 rounded-sm "
        />
      </div>
       <div className=" items-center w-max-sm p-6">
        <div className="text-end justify-end w-full ">
          <Badge variant="secondary">Featured</Badge>
        </div>
        <div className="items-center">
          <h1 className="w-full  text-red-800 font-bold mb-2 font-[poppins]">
            {photo.photographer}
          </h1>
        </div>
              <div className="text-sm text-wrap w-full  font-[poppins] ">
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </div>

        <div className="mx-auto justify-start">
          <Button className="mt-4 bg-neutral-400 dark:bg-red-800 dark:text-white  w-[200] font-[poppins] text-center ">View Post</Button>
        </div>
    </div>
    </div>
      

    
  );
};

export default PostCard;


   

     
       
     
