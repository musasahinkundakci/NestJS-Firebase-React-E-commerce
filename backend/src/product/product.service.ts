import { Injectable, Req } from '@nestjs/common';
const admin = require("../database/firebase-config")

@Injectable()
export class ProductService {
    db: any
    constructor() {
        this.db = this.getFireStore()
    }
    async getFireStore() {
        try {
            const firestore = await admin.firestore()

            return firestore
        } catch (error) {
            console.log(error)
        }
    }
    async getProducts() {
        try {

            this.db = await this.getFireStore()
            const doc = await this.db.collection("Products").get()
            const products = []
            doc.forEach((doc) => {
                products.push(doc.data())
            })
            return products
        } catch (error) {
            console.log(error)
        }
    }
    async addProduct(name: string, quantity: number, price_per_unit: number, images: object, category: object, created_by: object) {
        try {

            this.db = await this.getFireStore()
            const id = created_by
            console.log(id)
            const data = {
                name, quantity, price_per_unit, images, created_by,
            }
            const res = await this.db.collection("Products").add(data)
            return res
        } catch (error) {
            console.log(error)
        }
    }
    async deleteProduct(id: string) {
        try {
            const result = this.db.collection("Products").doc(id).delete()
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async updateProduct(id: string, name: string, quantity: number, price_per_unit: number) {
        try {
            const productRef = this.db.collection("Products").doc(id)
            return await productRef.update({ name, quantity, price_per_unit })
        } catch (error) {
            console.log(error)
        }
    }
}
