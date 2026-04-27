import { Suspense } from "react";
import ProductFilter from "@/components/products/ProductFilter";
import ProductGrid from "@/components/products/ProductGrid";
import SearchBar from "@/components/products/SearchBar";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export const metadata = {
  title: "Katalog Produk — Jurnal & Buku Akademik",
  description:
    "Temukan ribuan jurnal ilmiah dan buku akademik digital dari berbagai bidang ilmu. Filter berdasarkan kategori dan tipe publikasi.",
};

async function getProducts(searchParams) {
  const params = new URLSearchParams();

  if (searchParams.type) params.set("type", searchParams.type);
  if (searchParams.category) params.set("category", searchParams.category);
  if (searchParams.q) params.set("q", searchParams.q);
  if (searchParams.page) params.set("page", searchParams.page);
  params.set("limit", "12");

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/products?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) return { products: [], pagination: {} };
  return res.json();
}

async function getCategories() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) return { categories: [] };
  return res.json();
}

export default async function ProdukPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const [{ products, pagination }, { categories }] = await Promise.all([
    getProducts(resolvedParams),
    getCategories(),
  ]);

  const currentPage = parseInt(resolvedParams.page) || 1;
  const totalPages = pagination.totalPages || 1;

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="pt-28 pb-16"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
        }}
      >
        <div className="container-custom text-center">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{
              backgroundColor: "rgba(212,175,55,0.2)",
              color: "#D4AF37",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          >
            Katalog Lengkap
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Jurnal & Buku Akademik
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Temukan publikasi ilmiah terpercaya dari para akademisi dan peneliti
            terbaik Indonesia.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Search & Filter */}
        <div
          className="bg-white rounded-2xl p-6 mb-8"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
        >
          <div className="flex flex-col gap-6">
            <Suspense fallback={null}>
              <SearchBar />
            </Suspense>
            <Suspense fallback={null}>
              <ProductFilter categories={categories} />
            </Suspense>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Menampilkan{" "}
            <span className="font-semibold" style={{ color: "#0F172A" }}>
              {pagination.total || 0}
            </span>{" "}
            produk
          </p>
          {resolvedParams.q && (
            <p className="text-sm text-gray-500">
              Hasil pencarian untuk:{" "}
              <span className="font-semibold" style={{ color: "#1E3A8A" }}>
                "{resolvedParams.q}"
              </span>
            </p>
          )}
        </div>

        {/* Product Grid */}
        <Suspense fallback={<LoadingSpinner />}>
          <ProductGrid products={products} />
        </Suspense>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <a
                href={`/produk?${new URLSearchParams({
                  ...resolvedParams,
                  page,
                }).toString()}`}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: currentPage === page ? "#1E3A8A" : "white",
                  color: currentPage === page ? "white" : "#475569",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                {page}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
