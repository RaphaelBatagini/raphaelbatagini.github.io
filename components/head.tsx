import Head from "next/head";
import { useRouter } from "next/router";

function CustomHead({
  title,
  description,
  imagePath,
  type = "website",
}: {
  title?: string;
  description?: string;
  imagePath?: string;
  type?: 'website' | 'article' | 'book' | 'profile' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station';
}) {
  const titleText =
    process.env.NEXT_PUBLIC_SITE_TITLE + (title ? ` - ${title}` : "");
  const descriptionText =
    description ?? process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
  const image = imagePath ?? process.env.NEXT_PUBLIC_AUTHOR_PHOTO;
  const { asPath } = useRouter();

  return (
    <Head>
      <title>{titleText}</title>
      <meta name="description" content={descriptionText} />
      <meta property="og:title" content={titleText} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={asPath} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image"></meta>
    </Head>
  );
}

export { CustomHead as Head };
