export default function Paragraph({ children, noSpaces = false, ...props }: { children: React.ReactNode, noSpaces?: boolean, className?: string }) {
  props.className = props.className ?? '';
  props.className += ' text-base leading-relaxed';

  if (!noSpaces) {
    props.className += ' mt-4 mb-2';
  }

  return <p {...props}>{children}</p>;
}