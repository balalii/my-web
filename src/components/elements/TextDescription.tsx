export default function TextDescription({ children, className }: { children: React.ReactNode; className: string }) {
  return <p className={`font-medium ${className}`}>{children}</p>;
}
