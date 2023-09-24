import app from './external/api/config'
import idUserConsultController from './adapters/idUserConsultController'
import UserCollectionPrismaPg from './external/prisma/UserCollectionPrismaPg'
import UserConsult from './core/usuario/service/UserConsult'
import UserConsultController from './adapters/UserConsultController'
import UserConsultId from './core/usuario/service/UserConsultId'
import UserRegister from './core/usuario/service/UserRegister'
import UserRegisterController from './adapters/UserRegisterController'

// Routes Register
const userCollection = new UserCollectionPrismaPg()

const userRegister = new UserRegister(userCollection)
new UserRegisterController(app, userRegister)

const userConsult = new UserConsult(userCollection)
new UserConsultController(app, userConsult)

const userIdConsult = new UserConsultId(userCollection)
new idUserConsultController(app, userIdConsult)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
