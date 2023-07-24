import Link from "next/link";

export default function Button({
  children,
  color,
  url,
  target = "_self",
  rel,
  className,
}: {
  children: any;
  color: string;
  url: string;
  target?: string;
  rel?: string;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center bg-${color}-800 hover:bg-${color}-900 text-white text-lg font-medium px-6 py-3 rounded-lg ${className}`;
  return (
    <Link href={url} target={target} rel={rel} className={classes}>
      {children}
    </Link>
  );
}
