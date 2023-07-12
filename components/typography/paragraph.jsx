export default function Paragraph({ children, ...props }) {
  props.className = props.className || '';
  props.className += ' text-base mt-4 mb-2 leading-relaxed';

  return <p {...props}>{children}</p>;
}