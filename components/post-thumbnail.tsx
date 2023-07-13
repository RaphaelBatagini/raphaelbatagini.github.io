import { Post } from "@/definitions";
import Image from "next/image";

export default function PostThumbnail({ post, className }: { post: Post, className?: string }) {
  return (
    <Image
      src={`/static/images/posts/thumbnails/${post.id}.${post.image.split('.').pop()}`}
      width={230}
      height={230}
      alt="Post thumbnail"
      className={className}
    />
  );
}