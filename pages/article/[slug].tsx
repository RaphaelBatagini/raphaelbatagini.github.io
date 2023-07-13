import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/definitions";
import { slugify } from "@/helpers/slugify";
import { FiUser, FiCalendar, FiTag } from "react-icons/fi";
import { getPostBySlug, getPosts } from "@/helpers/get-posts";
import { compiler } from "markdown-to-jsx";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import Code from "@/components/typography/code";
import { Head } from "@/components/head";
import PostBanner from "@/components/post-banner";

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
      <Head title={post.title} description={post.description} imagePath={`/static/images/posts/${post.image}`} type='article' />
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
        <div className="relative aspect-video mb-4">
          {post.image && (
            <>
              <PostBanner post={post} />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg" />
            </>
          )}
          <Heading level={1} className="text-white absolute bottom-4 left-4 right-4">
            {post.title}
          </Heading>
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

        <div className="mt-8">
          <h2 className="text-xl font-bold">Tags:</h2>
          <div className="flex flex-wrap mt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-lg"
              >
                <FiTag className="inline-block mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Categories:</h2>
          <ul>
            {post.categories.map((category) => (
              <li key={slugify(category)}>{category}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();

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
  const post = getPostBySlug(params?.slug as string);

  return {
    props: {
      post,
    },
  };
};
