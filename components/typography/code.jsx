export default function Code({ children, ...props }) {
  props.className = props.className || '';
  props.className += ' text-sm font-mono bg-gray-900 text-green-300 rounded p-2 overflow-x-auto block';
  return <code {...props}>{children}</code>;
}