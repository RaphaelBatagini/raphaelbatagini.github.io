import React from "react";

export default function Heading({
  level,
  noSpaces = false,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  level: number;
  noSpaces?: boolean;
  children: React.ReactNode;
}) {
  const HeadingTag = `h${level}`;

  props.className = props.className ?? '';
  props.className += ' font-bold';

  if (!noSpaces) {
    props.className += ' mt-6 mb-2';
  }

  switch (level) {
    case 1:
      props.className += ' text-4xl';
      break;
    case 2:
      props.className += ' text-3xl';
      break;
    case 3:
      props.className += ' text-2xl';
      break;
    case 4:
      props.className += ' text-xl';
      break;
    case 5:
      props.className += ' text-lg';
      break;
    case 6:
      props.className += ' text-base';
      break;
    default:
      props.className += ' text-4xl';
      break;
  }

  return <HeadingTag {...props}>{children}</HeadingTag>;
}
