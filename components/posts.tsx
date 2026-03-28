
import Link from "next/link";
import PostCard from "./post-card";
import { ImagesResults, Photo } from "@/types/pexels-zod";
import { getPhotos } from "@/lib/pexels";

    
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

const Posts =async () => {

   const images:ImagesResults|undefined=await getPhotos("nature")
  if(!images) return
    <h1 className="m-4 text-2xl font-bold">No images found</h1>

  
  return (
    <div>
      <div className=" w-full  border-t-2 border-neutral-200 dark:border-neutral-700 flex gap-10 mt-10 justify-start text-start  mx-20  text-red-500 ">
       
        {header.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="text-center  font-medium font-[poppins] border-t-2 text-neutral-600 top-0"
          >
            {item.text}
          </Link>
        ))}
      </div>
     


      <div className="flex lg:w-2/3 md:w-full sm:w-full flex-col gap-4 mx-auto ">
  {images.photos.map((photo:Photo) => (
        <div className="mt-10  " key={photo.id}>
          <PostCard photo={photo} />
        </div>
  ))
}   
      </div>
    </div>
  );
};

export default Posts;
