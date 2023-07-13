import Head from "next/head";
import { useRouter } from "next/router";

function CustomHead({
  title,
  description,
  imagePath,
  imageAlt,
  type = "website",
}: {
  title?: string;
  description?: string;
  imagePath?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'book' | 'profile' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station';
}) {
  const titleText =
    process.env.NEXT_PUBLIC_SITE_TITLE + (title ? ` - ${title}` : "");
  const descriptionText =
    description ?? process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
  const image = imagePath ?? process.env.NEXT_PUBLIC_AUTHOR_PHOTO;

  console.log(imagePath);

  const { asPath } = useRouter();

  return (
    <Head>
      <title>{titleText}</title>

      {/* Essential META Tags */}
      <meta name="description" content={descriptionText} />
      <meta property="og:title" content={titleText} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={asPath} />
      <meta name="twitter:card" content="summary_large_image"></meta>

      {/* Non-Essential, But Recommended */}
      <meta property="og:description" content={descriptionText} />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_TITLE} />

      { !!imageAlt && (
        <meta name="twitter:image:alt" content={ imageAlt } />
      ) }

      {/* Non-Essential, But Required for Analytics */}
      {/* <meta property="fb:app_id" content="your_app_id" />
      <meta name="twitter:site" content="@website-username"></meta> */}
    </Head>
  );
}

export { CustomHead as Head };
