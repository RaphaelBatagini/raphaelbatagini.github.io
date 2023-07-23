import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function ShareButton({ url, socialNetwork }: { url: string, socialNetwork: 'facebook' | 'twitter' | 'linkedin' }) {
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
    <a href={socialNetworks[socialNetwork]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium p-3 rounded-full">
      {socialIcon[socialNetwork]}
    </a>
  );
}