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

const getPostThumbnailPath = (imageName: string): string => {
  return path.join(`/static/images/post/thumbnails/${imageName}`);
}

const getPostBannerPath = (imageName: string): string => {
  return path.join(`/static/images/post/banners/${imageName}`);
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
      name: data.site.author,
    },
    publishDate: new Date(metadata.date).toDateString(),
  };
};

