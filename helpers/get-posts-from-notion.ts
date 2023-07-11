import { NotionPost, Post } from "@/definitions";
import { notionCreatePostObject } from "./notion-create-post-object";
import { NotionPostResults } from "@/definitions";

export async function getPostsFromNotion(): Promise<Post[]> {
  const result = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_POSTS_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NOTION_SECRET}`,
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        filter: {
          property: "published",
          checkbox: {
            equals: true,
          },
        },
      }),
    }
  );

  const posts = await result.json();

  return posts.results.map((post: NotionPost) => notionCreatePostObject(post));
}

export async function getPostFromNotionById(id: string) {
  const result = await fetch(
    `https://api.notion.com/v1/pages/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NOTION_SECRET}`,
        "Notion-Version": "2022-06-28",
      },
    }
  );

  const post = await result.json();

  return notionCreatePostObject(post);
}