import Head from "next/head";

function CustomHead({ title, description }: { title?: string, description?: string }) {
  const titleText = process.env.NEXT_PUBLIC_SITE_TITLE + (title ? ` - ${title}` : '');
  const descriptionText = description ?? process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

  return (
    <Head>
      <title>{titleText}</title>
      <meta name="description" content={descriptionText} />
    </Head>
  )
}

export { CustomHead as Head };