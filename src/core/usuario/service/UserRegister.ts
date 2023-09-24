import UseCase from '../../shared/UseCase'
import UserCollection from './UserCollection'

type Enter = {
  name: string
  email: string
  password: string
}

export default class UserRegister implements UseCase<Enter, void> {
  constructor(private readonly collection: UserCollection) {}

  async execute(dados: Enter): Promise<void> {
    const { name, email, password } = dados
    const userExist = await this.collection.emailConsult(email)

    if (userExist) {
      throw new Error('User exist!')
    }

    await this.collection.create({ name, email, password })
  }
}
