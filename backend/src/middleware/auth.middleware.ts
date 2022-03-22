import { Body, Injectable, NestMiddleware, Request, Response } from "@nestjs/common"
const admin = require("../database/firebase-config")
@Injectable()
export class AuthMiddleWare implements NestMiddleware {
    async use(@Request() req: any, @Response() res: any, next: () => void) {
        try {
            console.log(await req.headers.authorization)
            if (req.headers.authorization) {
                const token = await req.headers.authorization//Bearer xcfadfadfaftoken
                const decodedValue = await admin.auth().verifyIdToken(token)
                if (decodedValue) {
                    console.log("You are authorized!")
                    req.user = decodedValue
                    next()
                }
                else {
                    console.log("You are not authorized!")
                    return res.json("You are not allowed!")
                }
            }
            else {
                console.log("You are not authorized!")
                return res.json("You are not allowed!"

                )
            }
        }
        catch (e) {
            console.log(e)
            return res.json({
                msg: "Internal error!"
            })
        }
    }
}