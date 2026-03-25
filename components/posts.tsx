import Link from "next/link";
import PostCard from "./post-card";

const header = [
  {
    id: 1,
    text: "Posts",
    href: "/",
  },
  {
    id: 2,
    text: "Highlights",
    href: "/",
  },
  {
    id: 3,
    text: "Bookmarked",
    href: "/",
  },
];

const Posts = () => {
  return (
    <div>
      <div className="flex gap-4 mt-10 justify-start text-start p-4 pl-20 text-red-500">
        {header.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="text-center  font-medium font-[poppins]"
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-4 mx-10">
        <div className=" ">
          <PostCard />
        </div>
         <div className=" ">
          <PostCard />
        </div>
         <div className=" ">
          <PostCard />
        </div>
         <div className=" ">
          <PostCard />
        </div>
         <div className=" ">
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default Posts;
