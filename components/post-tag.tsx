import { FiTag } from "react-icons/fi";

export default function PostTag({ tag }: { tag: string }) {
  return (
    <span className="px-3 py-1 bg-gray-600 text-white rounded-lg mr-2">
      <FiTag className="inline-block mr-1" />
      {tag}
    </span>
  );
}