import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export type UserRole = 'user' | 'admin'

export interface UserDocument extends Document {
  firstName: string
  lastName: string
  email: string
  userName: string
  borrowedBooks: ObjectId[]
  role: UserRole
}

const userSchema = new Schema<UserDocument>({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    unique: true,
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
  },

  borrowedBooks: {
    type: [Schema.Types.ObjectId],
    ref: 'Book',
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
