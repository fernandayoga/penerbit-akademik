import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Download,
  FileText,
  Send,
  User,
  Tag,
  Calendar,
} from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import {
  formatDate,
  getProductTypeLabel,
  generateWhatsAppLink,
} from "@/lib/utils";

async function getProduct(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/products/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getProduct(slug);

  if (!data || !data.product) {
    return {
      title: "Produk Tidak Ditemukan",
      description: "Halaman yang Anda cari tidak ditemukan.",
    };
  }

  const { product } = data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "AkademiJurnal";

  return {
    title: product.title,
    description: product.description.substring(0, 160),
    keywords: [
      product.title,
      product.author,
      product.category,
      product.type === "journal" ? "jurnal ilmiah" : "buku akademik",
      "publikasi akademik",
      "Indonesia",
    ],
    openGraph: {
      type: "article",
      url: `${siteUrl}/produk/${product.slug}`,
      title: product.title,
      description: product.description.substring(0, 160),
      siteName,
      images: product.image
        ? [
            {
              url: product.image,
              width: 400,
              height: 560,
              alt: product.title,
            },
          ]
        : [],
      authors: [product.author],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description.substring(0, 160),
      images: product.image ? [product.image] : [],
    },
    alternates: {
      canonical: `${siteUrl}/produk/${product.slug}`,
    },
  };
}

export default async function DetailProdukPage({ params }) {
  const { slug } = await params;
  const data = await getProduct(slug);

  if (!data || !data.product) {
    notFound();
  }

  const { product, related } = data;
  const isJournal = product.type === "journal";

  const waMessage = `Halo, saya tertarik dengan ${getProductTypeLabel(
    product.type,
  )} berjudul "${
    product.title
  }". Boleh saya mendapatkan informasi lebih lanjut?`;

  const waLink = generateWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    waMessage,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": product.type === "journal" ? "ScholarlyArticle" : "Book",
    name: product.title,
    description: product.description,
    author: {
      "@type": "Person",
      name: product.author,
    },
    publisher: {
      "@type": "Organization",
      name: process.env.NEXT_PUBLIC_SITE_NAME || "AkademiJurnal",
    },
    image: product.image,
    datePublished: product.createdAt,
    inLanguage: "id-ID",
    genre: product.category,
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      {/* Back Button */}
      <div
        className="pt-24 pb-4"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
        }}
      >
        <div className="container-custom">
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <ArrowLeft size={16} />
            Kembali ke Katalog
          </Link>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left — Cover & Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Cover */}
              <div
                className="relative w-full rounded-2xl overflow-hidden mb-6"
                style={{
                  aspectRatio: "3/4",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
                }}
              >
                {product.image &&
                product.image !== "/images/placeholder.jpg" ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-4"
                    style={{
                      background: "linear-gradient(135deg, #1E3A8A, #1e40af)",
                    }}
                  >
                    {isJournal ? (
                      <FileText size={64} color="rgba(255,255,255,0.4)" />
                    ) : (
                      <BookOpen size={64} color="rgba(255,255,255,0.4)" />
                    )}
                    <span
                      className="text-sm font-medium px-4 text-center"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {getProductTypeLabel(product.type)}
                    </span>
                  </div>
                )}

                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: isJournal ? "#D4AF37" : "#1E3A8A",
                      color: isJournal ? "#0F172A" : "white",
                    }}
                  >
                    {getProductTypeLabel(product.type)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {product.fileUrl ? (
                  <a
                    href={product.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    <Download size={18} />
                    Baca / Download
                  </a>
                ) : (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    <BookOpen size={18} />
                    Minta Akses
                  </a>
                )}

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <Send size={18} />
                  Tanya via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right — Detail */}
          <div className="lg:col-span-2">
            <div
              className="bg-white rounded-2xl p-8 mb-8"
              style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
            >
              {/* Category */}
              <span className="badge-blue mb-4 inline-block">
                {product.category}
              </span>

              {/* Title */}
              <h1
                className="text-2xl md:text-3xl font-bold mb-6 leading-tight"
                style={{ color: "#0F172A", fontFamily: "Merriweather, serif" }}
              >
                {product.title}
              </h1>

              {/* Meta info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#dbeafe" }}
                  >
                    <User size={18} style={{ color: "#1E3A8A" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Penulis</p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#0F172A" }}
                    >
                      {product.author}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#fef9c3" }}
                  >
                    <Tag size={18} style={{ color: "#D4AF37" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Kategori</p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#0F172A" }}
                    >
                      {product.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#dcfce7" }}
                  >
                    <Calendar size={18} style={{ color: "#16a34a" }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Diterbitkan</p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#0F172A" }}
                    >
                      {formatDate(product.createdAt)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2
                  className="text-lg font-bold mb-4"
                  style={{ color: "#0F172A" }}
                >
                  Deskripsi
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Related Products */}
            {related && related.length > 0 && (
              <div>
                <h2
                  className="text-xl font-bold mb-6"
                  style={{
                    color: "#0F172A",
                    fontFamily: "Merriweather, serif",
                  }}
                >
                  Produk Terkait
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {related.map((item) => (
                    <ProductCard key={item._id} product={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
