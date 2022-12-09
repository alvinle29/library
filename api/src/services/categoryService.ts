import Category, { CategoryDocument } from '../models/Category'

const findAllCategory = async (): Promise<CategoryDocument[]> => {
  return Category.find().sort({ title: 1 })
}

const createCategory = async (
  author: CategoryDocument
): Promise<CategoryDocument> => {
  return author.save()
}

export default {
  findAllCategory,
  createCategory,
}
