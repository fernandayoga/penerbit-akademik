import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'

export async function GET(request) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const category = searchParams.get('category')
    const q = searchParams.get('q')
    const featured = searchParams.get('featured')
    const limit = parseInt(searchParams.get('limit')) || 12
    const page = parseInt(searchParams.get('page')) || 1
    const skip = (page - 1) * limit

    // Build query filter
    const filter = {}

    if (type && type !== 'all') {
      filter.type = type
    }

    if (category && category !== 'all') {
      filter.category = { $regex: category, $options: 'i' }
    }

    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: 'i' } },
        { author: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { category: { $regex: q, $options: 'i' } },
      ]
    }

    if (featured === 'true') {
      filter.featured = true
    }

    const total = await Product.countDocuments(filter)
    const products = await Product.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    return NextResponse.json({
      products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasMore: page < Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('GET /api/products error:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data produk' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    await connectDB()

    const body = await request.json()
    const { title, type, category, description, image, fileUrl, author, featured } = body

    if (!title || !type || !category || !description || !author) {
      return NextResponse.json(
        { error: 'Field wajib tidak boleh kosong' },
        { status: 400 }
      )
    }

    // Auto generate slug
    const slugify = (await import('slugify')).default
    const baseSlug = slugify(title, { lower: true, strict: true, locale: 'id' })

    // Make sure slug is unique
    let slug = baseSlug
    let count = 1
    while (await Product.findOne({ slug })) {
      slug = `${baseSlug}-${count}`
      count++
    }

    const product = await Product.create({
      title,
      slug,
      type,
      category,
      description,
      image: image || '/images/placeholder.jpg',
      fileUrl: fileUrl || '',
      author,
      featured: featured || false,
    })

    return NextResponse.json({ product }, { status: 201 })
  } catch (error) {
    console.error('POST /api/products error:', error)
    return NextResponse.json(
      { error: 'Gagal menambahkan produk' },
      { status: 500 }
    )
  }
}