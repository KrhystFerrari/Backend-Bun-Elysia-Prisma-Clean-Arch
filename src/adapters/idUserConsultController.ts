import Elysia from 'elysia'
import UserConsultId from '../core/usuario/service/UserConsultId'

export default class idUserConsultController {
  constructor(readonly server: Elysia, readonly useCase: UserConsultId) {
    server.get('/users/:id', async ({ params }) => {
      return useCase.execute(+params.id)
    })
  }
}
