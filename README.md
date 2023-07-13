# Personal Blog

This is a static blog built with Next.js, featuring articles written in Markdown with front matter specifications. It leverages GitHub Actions and GitHub Pages for seamless deployment. The blog allows you to create and manage posts in the articles folder, and it utilizes front matter metadata for each article.

## Prerequisites

Before setting up and deploying the blog, ensure that you have the following:

- Node.js (version 18 or higher) installed on your machine.

## Setup

1. Clone the repository to your local machine:

```shell
git clone https://github.com/RaphaelBatagini/personal-blog.git
```

2. Navigate to the project directory:

```shell
cd personal-blog
```

3. Install the dependencies:

```shell
npm install
```

## Configuration

The blog relies on environment variables to provide the necessary configuration. Update the environment variables in your project's environment configuration or `.env` file with the desired values:

```shell
NEXT_PUBLIC_SITE_TITLE=Your Site Title
NEXT_PUBLIC_SITE_DESCRIPTION=Your site description
NEXT_PUBLIC_SITE_AUTHOR=Your Name
NEXT_PUBLIC_SITE_EMAIL=your-email@example.com

NEXT_PUBLIC_SOCIAL_YOUTUBE=https://www.youtube.com/your-channel
NEXT_PUBLIC_SOCIAL_TWITTER=https://twitter.com/your-handle
NEXT_PUBLIC_SOCIAL_LINKEDIN=https://www.linkedin.com/in/your-profile
NEXT_PUBLIC_SOCIAL_GITHUB=https://github.com/your-username

NEXT_PUBLIC_LINK_HOME=/
NEXT_PUBLIC_LINK_ARTICLES=/articles/1
NEXT_PUBLIC_LINK_CONTACTS=/contacts

NEXT_PUBLIC_AUTHOR_NAME=Blog Author
NEXT_PUBLIC_AUTHOR_PHOTO=/path/to/author/photo.jpg
```

## Commands

These are the commands available in the project.

### Generating Images

To generate the required thumbnail and banner images for each post, run the following command:

```shell
npm run generate-images
```

This script utilizes the `scripts/generate-images.js` file to process the images located in `public/static/images/posts`. The generated images will be saved in the appropriate format for post thumbnails and banners.

### Development

To start the development server, run the following command:

```shell
npm run dev
```

This command will generate the required images using the `generate-images` script and start the development server for the blog.

### Building

To build the production-ready version of the blog, run the following command:

```shell
npm run build
```

This command will generate the required images using the `generate-images` script and build the optimized static files for deployment.

### Serve

To serve the built static files locally, you can use the following command:

```shell
npm run serve
```

This command will use the `serve` package to serve the optimized files located in the `out` directory.

## Deployment

1. Create a new branch named `gh-pages`:

```shell
git checkout -b gh-pages
```

2. Push the `gh-pages` branch to your repository:

```shell
git push origin gh-pages
```

3. Go to your repository on GitHub and navigate to the "Settings" tab.

4. In the left sidebar, click on "Pages".

5. Under "Source", select the `gh-pages` branch.

6. Click on "Save".

7. Usually, your blog will be deployed to GitHub Pages, and you can access it at `https://your-username.github.io/your-repository`. If you name your repository as `your-username.github.io`, you will be able to access it at `https://your-username.github.io`.

**Also, you have to register all environment variables as GitHub repository variables.**

## Customize

Feel free to customize the blog's design, layout, and functionality as per your requirements. You can modify the styles using Tailwind CSS and customize the components and pages in the `pages` and `components` directories.