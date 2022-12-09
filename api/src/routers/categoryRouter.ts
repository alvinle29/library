import express from 'express'

import categoryController from '../controllers/categoryController'

const categoryRouter = express.Router()

categoryRouter.get('/', categoryController.findAllCategory)
categoryRouter.post('/create', categoryController.createCategory)

export default categoryRouter
