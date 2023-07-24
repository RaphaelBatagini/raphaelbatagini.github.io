export default function Paragraph({
  children,
  align = "left",
  noSpaces = false,
  ...props
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "right" | "justify";
  noSpaces?: boolean;
  className?: string;
}) {
  props.className = props.className ?? "";
  props.className += " text-base text-gray-600 leading-relaxed";

  if (!noSpaces) {
    props.className += " mt-4 mb-2";
  }

  if (align === "center") {
    props.className += " text-center";
  } else if (align === "right") {
    props.className += " text-right";
  } else if (align === "justify") {
    props.className += " text-justify";
  }

  return <p {...props}>{children}</p>;
}
