import { User } from '@prisma/client'
import UseCase from '../../shared/UseCase'
import UserCollection from './UserCollection'

export default class UserConsultId implements UseCase<number, User | null> {
  constructor(private readonly collection: UserCollection) {}

  execute(id: number): Promise<User | null> {
    return this.collection.idConsult(id)
  }
}
