interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
