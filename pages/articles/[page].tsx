import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";
import { Post } from "@/definitions";
import { getPosts } from "@/helpers/get-posts";
import { Head } from "@/components/head";
import PostCardVertical from "@/components/card/post/post-card-vertical";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";

const postsPerPage = 12;

export default function Article({
  posts,
  currentPage,
  totalPages,
  totalPosts,
}: {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}) {
  const router = useRouter();

  const handlePagination = (type: "previous" | "next") => {
    let nextPage = currentPage;

    if (type === "previous" && currentPage > 1) {
      nextPage = currentPage - 1;
    } else if (type === "next" && currentPage < totalPages) {
      nextPage = currentPage + 1;
    }

    router.push(`/articles/${nextPage}`);
  };

  const paginationText = `Showing articles from ${postsPerPage * (currentPage - 1) + 1} to
  ${postsPerPage * currentPage} of a total of ${totalPosts} article(s)`;

  return (
    <div>
      <Head title={`Showing all articles - Page ${currentPage}`} description={paginationText} />
      <Heading level={1} className="mb-4">Showing all articles</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCardVertical key={post.id} post={post} titleHeadingLevel={2}/>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row place-content-between my-4">
        <div className="flex items-center justify-center">
          <Paragraph className="text-gray-100">
            {paginationText}
          </Paragraph>
        </div>
        <div className="flex mt-4 justify-center lg:mt-0">
          <button
            className={`px-2 py-1 rounded-md ${
              currentPage === 1
                ? "text-gray-600 cursor-not-allowed"
                : "text-gray-100 hover:text-gray-300"
            }`}
            onClick={() => handlePagination("previous")}
            disabled={currentPage === 1}
          >
            <FiArrowLeft className="inline-block mr-1" />
            Previous
          </button>

          <button
            className={`ml-4 px-2 py-1 rounded-md ${
              currentPage === totalPages
                ? "text-gray-600 cursor-not-allowed"
                : "text-gray-100 hover:text-gray-300"
            }`}
            onClick={() => handlePagination("next")}
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
  const posts = await getPosts();

  const totalPosts = posts.length;
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

  const startIndex = (parseInt(page) - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const posts = await getPosts();

  const totalPosts = posts.length;
  const pagePosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return {
    props: {
      posts: pagePosts,
      currentPage: parseInt(page),
      totalPages,
      totalPosts,
    },
  };
}
