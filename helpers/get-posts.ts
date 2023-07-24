import { Post } from '@/definitions';
import matter from 'gray-matter';
import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const POSTS_REPO = process.env.NEXT_PUBLIC_POSTS_REPO;
const POSTS_FOLDER = 'articles';


export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get(`${API_BASE_URL}/repos/${POSTS_REPO}/contents/${POSTS_FOLDER}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  const folderContents = response.data;

  const folders = folderContents.filter((content: any) => content.type === 'dir');

  return Promise.all(
    folders.map(async (folder: any) => {
      const folderName = folder.name;
      const markdownPath = `${POSTS_FOLDER}/${folderName}/article.md`;
      const response = await axios.get(`${API_BASE_URL}/repos/${POSTS_REPO}/contents/${markdownPath}`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      const file = response.data;

      const fileUrl = file.download_url;
      const markdownContent = await axios.get(fileUrl).then((response) => response.data);

      return markdownFileToPost(folderName, markdownContent);
    })
  );
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const folderName = slug;
  const markdownPath = `${POSTS_FOLDER}/${folderName}/article.md`;

  const response = await axios.get(`${API_BASE_URL}/repos/${POSTS_REPO}/contents/${markdownPath}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  const file = response.data;

  const fileUrl = file.download_url;
  const markdownContent = await axios.get(fileUrl).then((response) => response.data);

  return markdownFileToPost(slug, markdownContent);
};

export const markdownFileToPost = (slug: string, markdownContent: string): Post => {
  const { data: metadata, content } = matter(markdownContent);

  return {
    id: slug,
    title: metadata.title,
    description: metadata.description,
    categories: metadata.categories,
    tags: metadata.tags,
    content,
    author: {
      name: process.env.NEXT_PUBLIC_AUTHOR_NAME ?? '',
    },
    publishDate: new Date(metadata.date).toDateString(),
  };
};
