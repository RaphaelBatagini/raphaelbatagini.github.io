import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '@/definitions';
import { getPostFromNotionById, getPostsFromNotion } from '@/helpers/get-posts-from-notion';
import { slugify } from '@/helpers/slugify';
import Image from 'next/image';
import { FiUser, FiCalendar, FiTag } from 'react-icons/fi';

interface ArticleProps {
  post: Post;
}

export default function Article({ post }: ArticleProps) {
  return (
    <div className="grid grid-cols-12 my-4">
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
        <div className="relative aspect-video mb-4">
          {post.cover && (
            <>
              <Image src={post.cover} alt="Cover" fill={true} className="rounded-lg mb-4 object-cover" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg" />
            </>
          )}
          <h1 className="text-3xl text-white absolute bottom-4 left-4 right-4">{post.title}</h1>
        </div>

        <div className="my-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
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
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Tags:</h2>
          <div className="flex flex-wrap mt-2">
            {post.tags.map((tag) => (
              <span key={tag} className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-lg">
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
  const posts = await getPostsFromNotion();

  const paths = posts.map((post) => ({
    params: {
      slug: slugify(post.title),
      id: post.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({ params }) => {
  const post = await getPostFromNotionById(params?.id as string);

  return {
    props: {
      post,
    },
  };
};
