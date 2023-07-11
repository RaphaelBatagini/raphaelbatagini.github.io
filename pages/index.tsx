import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import profilePicture from '../public/static/images/me.jpeg';
import data from '../data.json';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="mb-10">
        <Image src={profilePicture} width={160} height={160} alt="Technology" className="rounded-full object-cover" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center">
        <Link href="/" className="text-lg font-bold">
          {data.site.title}
        </Link>
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        {data.site.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Explore, Learn, and Innovate</h2>
          <p className="text-gray-600">
            { 'Join me on an exciting journey through the world of software engineering. As an experienced Software Engineer and Technical Lead, I\'m dedicated to pushing the boundaries of technology and solving complex problems. Together, let\'s delve into the latest trends and advancements in the industry.' }
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Discover Inspiring Content</h2>
          <p className="text-gray-600">
            { 'Dive into my blog and YouTube channel, where I share valuable insights, tutorials, and best practices. Whether you\'re a beginner or a seasoned professional, you\'ll find a wealth of resources to enhance your technical skills. Stay ahead of the game with practical tips and keep up with the ever-evolving technology landscape.' }
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Embark on Your Learning Journey</h2>
          <p className="text-gray-600">
            { 'Are you ready to take your skills to the next level? Let\'s connect and explore the limitless possibilities of software engineering. Contact me today, and let\'s embark on this exciting learning journey together.' }
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Link href="/articles" className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg">
          <FiArrowRight className="mr-2" /> Read My Blog
        </Link>
        <a href={data.social.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white text-lg font-medium px-6 py-3 rounded-lg">
          <FiPlayCircle className="mr-2" /> Watch My Videos
        </a>
      </div>
    </div>
  );
}
