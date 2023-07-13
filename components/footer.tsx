import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto text-white text-center">
        <p className="text-lg mb-2">Stay Connected</p>
        <p className="text-sm">
          Follow me on social media to get the latest updates, articles, and videos on software engineering and technology.
        </p>
        <div className="flex justify-center mt-4">
          <a href={process.env.NEXT_PUBLIC_SOCIAL_TWITTER} target="_blank" rel="noopener noreferrer" className="mr-4">
            <FiTwitter aria-label='Twitter account' className="text-2xl text-white hover:text-blue-400" />
          </a>
          <a href={process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN} target="_blank" rel="noopener noreferrer" className="mr-4">
            <FiLinkedin aria-label='LinkedIn account' className="text-2xl text-white hover:text-blue-400" />
          </a>
          <a href={process.env.NEXT_PUBLIC_SOCIAL_GITHUB} target="_blank" rel="noopener noreferrer">
            <FiGithub aria-label='GitHub account' className="text-2xl text-white hover:text-blue-400" />
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_TITLE}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
