import fs from 'fs';
import path from 'path';
import { Post } from '@/definitions';
import matter from 'gray-matter';

export const getPosts = () => {
  const markdownFiles = fs.readdirSync(path.join('articles'));
  return markdownFiles.map((markdownFile) => markdownFileToPost(path.join(`articles/${markdownFile}`)));
}

export const getPostBySlug = (slug: string): Post => {
  const markdownPath = path.join(`articles/${slug}.md`);
  return markdownFileToPost(markdownPath);
}

export const markdownFileToPost = (markdownPath: string): Post => {
  const markdownWithMeta = fs.readFileSync(markdownPath, 'utf-8').replace(/\\n/g, '\n');
  const { data: metadata, content } = matter(markdownWithMeta);

  return {
    id: markdownPath.replace('.md', '').split('/')[1],
    title: metadata.title,
    description: metadata.description,
    image: metadata.image,
    categories: metadata.categories,
    tags: metadata.tags,
    content,
    author: {
      name: process.env.NEXT_PUBLIC_AUTHOR_NAME ?? '',
    },
    publishDate: new Date(metadata.date).toDateString(),
  };
};

