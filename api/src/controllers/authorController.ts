import { Request, Response, NextFunction } from 'express'

import Author from '../models/Author'
import authorService from '../services/authorService'
import { BadRequestError } from '../helpers/apiError'

const findAllAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await authorService.findAllAuthor())
  } catch (e) {
    if (e instanceof Error && e.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', e))
    } else {
      next(e)
    }
  }
}

const findAuthorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await authorService.findAuthorById(req.params.authorId))
  } catch (e) {
    if (e instanceof Error && e.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', e))
    } else {
      next(e)
    }
  }
}

const createAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName } = req.body
    const author = new Author({
      firstName,
      lastName,
    })
    const newAuthor = await authorService.createAuthor(author)
    res.json({ author: newAuthor })
  } catch (e) {
    if (e instanceof Error && e.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', e))
    } else {
      next(e)
    }
  }
}

const updateAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const authorId = req.params.authorId
    const updatedAuthor = await authorService.updateAuthor(authorId, update)
    res.json(updatedAuthor)
  } catch (e) {
    if (e instanceof Error && e.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', e))
    } else {
      next(e)
    }
  }
}

const deleteAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await authorService.deleteAuthor(req.params.authorId)
    res.status(204).end()
  } catch (e) {
    if (e instanceof Error && e.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', e))
    } else {
      next(e)
    }
  }
}

export default {
  findAllAuthor,
  findAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
}
