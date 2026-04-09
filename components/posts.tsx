
import { Post } from "@/types/users";
import PostCard from "./post-card";



const Posts = async ({ posts }: { posts: Post[] }) => {
  if (!posts) return;
  <h1 className="m-4 text-2xl font-bold">No posts found</h1>;

  return (
    <div className="flex lg:w-2/3 md:w-full sm:w-full flex-col gap-4 mx-auto ">
      posts
      {posts.map((post:Post) => (
        <div className="mt-10  " key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
