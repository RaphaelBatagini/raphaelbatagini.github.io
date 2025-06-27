import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Head } from '@/components/head';
import Heading from '@/components/typography/heading';
import Paragraph from '@/components/typography/paragraph';
import Button from '@/components/button';
import CommonLink from '@/components/link';

export default function Contacts() {
  return (
    <div className="flex flex-col items-center my-10">
      <Head title="Contacts and Social Networks" description="Get in touch with me or access one of my social networks" />
      <Heading level={1}>Contacts and Social Networks</Heading>
      <Paragraph>
        Feel free to reach out to me on social media or through the contact information provided below:
      </Paragraph>
      <div className="flex flex-col space-y-4 w-full lg:w-96">
        {process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN && (
          <Button url={process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN} externalUrl>
            <FaLinkedin className="mr-3" />
            Connect with me on LinkedIn
          </Button>
        )}
        {process.env.NEXT_PUBLIC_SOCIAL_GITHUB && (
          <Button url={process.env.NEXT_PUBLIC_SOCIAL_GITHUB} externalUrl>
            <FaGithub className="mr-3" />
            Check out my GitHub repositories
          </Button>
        )}
        {process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE && (
          <Button url={process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE} externalUrl>
            <FaYoutube className="mr-3" />
            Subscribe to my YouTube channel
          </Button>
        )}
        {process.env.NEXT_PUBLIC_SOCIAL_TWITTER && (
          <Button url={process.env.NEXT_PUBLIC_SOCIAL_TWITTER} externalUrl>
            <FaTwitter className="mr-3" />
            Follow me on Twitter
          </Button>
        )}
      </div>
      <Paragraph>
        For any other inquiries or to get in touch, you can also reach me via email at <CommonLink href={`mailto:${process.env.NEXT_PUBLIC_SITE_EMAIL}`}>{process.env.NEXT_PUBLIC_SITE_EMAIL}</CommonLink>.
      </Paragraph>
    </div>
  );
}
