import Link from "next/link";
import { Post } from "@/definitions";
import PostCardVertical from "@/components/card/post/post-card-vertical";
import { FiArrowRight } from "react-icons/fi";
import Heading from "@/components/typography/heading";

export default function RecentArticlesCarousel({ posts }: { posts: Post[] }) {
  if (!posts) return null;

  return (
    <section className="py-8 w-full">
      <Heading level={2} align="center">Recent Articles</Heading>

      <div className="flex flex-col md:flex-row gap-4 justify-center pb-4">
        {posts.map((post) => (
          <PostCardVertical key={post.id} post={post} className="w-full md:w-1/2 lg:w-1/4" />
        ))}
      </div>

      <div className="text-center">
        <Link
          href={process.env.NEXT_PUBLIC_LINK_ARTICLES ?? ""}
          className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white text-lg font-medium px-6 py-3 rounded-lg"
        >
          <FiArrowRight className="mr-2" /> See all articles
        </Link>
      </div>
    </section>
  );
}
