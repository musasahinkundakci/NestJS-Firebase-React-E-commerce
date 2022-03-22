import { Injectable } from '@nestjs/common';
const admin = require("../database//firebase-config")
@Injectable()
export class UserService {
    db: any
    constructor() {
        this.db = admin.firestore()
    }
    async addUser(name: string, surname: string, email: string, password: string, userType: number) {
        try {
            const data = { name, surname, email, password, userType }
            return await this.db.collection("Users").add(data)
        }
        catch (error) {
            console.log(error)
        }

    }
    async getUser(id: string) {
        try {
            const user = await this.db.collection("Users").doc(id)
            return user
        } catch (error) {
            console.log(error)
        }
    }
    async deleteUser(id: string) {
        try {
            const res = await this.db.collection("Users").doc(id).delete()
            return res
        } catch (error) {
            console.log(error)
        }
    }
}