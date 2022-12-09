import { Request, Response, NextFunction } from 'express'

import categoryService from '../services/categoryService'
import { BadRequestError, ForbiddenError } from '../helpers/apiError'
import Category from '../models/Category'

const findAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await categoryService.findAllCategory())
  } catch (e) {
    if (e instanceof Error && e.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', e))
    } else {
      next(e)
    }
  }
}

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title } = req.body
    const category = new Category({
      title,
    })
    const newCategory = await categoryService.createCategory(category)
    res.json({ category: newCategory })
  } catch (e) {
    if (e instanceof Error && e.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', e))
    } else {
      next(e)
    }
  }
}

export default {
  findAllCategory,
  createCategory,
}
