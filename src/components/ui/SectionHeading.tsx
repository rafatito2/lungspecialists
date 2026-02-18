interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
