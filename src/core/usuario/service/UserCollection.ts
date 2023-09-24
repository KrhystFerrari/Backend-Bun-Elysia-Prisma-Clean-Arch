import User from '../model/User'

export default interface UserCollection {
  emailConsult(email: string): Promise<User | null>
  create(user: User): Promise<User>
}
