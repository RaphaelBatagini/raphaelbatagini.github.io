import { Post } from "@/definitions";
import PostThumbnail from "./post-thumbnail";

export default function PostCardHorizontal({ post, className }: { post: Post, className?: string }) {
  return (
    <div
      key={post.id}
      className={`${className} bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 p-4 mb-8 grid grid-cols-12 gap-4`}
    >
      <PostThumbnail post={post} className="rounded-lg w-full" />
      <div className="col-span-12 md:col-span-8 flex flex-col">
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
    </div>
  );
}