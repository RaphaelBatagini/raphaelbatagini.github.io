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

      <div className="flex flex-col items-center justify-center my-8">
        <Heading level={2} noSpaces>
          Learning Out Loud And Sharing Along the Way
        </Heading>
        <Paragraph align="center">
          {process.env.NEXT_PUBLIC_SITE_INTRO}
        </Paragraph>
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