const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const axios = require("axios");
require("dotenv").config();

const API_BASE_URL = "https://api.github.com";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const POSTS_REPO = process.env.NEXT_PUBLIC_POSTS_REPO;
const IMAGES_FOLDER = "public/static/images";
const POSTS_FOLDER = "articles";

const optimizeImage = async (inputBuffer, outputPath, width, height) => {
  try {
    await sharp(inputBuffer).resize(width, height).toFile(outputPath);
  } catch (error) {
    console.error("Error optimizing image:", error);
  }
};

const getPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/repos/${POSTS_REPO}/contents/${POSTS_FOLDER}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  const folderContents = response.data;

  const folders = folderContents.filter((content) => content.type === "dir");

  return Promise.all(
    folders.map(async (folder) => {
      const folderName = folder.name;
      const markdownPath = `${POSTS_FOLDER}/${folderName}/article.md`;
      const response = await axios.get(`${API_BASE_URL}/repos/${POSTS_REPO}/contents/${markdownPath}`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      const file = response.data;

      const fileUrl = file.download_url;
      const markdownContent = await axios.get(fileUrl).then((response) => response.data);

      const { data } = matter(markdownContent);
      const imageFileName = data.image || "cover.jpg";
      const imageUrl = `${POSTS_FOLDER}/${folderName}/${imageFileName}`;
      return {
        id: folderName,
        imageUrl,
      };
    })
  );
};

async function generatePostImages() {
  console.log(`Optimizing post images...`);
  const thumbnailsFolder = `${IMAGES_FOLDER}/posts/thumbnails`;
  const bannersFolder = `${IMAGES_FOLDER}/posts/banners`;

  // Create folders if they don't exist
  if (!fs.existsSync(thumbnailsFolder)) {
    fs.mkdirSync(thumbnailsFolder, { recursive: true });
  }

  if (!fs.existsSync(bannersFolder)) {
    fs.mkdirSync(bannersFolder, { recursive: true });
  }

  const posts = await getPosts();

  for (const post of posts) {
    const thumbnailPath = `${thumbnailsFolder}/${post.id}.${post.imageUrl.split(".").pop()}`;
    const thumbnailBuffer = await getRemoteImageBuffer(post.imageUrl);
    await optimizeImage(thumbnailBuffer, thumbnailPath, 522, 522);

    const bannerPath = `${bannersFolder}/${post.id}.${post.imageUrl.split(".").pop()}`;
    const bannerBuffer = await getRemoteImageBuffer(post.imageUrl);
    await optimizeImage(bannerBuffer, bannerPath, 752, 423);

    const twitterBannerPath = `${bannersFolder}/${post.id}-twitter.${post.imageUrl.split(".").pop()}`;
    const twitterBannerBuffer = await getRemoteImageBuffer(post.imageUrl);
    await optimizeImage(twitterBannerBuffer, twitterBannerPath, 800, 800);
  }

  console.log(`Post images optimized!`);
}

async function generateAuthorImages() {
  console.log(`Optimizing author images...`);
  const authorFolder = `${IMAGES_FOLDER}/author`;

  // Create folders if they don't exist
  if (!fs.existsSync(authorFolder)) {
    fs.mkdirSync(authorFolder, { recursive: true });
  }

  const authorImage = await getRemoteImage(`${process.env.NEXT_PUBLIC_SOCIAL_GITHUB}.png`);
  optimizeImage(authorImage, `${authorFolder}/profile.png`, 160, 160);
  optimizeImage(authorImage, `${authorFolder}/twitter.png`, 800, 800);

  console.log(`Author images optimized!`);
}

const getRemoteImageBuffer = async (imageUrl) => {
  const response = await axios.get(`${API_BASE_URL}/repos/${POSTS_REPO}/contents/${imageUrl}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      Accept: "application/vnd.github.v3.raw",
    },
    responseType: "arraybuffer",
  });
  const imageBuffer = Buffer.from(response.data, "binary");

  return imageBuffer;
};

const getRemoteImage = async (url) => {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });
  const imageBuffer = Buffer.from(response.data, "binary");

  return imageBuffer;
};

generatePostImages();
generateAuthorImages();
