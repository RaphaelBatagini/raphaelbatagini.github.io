import { Post } from "@/definitions";
import Image from "next/image";

export default function PostThumbnail({ post, className }: { post: Post, className?: string }) {
  return (
    <Image
      src={`/static/images/posts/thumbnails/${post.id}.jpg`}
      width={522}
      height={522}
      alt="Post thumbnail"
      className={className}
      loading="eager"
    />
  );
}