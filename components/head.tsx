import Head from "next/head";
import data from "../data.json";

function CustomHead({ title, description }: { title?: string, description?: string }) {
  const titleText = data.site.title + (title ? ` - ${title}` : '');
  const descriptionText = description || data.site.description;

  return (
    <Head>
      <title>{titleText}</title>
      <meta name="description" content={descriptionText} />
    </Head>
  )
}

export { CustomHead as Head };