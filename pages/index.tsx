import Card from "@/components/card/card";
import { Head } from "@/components/head";
import RecentArticlesCarousel from "@/components/carousel/recent-articles-carousel";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import { Post } from "@/definitions";
import getAuthorPhotoPath from "@/helpers/get-author-photo-path";
import { getPosts } from "@/helpers/get-posts";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";

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
            Explore the Latest Technologies and Trends
          </Heading>
          <Paragraph align="justify">
            { "Stay up to date with the ever-evolving technology landscape. Discover the latest advancements in programming languages, frameworks, cloud computing, artificial intelligence, and more. Explore the transformative potential of emerging technologies such as blockchain, Internet of Things (IoT), and augmented reality. Learn about industry trends, best practices, and real-world use cases from experts in the field. Whether you're a seasoned developer or just starting your coding journey, our platform provides valuable insights and resources to keep you at the forefront of technology innovation." }
          </Paragraph>
        </Card>

        <Card>
          <Heading level={2} noSpaces>
            Learn from Industry Experts and Thought Leaders
          </Heading>
          <Paragraph align="justify">
            { "Gain knowledge and inspiration from renowned developers, architects, and technology influencers. Dive into their personal stories, career journeys, and valuable lessons learned along the way. Explore their technical expertise, innovative projects, and contributions to the tech community. Our platform brings you exclusive interviews, articles, and podcasts featuring industry experts who share their insights, tips, and strategies for success. Learn from the best and discover new perspectives that will fuel your professional growth and help you navigate the ever-changing world of technology." }
          </Paragraph>
        </Card>

        <Card>
          <Heading level={2} noSpaces>
            Enhance Your Skills with Practical Tutorials and Guides
          </Heading>
          <Paragraph align="justify">
            { "Unlock your full potential as a developer with hands-on tutorials and comprehensive guides. Learn step-by-step how to build web applications, mobile apps, APIs, and more using the latest technologies and frameworks. Dive into frontend development with HTML, CSS, and JavaScript, and explore advanced frontend libraries such as React and Vue.js. Master backend technologies like Node.js, Python, and Java to build scalable and secure server-side applications. Our tutorials cover a wide range of topics, from database management to DevOps practices, empowering you to become a well-rounded and versatile developer." }
          </Paragraph>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Link
          href={process.env.NEXT_PUBLIC_LINK_ARTICLES ?? ""}
          className="flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white text-lg font-medium px-6 py-3 rounded-lg"
        >
          <FiArrowRight className="mr-2" /> Read My Blog
        </Link>
        <a
          href={process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-red-800 hover:bg-red-900 text-white text-lg font-medium px-6 py-3 rounded-lg"
        >
          <FiPlayCircle className="mr-2" /> Watch My Videos
        </a>
      </div>

      <RecentArticlesCarousel posts={posts}/>
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