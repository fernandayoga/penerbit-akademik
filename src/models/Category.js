import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama kategori wajib diisi'],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug wajib diisi'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    icon: {
      type: String,
      default: '📚',
    },
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema)

export default Category