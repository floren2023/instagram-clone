"use client";
import { Post } from "@/types/users";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  BsHandThumbsDown,
  BsHandThumbsDownFill,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
} from "react-icons/bs";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { useState } from "react";

function makeUrl(imageUrl: string | null | undefined) {
  if (imageUrl === null || imageUrl === "" || imageUrl === undefined)
    return null;
  const nameCloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;
  const url = `https://res.cloudinary.com/${nameCloud}/image/upload/${imageUrl}`;
  return url;
}

const PostCard = ({
  post,
  userName,
}: {
  post: Post;
  userName: string | null | undefined;
}) => {
  //make url from post.imageUrl
  const [like, setLike] = useState(false);
  const [unlike, setUnlike] = useState(false);
  const [comment, setComment] = useState(false);

  const url = makeUrl(post.imageUrl);
  return (
    <div className="lg:w-3/4 md:w-full sm:w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-6  mr-20 items-center justify-center mx-auto">
      <div className="   ">
        {url && (
          <Image
            src={url}
            alt={post.title}
            width={400}
            height={250}
            className=" aspect-video  object-cover  rounded-sm bg-white"
          />
        )}
      </div>
      <div className="">
        <div>
          <div className="items-center">
            <h1 className="w-full  text-rose-800 font-bold mb-2 font-[poppins] text-xl ml-4">
              {post.title}
            </h1>
          </div>
          <div className="text-sm text-wrap w-full  font-[poppins] ">
            {post.content}
            <div className="ml-20 mt-4">
              {userName}
              <span className="ml-4 text-sm text-start text-rose-700 italic">
                {post.createdAt.toLocaleDateString()}
              </span>
            </div>
            <div className="justify-end items-end ml-80">
              <Button className=" bg-rose-100 text-rose-800 dark:bg-neutral-800 dark:text-rose-600  w-20 font-[poppins] text-center ">
                Follow
              </Button>
            </div>
            <div className="flex gap-2  mt-4 flex-start ml-20">
              <Button onClick={() => setLike(true)}>
                {userName && like ? (
                  <BsHandThumbsUpFill className="w-6 h-6 text-orange-400" />
                ) : (
                  <BsHandThumbsUp className="w-6 h-6 text-rose-400" />
                )}
              </Button>
              <Button onClick={() => setUnlike(true)}>
                {userName && unlike ? (
                  <BsHandThumbsDownFill className="w-6 h-6 text-slate-400" />
                ) : (
                  <BsHandThumbsDown className="w-6 h-6 text-gris-200" />
                )}
              </Button>
              {/* //abre una ventana de comment */}
              <Button onClick={() => setComment(true)}>
                <TfiCommentsSmiley className="w-6 h-6 text-green-400" />
              </Button>
            </div>
          </div>

          <div className=" justify-center flex gap-2 mt-4">
            <Button className=" bg-neutral-200 text-black dark:bg-rose-800 dark:text-white  w-30 font-[poppins] text-center ">
              View Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
