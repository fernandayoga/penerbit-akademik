import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Category from '@/models/Category'

export async function GET() {
  try {
    await connectDB()

    const categories = await Category.find({}).sort({ name: 1 }).lean()

    return NextResponse.json({ categories })
  } catch (error) {
    console.error('GET /api/categories error:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil kategori' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    await connectDB()

    const body = await request.json()
    const { name, icon, description } = body

    if (!name) {
      return NextResponse.json(
        { error: 'Nama kategori wajib diisi' },
        { status: 400 }
      )
    }

    const slugify = (await import('slugify')).default
    const slug = slugify(name, { lower: true, strict: true, locale: 'id' })

    const existing = await Category.findOne({ slug })
    if (existing) {
      return NextResponse.json(
        { error: 'Kategori sudah ada' },
        { status: 400 }
      )
    }

    const category = await Category.create({
      name,
      slug,
      icon: icon || '📚',
      description: description || '',
    })

    return NextResponse.json({ category }, { status: 201 })
  } catch (error) {
    console.error('POST /api/categories error:', error)
    return NextResponse.json(
      { error: 'Gagal menambahkan kategori' },
      { status: 500 }
    )
  }
}