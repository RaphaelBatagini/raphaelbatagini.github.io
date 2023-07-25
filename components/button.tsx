import Link from "next/link";

export default function Button({
  children,
  color,
  url,
  className,
  externalUrl = false,
}: {
  children: any;
  color: string;
  url: string;
  target?: string;
  rel?: string;
  className?: string;
  externalUrl?: boolean;
}) {
  const classes = `inline-flex items-center justify-center bg-${color}-800 hover:bg-${color}-900 text-white text-lg font-medium px-6 py-3 rounded-lg ${className}`;
  
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
