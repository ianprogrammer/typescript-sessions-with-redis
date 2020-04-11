import { SessionOptions } from 'express-session'
import { PROD } from './app'

const ONE_HOUR = 1000 * 60 * 60
const THIRTY_MINUTES = ONE_HOUR/2

const SIX_HOURS = ONE_HOUR * 6
const {env} = process

export const SESSION_ABSOLUTE_TIMEOUT = +(env.SESSION_ABSOLUTE_TIMEOUT || SIX_HOURS)

export const {
  SESSION_SECRET = 'keep it secret dude',
  SESSION_NAME = 'sid',
  SESSION_IDLE_TIMEOUT = 1000*10 *10
} = env

export const SESSION_OPTIONS: SessionOptions = {
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  cookie: {
    maxAge: +SESSION_IDLE_TIMEOUT,
    secure: PROD,
    sameSite: true
  },
  rolling: true,
  resave: false,
  saveUninitialized: false

}