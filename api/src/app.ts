
import express from 'express'
import { SESSION_OPTIONS } from './config'
import session, { Store } from 'express-session'
import { register, login, home } from './routes'
import { notFound, internalServerError, active, catchAsync } from './middleware'
import { cors } from './middleware/cors'

export const createApp = (store: Store) => {
  const app = express()
  app.use(express.json())


  app.use(
    session({ ...SESSION_OPTIONS, store: store })
  )
  app.use(cors)
  app.use(catchAsync(active))
  

  app.use(register)
  app.use(login)
  app.use(home)

  app.use(notFound)

  app.use(internalServerError)

  return app
}

