// src/app/[locale]/event/[slug]/page.tsx
import { notFound } from "next/navigation";
import { mockEventPosts } from "@/data/mockEventPosts";

interface PageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export default function EventDetailPage({ params }: PageProps) {
  const post = mockEventPosts.find(
    (item) => item.slug === params.slug
  );

  if (!post) {
    notFound();
    return null; // ⬅️ QUAN TRỌNG: tránh Next render rỗng
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* COVER */}
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-[420px] object-cover rounded-2xl mb-8"
        />

        {/* META */}
        <p className="text-sm text-gray-500 mb-2">
          {post.date} · {post.category}
        </p>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          {post.title}
        </h1>

        {/* CONTENT */}
        <article className="prose prose-lg max-w-none">
          {post.content.map((block, i) => {
            switch (block.type) {
              case "paragraph":
                return <p key={i}>{block.value}</p>;

              case "image":
                return (
                  <figure key={i}>
                    <img
                      src={block.src}
                      alt={block.caption ?? ""}
                      className="rounded-xl my-8 mx-auto max-w-3xl"
                    />
                    {block.caption && (
                      <figcaption className="text-center text-sm text-gray-500">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "list":
                return (
                  <ul key={i}>
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );

              default:
                return null;
            }
          })}
        </article>
      </div>
    </section>
  );
}
