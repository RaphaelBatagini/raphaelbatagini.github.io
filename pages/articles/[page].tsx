import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";
import PostCard from "@/components/post-card";
import { Post } from "@/definitions";
import fs from "fs";
import path from "path";
import { getPosts } from "@/helpers/get-posts";
import { Head } from "@/components/head";

const pageLength = 5;

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

  return (
    <div className="grid grid-cols-12">
      <Head title="Articles" description="See my blog posts" />
      <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
        <h1 className="text-3xl my-4">Articles</h1>

        {posts.map((post) => (
          <Link key={post.id} href={`/article/${post.id}`}>
            <PostCard post={post} />
          </Link>
        ))}

        {/* Pagination */}
        <div className="flex flex-col md:flex-row place-content-between">
          <div className="flex items-center justify-center">
            <p>
              Showing articles {pageLength * (currentPage - 1) + 1}-
              {pageLength * currentPage} of a total of {totalPosts} { totalPosts === 1 ? "article" : "articles" }
            </p>
          </div>
          <div className="flex mt-4 justify-center lg:mt-0">
            <button
              className={`px-2 py-1 rounded-md ${
                currentPage === 1
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-gray-700 hover:text-gray-900"
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
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-gray-700 hover:text-gray-900"
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
    </div>
  );
}

export async function getStaticPaths() {
  const articleFiles = fs.readdirSync(path.join('articles'));

  const totalPosts = articleFiles.length;
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

  const posts = getPosts();

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
