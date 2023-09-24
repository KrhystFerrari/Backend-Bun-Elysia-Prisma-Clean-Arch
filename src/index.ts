import { Elysia } from 'elysia'
import UserCollectionMemory from './external/memory/UserCollectionMemory'
import UserRegister from './core/usuario/service/UserRegister'
import UserRegisterController from './adapters/UserRegisterController'

const app = new Elysia()

// Routes Register
const userCollection = new UserCollectionMemory()
const userRegister = new UserRegister(userCollection)
new UserRegisterController(app, userRegister)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
