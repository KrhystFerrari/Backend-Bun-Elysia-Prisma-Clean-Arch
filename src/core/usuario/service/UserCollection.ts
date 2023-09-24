import User from '../model/User'

export default interface UserCollection {
  consultAll(): Promise<User[]>
  emailConsult(email: string): Promise<User | null>
  idConsult(id: number): Promise<User | null>
  create(user: Partial<User>): Promise<User>
}
