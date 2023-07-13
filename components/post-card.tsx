import { Post } from "@/definitions";
import Image from "next/image";
import { FiCalendar, FiUser } from "react-icons/fi";
import PostThumbnail from "./post-thumbnail";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 p-4 mb-8 grid grid-cols-12 gap-4">
      {post.image && (
        <div className="col-span-12 md:col-span-4 aspect-square">
          <PostThumbnail post={post} />
        </div>
      )}
      <div className="col-span-12 md:col-span-8 flex flex-col">
        <div className="flex-grow flex flex-col">
          <p className="font-bold text-gray-950">{post.categories?.[0]}</p>
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="mb-2">{ (post.description || post.content).replace(/(<([^>]+)>)/gi, "").substring(0, 150) }...</p>
          <ul className="flex flex-wrap space-x-2 mb-2">
            {post.tags.map((tag) => (
              <li key={tag} className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                #{tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center">
            <FiUser className="inline-block mr-1" />
            <p className="text-sm text-gray-600">{post.author.name}</p>
          </div>
          <div className="flex items-center">
            <FiCalendar className="inline-block mr-1" />
            <p className="text-sm text-gray-600">{ post.publishDate }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
