import { NotionPost, Post } from "@/definitions";
import data from '../data.json';

export function notionCreatePostObject(notionPost: NotionPost): Post {
  const content = notionPost.properties.content.rich_text.map((text) => {
    let html = '';

    if (text.type === 'text') {
      let textContent = text.text.content;

      if (text.text.link) {
        textContent = `<a href="${text.text.link}">${textContent}</a>`;
      }

      if (text.annotations.bold) {
        textContent = `<strong>${textContent}</strong>`;
      }

      if (text.annotations.italic) {
        textContent = `<em>${textContent}</em>`;
      }

      if (text.annotations.strikethrough) {
        textContent = `<del>${textContent}</del>`;
      }

      if (text.annotations.underline) {
        textContent = `<u>${textContent}</u>`;
      }

      if (text.annotations.code) {
        textContent = `<code>${textContent}</code>`;
      }

      if (text.annotations.color !== 'default') {
        const color = text.annotations.color;
        textContent = `<span style="color: ${color}">${textContent}</span>`;
      }

      textContent = textContent.replace(/\n/g, '<br>');

      html += textContent;
    }

    return html;
  }).join(' ');

  return {
    id: notionPost.id,
    title: notionPost.properties.title.title[0].plain_text,
    description: '',
    cover: notionPost.properties.cover.files[0].file.url,
    categories: notionPost.properties.categories.multi_select.map((category) => category.name),
    tags: notionPost.properties.tags.multi_select.map((tag) => tag.name),
    content: content,
    author: {
      name: data.site.author,
    },
    publishDate: notionPost.properties.publishDate.date.start,
  };
}
