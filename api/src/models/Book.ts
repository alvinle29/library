import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface BookDocument extends Document {
  isbn: string
  title: string
  category: ObjectId
  description: string
  authors: ObjectId[]
  publishedYear: number
  status: string
  borrowerId: ObjectId
  borrowDate: Date
  returnDate: Date
}

const bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    index: true,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    index: true,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authors: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
    index: true,
    required: true,
  },
  publishedYear: {
    type: Number,
  },
  borrowerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  borrowDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
  },
})

const Book = mongoose.model<BookDocument>('Book', bookSchema)

export default Book
