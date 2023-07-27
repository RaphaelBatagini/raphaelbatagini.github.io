import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/definitions";
import { FiUser, FiCalendar, FiTag} from "react-icons/fi";
import { getPostBySlug, getPosts } from "@/helpers/get-posts";
import { compiler } from "markdown-to-jsx";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import Code from "@/components/typography/code";
import { Head } from "@/components/head";
import PostBanner from "@/components/post-banner";
import getPostImagePath from "@/helpers/get-post-image-path";
import ShareButton from "@/components/social/share-button";
import PostTag from "@/components/post-tag";

interface ArticleProps {
  post: Post;
}

export default function Article({ post }: ArticleProps) {
  const markdown = compiler(post.content, {
    wrapper: null,
    overrides: {
      h2: {
        component: Heading,
        props: { level: 2 },
      },
      h3: {
        component: Heading,
        props: { level: 3 },
      },
      h4: {
        component: Heading,
        props: { level: 4 },
      },
      h5: {
        component: Heading,
        props: { level: 5 },
      },
      h6: {
        component: Heading,
        props: { level: 6 },
      },
      p: {
        component: Paragraph,
      },
      code: {
        component: Code,
      }
    },
  });

  return (
    <div className="grid grid-cols-12 my-4">
      <Head title={post.title} description={post.description} imagePath={getPostImagePath(post, 'banner')} type='article' />
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
        <div className="relative aspect-video mb-4">
          <PostBanner post={post} />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg" />
          <div className="text-white absolute bottom-4 left-4 right-4">
            <Paragraph className="font-bold text-white" noSpaces>{ post.categories.join(' | ') }</Paragraph>
            <Heading level={1} noSpaces color="white" className="mb-2">
              {post.title}
            </Heading>
          </div>
        </div>

        <div className="my-8 flex flex-col sm:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center text-gray-600">
            <FiUser className="mr-2" />
            <p>Written by:</p>
            <p className="ml-2">{post.author.name}</p>
          </div>
          <div className="flex items-center text-gray-600">
            <FiCalendar className="mr-2" />
            <p>Published on:</p>
            <p className="ml-2">{post.publishDate}</p>
          </div>
        </div>

        <div className="prose max-w-none text-justify text-base leading-6">
          {markdown}
        </div>

        <hr className="h-px my-8 bg-gray-300 border-0" />

        <div className="mt-8">
          <Heading level={2}>Share this article:</Heading>
          <div className="flex gap-4 mt-2">
            <ShareButton url={process.env.NEXT_PUBLIC_SITE_ROOT + '/article/' + post.id} socialNetwork="facebook" />
            <ShareButton url={process.env.NEXT_PUBLIC_SITE_ROOT + '/article/' + post.id} socialNetwork="twitter" />
            <ShareButton url={process.env.NEXT_PUBLIC_SITE_ROOT + '/article/' + post.id} socialNetwork="linkedin" />
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Heading level={2} noSpaces>Tags:</Heading>
          <div className="flex items-center">
            {post.tags.map((tag) => (
              <PostTag tag={tag} key={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: {
      post,
    },
  };
};
