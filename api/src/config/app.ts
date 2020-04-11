export const {
 NODE_ENV = 'dev',
 APP_PORT = 4000
} = process.env

export const PROD = NODE_ENV === 'prod'