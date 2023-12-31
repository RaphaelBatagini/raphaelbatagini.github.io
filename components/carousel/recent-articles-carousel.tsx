import { Post } from "@/definitions";
import PostCardVertical from "@/components/card/post/post-card-vertical";
import Heading from "@/components/typography/heading";
import Paragraph from "../typography/paragraph";
import Button from "../button";

export default function RecentArticlesCarousel({ posts }: { posts: Post[] }) {
  if (!posts) return null;

  return (
    <section className="py-8 w-full">
      <Heading level={2} align="center" noSpaces className="mb-4">Recent Articles</Heading>

      <Paragraph align="center" className="mb-8">
        { "I believe that knowledge empowers, and my aim is to equip you with the tools you need to thrive in this fast-paced technological era." }
        <br/>
        { "Valuable insights, tutorials, and best practices." }
      </Paragraph>

      <div className="flex flex-col md:flex-row gap-4 justify-center pb-4">
        {posts.map((post) => (
          <PostCardVertical key={post.id} post={post} className="w-full md:w-1/2 lg:w-1/4" />
        ))}
      </div>

      <div className="text-center mt-4">
        <Button url={process.env.NEXT_PUBLIC_LINK_ARTICLES ?? ""} color="blue">
          See all articles
        </Button>
      </div>
    </section>
  );
}
