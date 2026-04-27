import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Judul produk wajib diisi'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug wajib diisi'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ['journal', 'book'],
      required: [true, 'Tipe produk wajib diisi'],
    },
    category: {
      type: String,
      required: [true, 'Kategori wajib diisi'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Deskripsi wajib diisi'],
    },
    image: {
      type: String,
      default: '/images/placeholder.jpg',
    },
    fileUrl: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      required: [true, 'Penulis wajib diisi'],
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)

export default Product