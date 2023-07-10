import { NotionPostResults, Post } from "@/definitions";
import data from '../data.json';

export function notionCreatePostObjects(notionPostResults: NotionPostResults): Array<Post> {
  return notionPostResults.results.map((notionPost) => {
    return {
      id: notionPost.id,
      title: notionPost.properties.title.title[0].plain_text,
      cover: notionPost.properties.cover.files[0].file.url,
      categories: notionPost.properties.categories.multi_select.map((category) => category.name),
      tags: notionPost.properties.tags.multi_select.map((tag) => tag.name),
      content: notionPost.properties.content.rich_text.map((content) => content.plain_text).join(' '),
      author: {
        name: data.site.author,
      },
      publishDate: notionPost.properties.publishDate.date.start,
    };
  });
}