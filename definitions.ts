export interface Post {
  id: string;
  title: string;
  description: string;
  cover: string;
  thumbnail?: string;
  banner?: string;
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

export interface NotionPostResults {
  object: string;
  results: Array<NotionPost>;
  next_cursor: string;
  has_more: boolean;
  type: string;
  page: {};
  developer_survey: string;
}

export interface NotionPost {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: string;
  icon: string;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: {
    published: {
      id: string;
      type: string;
      checkbox: boolean;
    };
    content: {
      id: string;
      type: string;
      rich_text: Array<{
        type: string;
        text: {
          content: string;
          link: string;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string;
        href: string;
      }>;
    };
    tags: {
      id: string;
      type: string;
      multi_select: Array<{
        id: string;
        name: string;
        color: string;
      }>;
    };
    title: {
      id: string;
      type: string;
      title: Array<{
        type: string;
        text: {
          content: string;
          link: string;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string;
        href: string;
      }>;
    };
    categories: {
      id: string;
      type: string;
      multi_select: Array<{
        id: string;
        name: string;
        color: string;
      }>;
    };
    publishDate: {
      id: string;
      type: string;
      date: {
        start: string;
        end: string;
        time_zone: string;
      };
    };
    cover: {
      id: string;
      type: string;
      files: Array<{
        name: string;
        type: string;
        file: {
          url: string;
          expiry_time: string;
        };
      }>;
    };
  };
  url: string;
  public_url: string;
}
