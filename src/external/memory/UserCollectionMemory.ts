import User from '../../core/usuario/model/User'
import UserCollection from '../../core/usuario/service/UserCollection'

export default class UserCollectionMemory implements UserCollection {
  private readonly users: User[] = []

  async idConsult(id: number): Promise<User | null> {
    return this.users.find((user) => user.id === id) ?? null
  }
  async consultAll(): Promise<User[]> {
    return this.users
  }
  async emailConsult(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) ?? null
  }

  async create(user: User): Promise<User> {
    const newUser = { ...user, id: Math.random() }

    this.users.push(newUser)
    return newUser
  }
}
