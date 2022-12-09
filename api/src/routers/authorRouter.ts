import express from 'express'
import authorController from '../controllers/authorController'

const authorRouter = express.Router()

authorRouter.get('/', authorController.findAllAuthor)
authorRouter.get('/:authorId', authorController.findAuthorById)
authorRouter.post('/create', authorController.createAuthor)
authorRouter.put('/:authorId/update', authorController.updateAuthor)
authorRouter.delete('/:authorId/delete', authorController.deleteAuthor)

export default authorRouter
