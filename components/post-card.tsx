
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Photo } from "@/types/pexels-zod";
import Feature from "./Feature";

const PostCard = ({ photo }: { photo: Photo }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2  p-4 lg:gap-6 md:gap-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 m-auto rounded-sm  items-center dark:bg-neutral-800 dark:text-white w-full dark:hover:bg-neutral-700 transition-colors">
      <div className=" aspect-video rounded-sm  items-center bg-rose-400  ">
        <Image
          src={photo.src.medium}
          alt={photo.alt}
          height={photo.height}
          width={photo.width}
          loading="eager"
          className=" aspect-video  object-cover brightness-60 rounded-sm "
        />
      </div>
      <div className=" items-center w-max-sm p-4">
        <div className="text-end justify-end w-full ">
          <Feature />
        </div>
        <div className="items-center">
          <h1 className="w-full  text-rose-800 font-bold mb-2 font-[poppins] text-xl">
            {photo.photographer}
          </h1>
        </div>
        <div className="text-sm text-wrap w-full  font-[poppins] ">
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </div>

        <div className=" justify-center flex gap-2 mt-4">
          <Button className=" bg-neutral-400 dark:bg-rose-800 dark:text-white  w-[150] font-[poppins] text-center ">
            View Post
          </Button>

          <Button className=" bg-neutral-300 text-rose-800 dark:bg-neutral-800 dark:text-rose-600  w-[150] font-[poppins] text-center ">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
