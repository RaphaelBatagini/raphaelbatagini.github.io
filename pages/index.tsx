import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import profilePicture from '../public/static/images/me.jpeg';
import { social } from '../data.json';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-10">
        <Image src={profilePicture} width={160} height={160} alt="Technology" className="rounded-full object-cover" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center">
        <Link href="/" className="text-lg font-bold">
          Raphael Batagini
        </Link>
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Experienced Software Engineer and Technical Lead
      </p>
      <div className="flex space-x-4">
        <Link href="/articles" className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg">
          Read My Blog
        </Link>
        <a href={social.youtube} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white text-lg font-medium px-6 py-3 rounded-lg">
            Watch My Videos
          </button>
        </a>
      </div>
      <p className="mt-6 text-gray-600">
        { 'Let\'s explore the latest in technology together and take your skills to the next level. As an experienced Software Engineer and Technical Lead, I\'m passionate about leveraging technology to solve complex problems and drive innovation. Join me on this exciting journey as we dive into various topics such as software development, cloud computing, artificial intelligence, and more.' }
      </p>
      <p className="mt-6 text-gray-600">
        { 'Through my blog and YouTube channel, I share valuable insights, tutorials, and best practices that can help you level up your technical skills. Whether you\'re a beginner or an experienced professional, you\'ll find useful resources and practical tips to enhance your knowledge and stay up-to-date with the ever-evolving technology landscape.' }
      </p>
      <div className="flex items-center mt-6">
        <span className="text-gray-500 mr-2">Ready to start your learning journey?</span>
        <Link href="/contact" className="flex items-center text-blue-500 hover:text-blue-600">
          Contact Me
          <FiArrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
