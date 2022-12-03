import express from 'express'
import adminChecked from '../middlewares/adminChecked'

import authorController from '../controllers/authorController'
import verifyAuth from '../middlewares/verifyAuth'

const authorRouter = express.Router()

authorRouter.get('/', authorController.findAllAuthor)
authorRouter.get('/:authorId', authorController.findAuthorById)
authorRouter.post('/create', authorController.createAuthor)
authorRouter.put(
  '/:authorId/update',
  verifyAuth,
  adminChecked,
  authorController.updateAuthor
)
authorRouter.delete(
  '/:authorId/delete',
  verifyAuth,
  adminChecked,
  authorController.deleteAuthor
)

export default authorRouter
