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
    <div className="flex flex-col items-center justify-center text-center my-10">
      <Head />
      <Image
        src={getAuthorPhotoPath('profile')}
        width={160}
        height={160}
        alt="Author photo"
        className="rounded-full object-cover"
      />
      <Heading level={1} color='pink-600'>
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
          { `I've been building software for over a decade, and I'm still learning new stuff all the time.` }
          <br />
          { `This blog is my place to think out loud, document what I'm discovering, and share it in case it helps someone else on a similar path.` }
          <br /><br />
          { `Whenever I can, I turn what I learn into guides, quick tips, or step-by-step tutorials. If I struggled with something, maybe you don't have to.` }
          <br />
          { `Topics range from backend to frontend, cloud to command line, depending on what I'm into at the moment.` }
          <br /><br />        
          { `Expect a mix of programming notes, thoughts on tech leadership, architecture challenges, and occasional reflections on career and life in tech.` }
          <br />
          { `No polished guru talk, just honest lessons from the trenches.` }
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