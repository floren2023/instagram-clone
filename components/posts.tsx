
import { Post } from "@/types/users";
import PostCard from "./post-card";



const Posts = async ({ posts,userName }: { posts: Post[],userName:string }) => {
  if (!posts) return;
  <h1 className="m-4 text-2xl font-bold">No posts found</h1>;

  return (
    <div className="flex  flex-col gap-4 mx-auto  ">
      <p className="text-sm p-1 justify-center w-30 bg-neutral-50 rounded-md font-medium ml-10 text-center mt-4 font-[poppins] text-rose-700 ">  Last Posts</p>
     
      {posts.map((post:Post) => (
        <div className="mt-10 w-full " key={post.id}>
          <PostCard post={post} userName={userName}/>
        </div>
      ))}
    </div>
  );
};

export default Posts;
