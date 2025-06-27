import React from 'react';
import Heading from '../typography/heading';
import Paragraph from '../typography/paragraph';
import Button from '../button';

const ContactCtaSection = () => {
  return (
    <section className="w-full bg-gray-800 rounded-lg py-10 mt-5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <Heading level={2}>Connect With Me 🤝</Heading>
          <Paragraph>
            {"Feel free to get in touch or connect with me on my social networks to stay updated."}
            <br/>
            {"I'd love to hear from you!"}
          </Paragraph>
          <div className="flex justify-center">
            <Button
              url={process.env.NEXT_PUBLIC_LINK_CONTACTS!}
              className="mt-5 px-12 lg:px-36"
            >Contact Me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
