import { Head } from '@/components/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center my-10 lg:my-20">
      <Head title="Page not found" description="The page you're trying to access doesn't exist" />
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist. Please check the URL or try one of the following options:
      </p>
      <ul className="list-disc text-lg text-gray-600 mb-8">
        <li>Go back to the <Link href="/" className="text-blue-500 hover:text-blue-600">homepage</Link>.</li>
        <li>Visit our <Link href="/articles" className="text-blue-500 hover:text-blue-600">blog</Link> for the latest articles and news.</li>
        <li>If you think this is an error, <Link href="/contact" className="text-blue-500 hover:text-blue-600">contact me</Link>.</li>
      </ul>
    </div>
  );
}
