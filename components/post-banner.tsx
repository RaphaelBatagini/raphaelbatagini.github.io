import { Post } from "@/definitions";
import Image from "next/image";

export default function PostBanner({ post }: { post: Post }) {
  return (
    <Image
      src={`/static/images/posts/banners/${post.id}.jpg`}
      width={752}
      height={423}
      alt="Post banner"
      className="rounded-lg mb-4"
      priority
    />
  );
}