import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import data from '../data.json';
import Link from 'next/link';

export default function Contacts() {
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-600 mb-6">
        Feel free to reach out to me on social media or through the contact information provided below:
      </p>
      <div className="flex flex-col space-y-4 w-full lg:w-96">
        <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 rounded-lg">
            <FaLinkedin className="mr-3" />
            Connect with me on LinkedIn
          </button>
        </a>
        <a href={data.social.github} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium py-3 rounded-lg">
            <FaGithub className="mr-3" />
            Check out my GitHub repositories
          </button>
        </a>
        <a href={data.social.youtube} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 rounded-lg">
            <FaYoutube className="mr-3" />
            Subscribe to my YouTube channel
          </button>
        </a>
        <a href={data.social.twitter} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center w-full bg-blue-400 hover:bg-blue-500 text-white text-lg font-medium py-3 rounded-lg">
            <FaTwitter className="mr-3" />
            Follow me on Twitter
          </button>
        </a>
      </div>
      <p className="text-gray-600 mt-6">
        For any other inquiries or to get in touch, you can also reach me via email at <Link className='text-blue-500 hover:text-blue-600' href='mailto:raphabatagini@gmail.com'>raphabatagini@gmail.com</Link>.
      </p>
    </div>
  );
}
