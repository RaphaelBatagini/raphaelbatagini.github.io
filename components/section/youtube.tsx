import { FiYoutube } from "react-icons/fi";
import Button from "../button";
import Heading from "../typography/heading";
import Paragraph from "../typography/paragraph";

export default function YoutubeSection() {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heading level={2}> 📺 Also on YouTube (When I Remember to Hit Record)</Heading>
          <Paragraph>
            { "Sometimes I take the same kind of content and turn it into a video - walkthroughs, breakdowns, or quick thoughts on a problem I’ve been chewing on. If you're more of a visual learner, you might like those too."}
          </Paragraph>
          <Button url={process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE!} externalUrl className="mt-4">
            Subscribe to My Channel
          </Button>
        </div>
      </div>
    </section>
  );
}
