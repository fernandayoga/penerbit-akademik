import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(request, { params }) {
  try {
    await connectDB();

    const { slug } = await params;

    const product = await Product.findOne({ slug }).lean();

    if (!product) {
      return NextResponse.json(
        { error: "Produk tidak ditemukan" },
        { status: 404 },
      );
    }

    // Get related products (same category, exclude current)
    const related = await Product.find({
      category: product.category,
      slug: { $ne: slug },
    })
      .limit(4)
      .lean();

    return NextResponse.json({ product, related });
  } catch (error) {
    console.error("GET /api/products/[slug] error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data produk" },
      { status: 500 },
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const apiKey = request.headers.get("x-api-key");
    if (apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    await connectDB();

    const { slug } = await params;
    const body = await request.json();

    const product = await Product.findOneAndUpdate(
      { slug },
      { ...body },
      { new: true, runValidators: true },
    );

    if (!product) {
      return NextResponse.json(
        { error: "Produk tidak ditemukan" },
        { status: 404 },
      );
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error("PUT /api/products/[slug] error:", error);
    return NextResponse.json(
      { error: "Gagal mengupdate produk" },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const apiKey = request.headers.get("x-api-key");
    if (apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    await connectDB();

    const { slug } = await params;

    const product = await Product.findOneAndDelete({ slug });

    if (!product) {
      return NextResponse.json(
        { error: "Produk tidak ditemukan" },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Produk berhasil dihapus" });
  } catch (error) {
    console.error("DELETE /api/products/[slug] error:", error);
    return NextResponse.json(
      { error: "Gagal menghapus produk" },
      { status: 500 },
    );
  }
}
