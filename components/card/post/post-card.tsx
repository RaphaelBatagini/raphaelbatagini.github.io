import { Post } from "@/definitions";
import PostCardHorizontal from "./post-card-horizontal";

export default function PostCard({ post }: { post: Post }) {
  return (
    <PostCardHorizontal post={post} />
  );
}
