import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

// Helper upload ke Cloudinary
async function uploadToCloudinary(file) {
  const cloudinary = (await import("@/lib/cloudinary")).default;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "akademi-jurnal/covers",
          transformation: [
            { width: 400, height: 560, crop: "fill", gravity: "center" },
            { quality: "auto", fetch_format: "auto" },
          ],
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      )
      .end(buffer);
  });
}

// GET — ambil semua produk
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const category = searchParams.get("category");
    const q = searchParams.get("q");
    const featured = searchParams.get("featured");
    const limit = parseInt(searchParams.get("limit")) || 12;
    const page = parseInt(searchParams.get("page")) || 1;
    const skip = (page - 1) * limit;

    const filter = {};

    if (type && type !== "all") filter.type = type;
    if (category && category !== "all") {
      filter.category = { $regex: category, $options: "i" };
    }
    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: "i" } },
        { author: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ];
    }
    if (featured === "true") filter.featured = true;

    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    return NextResponse.json({
      products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasMore: page < Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data produk" },
      { status: 500 },
    );
  }
}

// POST — tambah produk baru (support form-data & JSON)
export async function POST(request) {
  try {
    // const apiKey = request.headers.get("x-api-key");
    // if (apiKey !== process.env.API_SECRET_KEY) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }
    await connectDB();

    const contentType = request.headers.get("content-type") || "";

    let title, type, category, description, author, fileUrl, featured;
    let imageUrl = "/images/placeholder.jpg";

    if (contentType.includes("multipart/form-data")) {
      // ── Handle form-data (dengan atau tanpa gambar) ──
      const formData = await request.formData();

      title = formData.get("title");
      type = formData.get("type");
      category = formData.get("category");
      description = formData.get("description");
      author = formData.get("author");
      fileUrl = formData.get("fileUrl") || "";
      featured = formData.get("featured") === "true";

      const file = formData.get("image");

      if (file && file.size > 0) {
        // Validasi tipe file
        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        if (!allowedTypes.includes(file.type)) {
          return NextResponse.json(
            { error: "Format gambar harus JPG, PNG, atau WebP" },
            { status: 400 },
          );
        }

        // Validasi ukuran (max 2MB)
        const maxSize = 2 * 1024 * 1024;
        if (file.size > maxSize) {
          return NextResponse.json(
            { error: "Ukuran gambar maksimal 2MB" },
            { status: 400 },
          );
        }

        // Upload ke Cloudinary
        const uploaded = await uploadToCloudinary(file);
        imageUrl = uploaded.secure_url;
      }
    } else {
      // ── Handle JSON biasa (tanpa gambar) ──
      const body = await request.json();
      title = body.title;
      type = body.type;
      category = body.category;
      description = body.description;
      author = body.author;
      fileUrl = body.fileUrl || "";
      featured = body.featured || false;
      imageUrl = body.image || "/images/placeholder.jpg";
    }

    // Validasi field wajib
    if (!title || !type || !category || !description || !author) {
      return NextResponse.json(
        {
          error:
            "Field wajib tidak boleh kosong: title, type, category, description, author",
        },
        { status: 400 },
      );
    }

    // Validasi type
    if (!["journal", "book"].includes(type)) {
      return NextResponse.json(
        { error: 'Type harus "journal" atau "book"' },
        { status: 400 },
      );
    }

    // Generate slug unik
    const slugify = (await import("slugify")).default;
    const baseSlug = slugify(title, {
      lower: true,
      strict: true,
      locale: "id",
    });

    let slug = baseSlug;
    let count = 1;
    while (await Product.findOne({ slug })) {
      slug = `${baseSlug}-${count}`;
      count++;
    }

    // Simpan ke MongoDB
    const product = await Product.create({
      title,
      slug,
      type,
      category,
      description,
      image: imageUrl,
      fileUrl,
      author,
      featured,
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    console.error("POST /api/products error:", error);
    return NextResponse.json(
      { error: "Gagal menambahkan produk" },
      { status: 500 },
    );
  }
}
