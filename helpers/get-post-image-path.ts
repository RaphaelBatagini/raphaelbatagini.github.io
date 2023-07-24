import { Post } from "@/definitions";

export default function getPostImagePath(post: Post, size: 'twitter' | 'thumbnail' | 'banner') {
  if (size === 'twitter') {
    return `/static/images/posts/banners/${post.id}-twitter.jpg`;
  }

  if (size === 'thumbnail') {
    return `/static/images/posts/thumbnails/${post.id}.jpg`;
  }

  return `/static/images/posts/banners/${post.id}.jpg`;
}