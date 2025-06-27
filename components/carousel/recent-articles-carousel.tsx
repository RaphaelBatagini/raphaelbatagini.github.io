import { Post } from "@/definitions";
import PostCardVertical from "@/components/card/post/post-card-vertical";
import Heading from "@/components/typography/heading";
import Paragraph from "../typography/paragraph";
import Button from "../button";

export default function RecentArticlesCarousel({ posts }: { posts: Post[] }) {
  if (!posts) return null;

  return (
    <section className="py-8 w-full">
      <Heading level={2} align="center" noSpaces className="mb-4">📚 Recent Articles</Heading>

      <Paragraph align="center" className="mb-8">
        { `I don't have a content calendar or SEO strategy. I write when I have something worth saying or when I need to think something through.` }
        <br/>
        { `Either way, thanks for being here. Hope you find something useful.` }
      </Paragraph>

      <div className="flex flex-col md:flex-row gap-4 justify-center pb-4">
        {posts.map((post) => (
          <PostCardVertical key={post.id} post={post} className="w-full md:w-1/2 lg:w-1/4" />
        ))}
      </div>

      <div className="text-center mt-4">
        <Button url={process.env.NEXT_PUBLIC_LINK_ARTICLES ?? ""}>
          See all articles
        </Button>
      </div>
    </section>
  );
}
