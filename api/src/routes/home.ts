import { Router } from 'express'
import { User } from '../models'
import {  catchAsync, auth } from '../middleware'
const router = Router()

router.get('/home', auth, catchAsync(async (req, res) => {
  const user =await  User.findById(req.session!.userId).select('-__v -password')

  res.json ( user )
}))

export default router