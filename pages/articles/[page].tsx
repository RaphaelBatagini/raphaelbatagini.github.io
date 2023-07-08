import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PostCard from '@/components/post-card';
import { Post } from '@/definitions';

const mockData = Array.from({ length: 29 }, (_, index) => ({
  id: index + 1,
  title: `Post ${index + 1}`,
  cover: 'https://picsum.photos/300/300',
  tags: ['tag1', 'tag2', 'tag3'],
  categories: ['category1', 'category2'],
  author: 'Raphael Batagini',
  publishDate: '2023-07-07',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, nunc nisl aliquet nunc, vitae aliquam nisl'
}));

const pageLength = 5;

export default function Article({ posts, currentPage, totalPages }: { posts: Post[], currentPage: number, totalPages: number }) {
  const router = useRouter();

  const handlePagination = (type: 'previous' | 'next') => {
    let nextPage = currentPage;

    if (type === 'previous' && currentPage > 1) {
      nextPage = currentPage - 1;
    } else if (type === 'next' && currentPage < totalPages) {
      nextPage = currentPage + 1;
    }

    router.push(`/articles/${nextPage}`);
  };

  return (
    <div className="grid grid-cols-12 my-4">
      <div className="col-span-12 lg:col-span-6 lg:col-start-4">
        <h1 className="text-3xl my-4">
          Listing articles from {pageLength * (currentPage - 1) + 1} to {pageLength * currentPage}
        </h1>

        {posts.map((post) => (
          <Link key={post.id} href={`/articles/read/${post.id}`}>
            <PostCard post={post} />
          </Link>
        ))}

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            className={`px-2 py-1 rounded-md ${
              currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-700 hover:text-gray-900'
            }`}
            onClick={() => handlePagination('previous')}
            disabled={currentPage === 1}
          >
            <FiArrowLeft className="inline-block mr-1" />
            Previous
          </button>

          <button
            className={`ml-4 px-2 py-1 rounded-md ${
              currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-gray-700 hover:text-gray-900'
            }`}
            onClick={() => handlePagination('next')}
            disabled={currentPage === totalPages}
          >
            Next
            <FiArrowRight className="inline-block ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const totalPosts = mockData.length;
  const postsPerPage = 5;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const { page } = params;

  const postsPerPage = 5;
  const startIndex = (parseInt(page) - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const posts = mockData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(mockData.length / postsPerPage);

  return {
    props: {
      posts,
      currentPage: parseInt(page),
      totalPages,
    },
  };
}
