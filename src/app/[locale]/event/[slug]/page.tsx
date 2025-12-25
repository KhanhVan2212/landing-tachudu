import { notFound } from "next/navigation";
import { mockEventPosts } from "@/data/mockEventPosts";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const post = mockEventPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl overflow-hidden px-4">
        {/* COVER */}
        <Image
          src={post.cover}
          alt={post.title}
          width={1200}
          height={600}
          className="mb-8 h-[420px] w-full rounded-2xl object-cover"
          priority
        />

        {/* META */}
        <p className="mb-2 text-sm text-gray-500">
          {post.date} · {post.category}
        </p>

        {/* TITLE */}
        <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
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
                    <Image
                      src={block.src}
                      alt={block.caption ?? ""}
                      width={1200}
                      height={600}
                      className="mx-auto my-8 w-full rounded-xl"
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
