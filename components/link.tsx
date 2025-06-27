import Link from "next/link";

export default function CommonLink({
  href,
  children,
  externalUrl = false,
  highlight = true,
  className,
  onClick,
}: {
  href: string;
  children: any;
  externalUrl?: boolean;
  highlight?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const classes = highlight ? `text-pink-600 hover:text-gray-100 hover:underline ${className}` : `text-gray-100 hover:text-pink-600 ${className}`;

  const linkProperties = {
    className: classes,
    onClick: onClick,
    target: externalUrl ? "_blank" : undefined,
    rel: externalUrl ? "noopener noreferrer" : undefined,
  };

  return (
    <Link href={href} {...linkProperties}>
      {children}
    </Link>
  );
}
