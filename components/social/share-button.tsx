import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import CommonLink from "../link";
import Button from "../button";

export default function ShareButton({
  url,
  socialNetwork,
}: {
  url: string;
  socialNetwork: "facebook" | "twitter" | "linkedin";
}) {
  const shareUrl = encodeURIComponent(url);
  const socialNetworks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`,
  };
  const socialIcon = {
    facebook: <FiFacebook />,
    twitter: <FiTwitter />,
    linkedin: <FiLinkedin />,
  };

  return (
    <Button
      url={socialNetworks[socialNetwork]}
      externalUrl
      color="gray"
    >
      {socialIcon[socialNetwork]}
    </Button>
  );
}
