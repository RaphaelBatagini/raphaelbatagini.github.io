# Personal Blog

This is a static blog template built with Next.js, featuring articles written in Markdown with front matter specifications. It leverages GitHub Actions and GitHub Pages for seamless deployment. The template allows you to create and manage posts in a separate repository, and it utilizes front matter metadata for each article.

## Features

- Markdown-based articles
- GitHub integration for easy deployment
- Customizable design using Tailwind CSS
- Automatic image generation for post thumbnails and banners
- Automatic sitemap generation
- SEO evaluation of the HTMLs generated
- Dynamic author information from GitHub profile

## Getting Started

Follow the step-by-step guide below to set up and deploy your personal blog.

### Prerequisites

Before you begin, make sure you have the following:

- Node.js (version 18 or higher) installed on your machine.
- A GitHub account.

### Step 1: Set Up the Project

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

### Step 2: Configure Environment Variables

The blog relies on environment variables to provide the necessary configuration. Update the environment variables in your project's environment configuration or create a `.env` file in the root directory with the following content:

```shell
# Site Configuration
NEXT_PUBLIC_SITE_ROOT=https://your-username.github.io
NEXT_PUBLIC_SITE_TITLE=Your Site Title
NEXT_PUBLIC_SITE_DESCRIPTION=Your site description
NEXT_PUBLIC_SITE_AUTHOR=Your Name
NEXT_PUBLIC_SITE_EMAIL=your-email@example.com

# Social Links
NEXT_PUBLIC_SOCIAL_YOUTUBE=https://www.youtube.com/your-channel
NEXT_PUBLIC_SOCIAL_TWITTER=https://twitter.com/your-handle
NEXT_PUBLIC_SOCIAL_LINKEDIN=https://www.linkedin.com/in/your-profile
NEXT_PUBLIC_SOCIAL_GITHUB=https://github.com/your-username

# Navigation Links
NEXT_PUBLIC_LINK_HOME=/
NEXT_PUBLIC_LINK_ARTICLES=/articles/1
NEXT_PUBLIC_LINK_CONTACTS=/contacts

# Author Information
NEXT_PUBLIC_AUTHOR_NAME=Blog Author

# GitHub Integration
NEXT_PUBLIC_POSTS_REPO=your-username/my-posts-repo

ACCESS_TOKEN=<your-github-access-token>
```

- Replace `https://your-username.github.io` with the URL where your blog will be hosted.
- Fill in the appropriate values for site title, description, author information, social links, and navigation links.
- Specify your GitHub access token, which requires the `repo` scope for reading repository files.
- Set `NEXT_PUBLIC_POSTS_REPO` to your repository containing the blog posts. If you don't have one, create a new repository to store your blog posts using the [personal-blog-posts-template](https://github.com/RaphaelBatagini/personal-blog-posts-template).

### Step 3: Generate Images

To generate the required thumbnail and banner images for each post, run the following command:

```shell
npm run generate-images
```

This script processes the images located in `public/static/images/posts` and saves them in the appropriate format.

### Step 4: Start the Development Server

To start the development server and preview your blog locally, run the following command:

```shell
npm run dev
```

This command generates the required images using the `generate-images` script and starts the development server for the blog. You can access your blog at `http://localhost:3000`.
### Step 5: Local Static Build

Build the production-ready version of the blog by running the following command:

```shell
npm run build
```

This command generates the required images using the `generate-images` script and builds the optimized static files for deployment.

You can also serve it locally with the following command:

```
npm run serve
```
### Step 6: Utilities:
#### SEO Report
Get an SEO evaluation of your website running the following command:
```
npm run validate-seo
```
It also runs at the end of the deploy pipeline.

The output will be something like this:
```
npm run validate-seo

> personal-blog@0.1.0 validate-seo
> node scripts/seo-validation/validate.js

SEO validation failed. See the table below for details:

1. out/404.html
┌─────────┬──────────────────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ (index) │         rule         │                                     message                                      │
├─────────┼──────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│    0    │ 'DESCRIPTION_LENGTH' │ 'Description length should be between 50 and 160 characters. Current length: 46' │
└─────────┴──────────────────────┴──────────────────────────────────────────────────────────────────────────────────┘

2. out/article/test-post.html
┌─────────┬──────────────────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ (index) │         rule         │                                     message                                      │
├─────────┼──────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│    0    │ 'DESCRIPTION_LENGTH' │ 'Description length should be between 50 and 160 characters. Current length: 34' │
└─────────┴──────────────────────┴──────────────────────────────────────────────────────────────────────────────────┘

3. out/articles/1.html
┌─────────┬──────────────────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ (index) │         rule         │                                     message                                      │
├─────────┼──────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│    0    │ 'DESCRIPTION_LENGTH' │ 'Description length should be between 50 and 160 characters. Current length: 17' │
└─────────┴──────────────────────┴──────────────────────────────────────────────────────────────────────────────────┘

4. out/contacts.html
┌─────────┬──────────────────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ (index) │         rule         │                                     message                                      │
├─────────┼──────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│    0    │ 'DESCRIPTION_LENGTH' │ 'Description length should be between 50 and 160 characters. Current length: 20' │
└─────────┴──────────────────────┴──────────────────────────────────────────────────────────────────────────────────┘

5. out/index.html
┌─────────┬──────────────────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ (index) │         rule         │                                     message                                      │
├─────────┼──────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│    0    │ 'DESCRIPTION_LENGTH' │ 'Description length should be between 50 and 160 characters. Current length: 40' │
└─────────┴──────────────────────┴──────────────────────────────────────────────────────────────────────────────────┘
```

### Step 7: Customize and Add Blog Posts

Feel free to customize the blog's design, layout, and functionality as per your requirements. You can modify the styles using Tailwind CSS and customize the components and pages in the `pages` and `components` directories.

To add blog posts, create Markdown files in your designated blog posts repository (`NEXT_PUBLIC_POSTS_REPO`). Each Markdown file should follow the front matter specifications with metadata and content.

Check out the [personal-blog-posts-template](https://github.com/RaphaelBatagini/personal-blog-posts-template) repository for an example of a blog posts repository structure and Markdown file format.

### Step 8: Build and Deploy

When you're ready to deploy your blog, follow these steps:

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

Usually, your blog will be deployed to GitHub Pages, and you can access it at `https://your-username.github.io/your-repository`. If you name your repository as `your-username.github.io`, you will be able to access it at `https://your-username.github.io`.

**Note**: Ensure that you have registered all environment variables prefixed with `NEXT_PUBLIC_` as GitHub repository variables and the rest as GitHub repository secrets to maintain the necessary configuration.

## Customize

Feel free to customize the blog's design, layout, and functionality as per your requirements. You can modify the styles using Tailwind CSS and customize the components and pages in the `pages` and `components` directories.

Enjoy creating and sharing your personal blog with the world!