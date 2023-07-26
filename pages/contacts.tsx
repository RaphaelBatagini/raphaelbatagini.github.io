import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Head } from '@/components/head';
import Heading from '@/components/typography/heading';
import Paragraph from '@/components/typography/paragraph';
import Button from '@/components/button';
import CommonLink from '@/components/link';

export default function Contacts() {
  return (
    <div className="flex flex-col items-center my-10">
      <Head title="Contacts and Social Networks" description="Get in touch with me" />
      <Heading level={1}>Contacts and Social Networks</Heading>
      <Paragraph>
        Feel free to reach out to me on social media or through the contact information provided below:
      </Paragraph>
      <div className="flex flex-col space-y-4 w-full lg:w-96">
        <Button url={process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN!} color="blue" externalUrl>
            <FaLinkedin className="mr-3" />
            Connect with me on LinkedIn
        </Button>
        <Button url={process.env.NEXT_PUBLIC_SOCIAL_GITHUB!} color="gray" externalUrl>
            <FaGithub className="mr-3" />
            Check out my GitHub repositories
        </Button>
        <Button url={ process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE! } color="red" externalUrl>
            <FaYoutube className="mr-3" />
            Subscribe to my YouTube channel
        </Button>
        <Button url={ process.env.NEXT_PUBLIC_SOCIAL_TWITTER! } color="cyan" externalUrl>
            <FaTwitter className="mr-3" />
            Follow me on Twitter
        </Button>
      </div>
      <Paragraph>
        For any other inquiries or to get in touch, you can also reach me via email at <CommonLink href={`mailto:${process.env.NEXT_PUBLIC_SITE_EMAIL}`}>{process.env.NEXT_PUBLIC_SITE_EMAIL}</CommonLink>.
      </Paragraph>
    </div>
  );
}
