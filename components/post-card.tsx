import { Post } from "@/types/users";

const PostCard = ({ post }: { post: Post }) => {
  return <>{post.content}</>;
};

export default PostCard;
