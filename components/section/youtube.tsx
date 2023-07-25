import { FiYoutube } from "react-icons/fi";
import Button from "../button";
import Heading from "../typography/heading";
import Paragraph from "../typography/paragraph";

export default function YoutubeSection() {
  return (
    <section className="pt-12 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FiYoutube className="inline-block text-4xl" />
          <Heading level={2}>Welcome to My YouTube Channel</Heading>
          <Paragraph>
            { "Join me on my YouTube journey, where I share valuable insights, tutorials, and best practices on various topics related to technology, programming, engineering, and architecture. Whether you're a beginner or a seasoned professional, you'll find a wealth of resources to enhance your skills and knowledge in these fields. Stay up to date with the latest trends and advancements in the industry and never miss a video!"}
          </Paragraph>
          <Button url={process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE!} color="red" externalUrl className="mt-4">
            Subscribe to My Channel
          </Button>
        </div>
      </div>
    </section>
  );
}
