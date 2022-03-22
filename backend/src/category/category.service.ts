import { Injectable, Logger } from '@nestjs/common';
const admin = require("../database/firebase-config")
@Injectable()
export class CategoryService {
    db: any
    logger: any
    constructor() {

        this.getFireStore()
        this.logger = new Logger("CategoryService")
    }
    async getFireStore() {
        try {
            const firestore = await admin.firestore()

            this.db = firestore
        } catch (error) {
            console.log(error)
        }
    }
    async addCategory(name: string, description: string) {
        try {
            const data = { name, description }
            await this.db.collection("Categories").add(data)
            this.logger.log("Added!")
            return "Added!"
        } catch (error) {
            this.logger.log("Error")
            console.log(error)
            return "Error"
        }
    }
    async getCategoriesS() {
        try {
            const doc1 = await this.db.collection("Categories").get()
            const categories = []
            doc1.forEach((doc) => {
                categories.push(doc.data())
            })
            console.log(categories)
            return categories
        } catch (error) {
            this.logger.log("Error")
            console.log(error)
            return "Error"
        }
    }
}
