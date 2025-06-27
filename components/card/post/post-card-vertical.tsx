import { Post } from "@/definitions";
import PostThumbnail from "./post-thumbnail";
import Button from "@/components/button";
import Paragraph from "@/components/typography/paragraph";
import Heading from "@/components/typography/heading";
import PostTag from "@/components/post-tag";

export default function PostCardVertical({
  post,
  className,
  titleHeadingLevel,
}: {
  post: Post;
  className?: string;
  titleHeadingLevel?: number;
}) {
  return (
    <div
      key={post.id}
      className={`${className} flex flex-col bg-gray-800 rounded-lg shadow-md hover:shadow-xl p-4`}
    >
      <PostThumbnail post={post} className="rounded-lg mb-4" />
      <div className="flex flex-col">
        <div className="flex-grow flex flex-col">
          <Paragraph noSpaces className="text-gray-100">
            {post.categories?.[0]}
          </Paragraph>
          <Heading level={titleHeadingLevel ?? 3} levelSize={3} noSpaces>
            {post.title}
          </Heading>
          <Paragraph>
            {(post.description || post.content)
              .replace(/(<([^>]+)>)/gi, "")
              .substring(0, 120)}
            ...
          </Paragraph>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="mt-auto">
          <Button
            url={`/article/${post.id}`}
            className="w-full mt-3"
          >
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
}
