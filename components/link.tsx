import Link from "next/link";

export default function CommonLink({href, children}: {href: string, children: any}) {
  return (
    <Link className='text-blue-500 hover:text-blue-600' href={href}>
      {children}
    </Link>
  );
}