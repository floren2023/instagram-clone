

import { Post } from "@/types/users";
import { Button } from "./ui/button";
import Image from "next/image";
import { BsHandThumbsDown, BsHandThumbsDownFill, BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";

function makeUrl(imageUrl: string |null|undefined) {
  if(imageUrl===null ||imageUrl===''||imageUrl===undefined)
    return null
const nameCloud=process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string
const url= `https://res.cloudinary.com/${nameCloud}/image/upload/${imageUrl}`
  return url
}

const PostCard = ({ post,userName }: { post: Post ,userName:string}) => {
  //make url from post.imageUrl
  

  const url=makeUrl(post.imageUrl)
  return (
  <div className="w-full flex gap-10 mx-20">
    <div className=" aspect-video rounded-sm  items-center bg-rose-400  ">
    {post.imageUrl&&
    
         <Image
          src={url}
          alt={post.title}
          width={400}
          height={200}

               className=" aspect-video  object-cover  rounded-sm "
        /> 
    }
      </div>
      <div className="w-1/2">
       <div>
        <div className="justify-end items-end ml-80">
          <Button className=" bg-rose-100 text-rose-800 dark:bg-neutral-800 dark:text-rose-600  w-20 font-[poppins] text-center ">
            Follow
          </Button>
        </div>
       
        <div className="items-center">

          <h1 className="w-full  text-rose-800 font-bold mb-2 font-[poppins] text-xl">
            {post.title}
          </h1>
          
        </div>
        <div className="text-sm text-wrap w-full  font-[poppins] ">
         {post.content}
         <div className="ml-20 mt-4">{userName}
            <span className="ml-4 text-sm text-start text-rose-700 italic">{post.createdAt.toLocaleDateString()}</span>
         </div>
         <div className="flex gap-2  mt-4 flex-start ml-20">
          <BsHandThumbsUp className="w-6 h-6 text-orange-400"/><BsHandThumbsUpFill className="w-6 h-6 text-rose-400"/><BsHandThumbsDown className="w-6 h-6 text-slate-400"/><BsHandThumbsDownFill className="w-6 h-6 text-gris-200"/></div>
        
        </div>

        <div className=" justify-center flex gap-2 mt-4">
          <Button className=" bg-neutral-100 text-black dark:bg-rose-800 dark:text-white  w-50 font-[poppins] text-center ">
            View Post
          </Button>

         
        </div>
        </div>
      </div>
  
      </div>

)

};

export default PostCard;


