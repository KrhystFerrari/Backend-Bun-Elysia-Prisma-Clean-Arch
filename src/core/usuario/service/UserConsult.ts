import { User } from "@prisma/client";
import UseCase from "../../shared/UseCase";
import UserCollection from "./UserCollection";

export default class UserConsult implements UseCase<void, User[]> {
    constructor(readonly collection: UserCollection) {}

    execute(): Promise<User[]> {
        return this.collection.consultAll()
    }
}