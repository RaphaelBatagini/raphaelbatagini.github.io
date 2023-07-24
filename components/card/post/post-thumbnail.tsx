import { Post } from "@/definitions";
import getPostImagePath from "@/helpers/get-post-image-path";

export default function PostThumbnail({ post, className }: { post: Post, className?: string }) {
  return (
    <div
      className={`${className} w-full aspect-video md:aspect-square bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${getPostImagePath(post, 'thumbnail')}`}}
    ></div>
  );
}