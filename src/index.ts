import { Elysia } from 'elysia'
import UserRegister from './core/usuario/service/UserRegister'
import UserRegisterController from './adapters/UserRegisterController'
import UserCollectionPrismaPg from './external/prisma/UserCollectionPrismaPg'

const app = new Elysia()

// Routes Register
const userCollection = new UserCollectionPrismaPg()
const userRegister = new UserRegister(userCollection)
new UserRegisterController(app, userRegister)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
