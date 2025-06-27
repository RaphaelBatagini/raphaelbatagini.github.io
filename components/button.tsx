import Link from "next/link";

export default function Button({
  children,
  url,
  className,
  externalUrl = false,
}: {
  children: any;
  url: string;
  target?: string;
  rel?: string;
  className?: string;
  externalUrl?: boolean;
}) {
  const classes = `inline-flex items-center justify-center bg-pink-600 hover:bg-gray-100 text-gray-100 hover:text-pink-600 text-lg font-medium px-6 py-3 rounded-lg ${className}`;
  
  if (externalUrl) return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  );
  
  return (
    <Link href={url} className={classes}>
      {children}
    </Link>
  );
}
