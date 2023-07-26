import Link from "next/link";

export default function CommonLink({
  href,
  children,
  externalUrl = false,
  className,
}: {
  href: string;
  children: any;
  externalUrl?: boolean;
  className?: string;
}) {
  const classes = `text-blue-500 hover:text-blue-600 ${className}`;

  if (externalUrl) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
