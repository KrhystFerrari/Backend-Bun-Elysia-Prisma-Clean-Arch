import Elysia from 'elysia'
import UserRegister from '../core/usuario/service/UserRegister'

export default class UserRegisterController {
  constructor(readonly server: Elysia, readonly userCase: UserRegister) {
    server.post('/users', async ({ body }) => {
      const { name, email, password } = body as any
      await userCase.execute({ name, email, password })

      return {
        status: 201,
        body: {
            message: 'User create successfully!'
        }
      }
    })
  }
}
