export default function Card({ children, ...props }: { children: React.ReactNode; className?: string; }) {
    props.className = props.className ?? "";
    props.className += " bg-gray-800 p-8 rounded-lg shadow-md";
    return <div {...props}>{children}</div>;
}