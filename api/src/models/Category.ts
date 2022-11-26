import mongoose, { Document } from 'mongoose'

export interface CategoryDocument extends Document {
  title: string
}

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
})

const Category = mongoose.model<CategoryDocument>('Category', categorySchema)

export default Category
