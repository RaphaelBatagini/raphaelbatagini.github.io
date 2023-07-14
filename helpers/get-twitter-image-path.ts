import { Post } from "@/definitions";

export default function getTwitterImagePath(post: Post) {
  return `/static/images/posts/banners/${post.id}-twitter.${post.image.split('.')[1]}`;
}