// src/app/[locale]/event/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPayload } from "payload";
import config from "../../../../../payload.config";

type PageProps = {
  params: Promise<{
    id: string;
    locale: string;
  }>;
};

async function getEvent(id: string) {
  try {
    const payload = await getPayload({ config });

    let doc = null;

    // Try to find by ID first
    try {
      doc = await payload.findByID({
        collection: "events",
        id: id,
        depth: 2,
      });
    } catch (idError) {
      // If ID lookup fails, try to find by slug
      const result = await payload.find({
        collection: "events",
        where: {
          slug: { equals: id },
        },
        limit: 1,
        depth: 2,
      });

      if (result.docs && result.docs.length > 0) {
        doc = result.docs[0];
      }
    }

    if (!doc || doc.status !== "published") {
      return null;
    }

    // Transform cover image
    let coverImageUrl = "";
    if (doc.coverImage) {
      if (typeof doc.coverImage === "object") {
        coverImageUrl = doc.coverImage.cloudinaryUrl || doc.coverImage.url || "";
      } else {
        coverImageUrl = doc.coverImage;
      }
    }

    // Transform gallery
    const galleryUrls = doc.gallery?.map((g: any) => {
      if (g.image) {
        if (typeof g.image === "object") {
          return {
            url: g.image.cloudinaryUrl || g.image.url || "",
            caption: g.caption || "",
          };
        }
      }
      return null;
    }).filter(Boolean) || [];

    return {
      id: doc.id,
      title: doc.title,
      slug: doc.slug,
      date: doc.date,
      excerpt: doc.excerpt,
      cover: coverImageUrl,
      content: doc.content,
      gallery: galleryUrls,
      category: doc.category,
    };
  } catch (error) {
    console.error("Error fetching event:", error);
    return null;
  }
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getEvent(id);

  if (!post) {
    notFound();
  }

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
          {post.date} {post.category && `· ${post.category}`}
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