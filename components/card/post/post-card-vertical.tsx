import { Post } from "@/definitions";
import PostThumbnail from "./post-thumbnail";
import Button from "@/components/button";

export default function PostCardVertical({ post, className }: { post: Post, className?: string }) {
  return (
    <div
      key={post.id}
      className={`${className} flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 p-4`}
    >
      <PostThumbnail post={post} className="rounded-lg mb-4" />
      <div className="flex flex-col">
        <div className="flex-grow flex flex-col">
          <p className="font-bold text-gray-950">{post.categories?.[0]}</p>
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="mb-2">
            {(post.description || post.content)
              .replace(/(<([^>]+)>)/gi, "")
              .substring(0, 120)}...
          </p>
          <ul className="flex flex-wrap space-x-2 mb-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm"
              >
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="mt-auto">
          <Button color="gray" url={`/article/${post.id}`} className="w-full mt-3">Read more</Button>
        </div>
      </div>
    </div>
  );
}
