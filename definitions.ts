export interface Post {
  id: number;
  title: string;
  cover: string;
  categories: Array<string>;
  tags: Array<string>;
  content: string;
  author: string;
  publishDate: string;
}