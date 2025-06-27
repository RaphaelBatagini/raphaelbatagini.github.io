import React from "react";

export default function Heading({
  level,
  levelSize,
  align = "left",
  noSpaces = false,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  level: number;
  levelSize?: number;
  align?: "left" | "center" | "right";
  noSpaces?: boolean;
  children: React.ReactNode;
}) {
  const HeadingTag = `h${level}`;

  props.className = props.className ?? '';
  props.className += ` font-bold text-gray-100 text-shadow-2xs text-shadow-pink-300 leading-tight`;

  if (!noSpaces) {
    props.className += ' mt-6 mb-2';
  }

  if (align === 'center') {
    props.className += ' text-center';
  } else if (align === 'right') {
    props.className += ' text-right';
  }

  const size = levelSize ?? level;

  switch (size) {
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
