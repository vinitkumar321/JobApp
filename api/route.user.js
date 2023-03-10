import express from 'express'
import UserController from '../controller/user.js'

const userRouter = express.Router()

userRouter.use((req, res, next) => {
  console.log(req.url, '@', Date.now())
  next()
})

userRouter
  .get('/all', UserController.get_all_users)
  .get('/:id', UserController.get_user)
  .post('/new', UserController.create_user)
  .put('/:id', UserController.update_user)
  .delete('/:id', UserController.delete_user)

export default userRouter
