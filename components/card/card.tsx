export default function Card({ children, ...props }: { children: React.ReactNode; className?: string; }) {
    props.className = props.className ?? "";
    props.className += " bg-white p-8 rounded-lg shadow-md";
    return <div {...props}>{children}</div>;
}