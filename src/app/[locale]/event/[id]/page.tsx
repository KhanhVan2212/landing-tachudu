import { notFound } from "next/navigation";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    id: string;
    locale: string;
  }>;
};

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Fetch event by ID from API
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/events/${id}`, {
    cache: 'no-store', // Or use revalidate: 60 for ISR
  });

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  if (!data.success || !data.doc) {
    notFound();
  }

  const post = data.doc;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl overflow-hidden px-4">
        {/* COVER */}
        {post.cover && (
          <Image
            src={post.cover}
            alt={post.title}
            width={1200}
            height={600}
            className="mb-8 h-[420px] w-full rounded-2xl object-cover"
            priority
          />
        )}

        {/* META */}
        <p className="mb-2 text-sm text-gray-500">
          {post.date} · {post.category}
        </p>

        {/* TITLE */}
        <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
          {post.title}
        </h1>

        {/* EXCERPT */}
        {post.excerpt && (
          <p className="mb-8 text-lg text-gray-600">
            {post.excerpt}
          </p>
        )}

        {/* CONTENT - HTML from Tiptap */}
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* GALLERY (if exists) */}
        {post.gallery && post.gallery.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Album ảnh</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {post.gallery.map((item: any, i: number) => (
                <figure key={i} className="overflow-hidden rounded-xl">
                  <Image
                    src={item.url}
                    alt={item.caption || `Gallery image ${i + 1}`}
                    width={800}
                    height={600}
                    className="h-64 w-full object-cover"
                  />
                  {item.caption && (
                    <figcaption className="mt-2 text-center text-sm text-gray-500">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}