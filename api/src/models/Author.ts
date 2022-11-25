import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface AuthorDocument extends Document {
  firstName: string
  lastName: string
  books: ObjectId[]
}

const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    index: true,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    index: true,
    required: true,
    maxLength: 50,
  },
  books: {
    type: [Schema.Types.ObjectId],
    ref: 'Book',
  },
})

const Author = mongoose.model<AuthorDocument>('Author', authorSchema)

export default Author
