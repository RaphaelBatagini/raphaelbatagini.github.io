// a heading component which can be of any level
// --------------------------------------------------------
export default function Heading({ level, children, ...props }) {
  const HeadingTag = `h${level}`;

  props.className = props.className || '';
  
  // use tailwind classes to style the heading
  switch (level) {
    case 1:
      props.className += ' text-4xl font-bold mt-6 mb-2';
      break;
    case 2:
      props.className += ' text-3xl font-bold mt-6 mb-2';
      break;
    case 3:
      props.className += ' text-2xl font-bold mt-6 mb-2';
      break;
    case 4:
      props.className += ' text-xl font-bold mt-6 mb-2';
      break;
    case 5:
      props.className += ' text-lg font-bold mt-6 mb-2';
      break;
    case 6:
      props.className += ' text-base font-bold mt-6 mb-2';
      break;
    default:
      props.className += ' text-4xl font-bold mt-6 mb-2';
      break;
  }

  return <HeadingTag {...props}>{children}</HeadingTag>;
}