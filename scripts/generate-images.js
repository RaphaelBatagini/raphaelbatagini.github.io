const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const optimizeImage = async (inputPath, outputPath, width, height) => {
  try {
    await sharp(inputPath).resize(width, height).toFile(outputPath);
  } catch (error) {
    console.error("Error optimizing image:", error);
  }
};

const getPosts = () => {
  const markdownFiles = fs.readdirSync(path.join("articles"));
  return markdownFiles.map((markdownPath) => {
    const markdownWithMeta = fs
      .readFileSync(path.join(`articles/${markdownPath}`), "utf-8")
      .replace(/\\n/g, "\n");
    const { data } = matter(markdownWithMeta);

    return { id: markdownPath.replace(".md", ""), image: data.image };
  });
};

async function generateImages() {
  console.log(`Optimizing post images...`);
  const thumbnailsFolder = "public/static/images/posts/thumbnails";
  const bannersFolder = "public/static/images/posts/banners";

  // Create folders if they don't exist
  if (!fs.existsSync(thumbnailsFolder)) {
    fs.mkdirSync(thumbnailsFolder, { recursive: true });
  }

  if (!fs.existsSync(bannersFolder)) {
    fs.mkdirSync(bannersFolder, { recursive: true });
  }

  for (const post of getPosts()) {
    // Generating thumbnail
    const thumbnailPath = `${thumbnailsFolder}/${post.id}.${post.image.split(".").pop()}`;
    await optimizeImage(
      `public/static/images/posts/${post.image}`,
      thumbnailPath,
      522,
      522
    );

    // Generating banner
    const bannerPath = `${bannersFolder}/${post.id}.${post.image.split(".").pop()}`;
    await optimizeImage(
      `public/static/images/posts/${post.image}`,
      bannerPath,
      752,
      423
    );

    // Generating twitter banner
    const twitterBannerPath = `${bannersFolder}/${post.id}-twitter.${post.image.split(".").pop()}`;
    await optimizeImage(
      `public/static/images/posts/${post.image}`,
      twitterBannerPath,
      1200,
      630
    );
  }

  console.log(`Post images optimized!`);
}

generateImages();
