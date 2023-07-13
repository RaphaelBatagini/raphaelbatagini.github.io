export interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: Array<string>;
  tags: Array<string>;
  content: string;
  author: Author;
  publishDate: string;
}

export interface Author {
  name: string;
  avatar?: string;
}
