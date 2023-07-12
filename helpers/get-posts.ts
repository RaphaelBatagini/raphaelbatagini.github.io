import fs from 'fs';
import path from 'path';
import { Post } from '@/definitions';
import matter from 'gray-matter';
import data from '../data.json';

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
    cover: metadata.image?? null,
    thumbnail: metadata.image?? null,
    banner: metadata.image?? null,
    categories: metadata.categories,
    tags: metadata.tags,
    content,
    author: {
      name: data.site.author,
    },
    publishDate: new Date(metadata.date).toDateString(),
  };
};

