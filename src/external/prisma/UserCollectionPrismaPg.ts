import { PrismaClient } from '@prisma/client'
import User from '../../core/usuario/model/User'
import UserCollection from '../../core/usuario/service/UserCollection'

export default class UserCollectionPrismaPg implements UserCollection {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  emailConsult(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }
  create(user: User): Promise<User> {
    return this.prisma.user.create({ data: user })
  }
}
