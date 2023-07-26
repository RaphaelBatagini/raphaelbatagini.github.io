import Card from "@/components/card/card";
import { Head } from "@/components/head";
import RecentArticlesCarousel from "@/components/carousel/recent-articles-carousel";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import { Post } from "@/definitions";
import getAuthorPhotoPath from "@/helpers/get-author-photo-path";
import { getPosts } from "@/helpers/get-posts";
import Image from "next/image";
import YoutubeSection from "@/components/section/youtube";
import ContactCtaSection from "@/components/section/contact-cta";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <Head />
      <Image
        src={getAuthorPhotoPath('profile')}
        width={160}
        height={160}
        alt="Author photo"
        className="rounded-full object-cover"
      />
      <Heading level={1}>
        {process.env.NEXT_PUBLIC_SITE_TITLE}
      </Heading>
      <Paragraph noSpaces className="mb-10">
        {process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
      </Paragraph>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <Card>
          <Heading level={2} noSpaces>
            Stay Ahead with the Latest Technology Insights
          </Heading>
          <Paragraph align="justify">
            { "Welcome to my personal blog, where we explore the latest technology trends and advancements. As a senior full-stack software engineer and technical leader with 12 years of experience, I'm excited to share valuable insights and practical knowledge to keep you updated in the ever-evolving tech landscape. We'll delve into programming languages, frameworks, cloud computing, and more, all from a developer's perspective." }
          </Paragraph>
        </Card>

        <Card>
          <Heading level={2} noSpaces>
            Discover Expert Perspectives and Thoughtful Insights
          </Heading>
          <Paragraph align="justify">
            { "Explore the personal stories, career journeys, and valuable lessons learned from industry experts, developers, and technology influencers. I'll provide you with in-depth interviews, articles, and videos that shed light on their technical expertise, innovative projects, and contributions to the tech community. These inspiring individuals will share their insights, tips, and strategies for success, helping you grow professionally and navigate the world of technology." }
          </Paragraph>
        </Card>

        <Card>
          <Heading level={2} noSpaces>
            Enhance Your Skills with Practical Tutorials and Guides
          </Heading>
          <Paragraph align="justify">
            { "Together, we'll unlock your full potential as a developer with hands-on tutorials and comprehensive guides. You'll learn step-by-step how to build web applications, mobile apps, APIs, and more using the latest technologies and frameworks. From frontend to backend technologies, I'm here to support your growth as a well-rounded and versatile developer." }
          </Paragraph>
        </Card>
      </div>

      <YoutubeSection />
      <RecentArticlesCarousel posts={posts}/>
      <ContactCtaSection />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return {
    props: {
      posts: sortedPosts.slice(0, 4),
    },
  };
}