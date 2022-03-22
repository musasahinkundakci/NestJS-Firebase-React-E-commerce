import { Body, Injectable, NestMiddleware, Request, Response } from "@nestjs/common"
const admin = require("../database/firebase-config")
export class AdminMiddleware {
    use(@Request() req: any, @Response() res: any, next: () => void) {
        try {

        } catch (error) {
            console.log(error)
            res.json("Something went wrong!")
        }
    }
}