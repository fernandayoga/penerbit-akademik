"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    params.delete("page");

    const scrollY = window.scrollY;

    router.push(`/produk?${params.toString()}`, { scroll: false });

    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: "instant" });
    });
  };

  const handleClear = () => {
    setQuery("");
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    params.delete("page");

    const scrollY = window.scrollY;

    router.push(`/produk?${params.toString()}`, { scroll: false });

    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: "instant" });
    });
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xl">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2"
          style={{ color: "#9ca3af" }}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari jurnal atau buku..."
          className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-200 outline-none transition-all text-sm"
          style={{
            backgroundColor: "white",
            color: "#0F172A",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#1E3A8A";
            e.target.style.boxShadow = "0 0 0 3px rgba(30,58,138,0.1)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#e5e7eb";
            e.target.style.boxShadow = "none";
          }}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </form>
  );
}
