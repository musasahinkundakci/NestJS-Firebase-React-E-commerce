const admin = require("firebase-admin")
const serviceAccount = {
    "type": "service_account",
    "project_id": "firestore-84b9d",
    "private_key_id": "9865705a9e7b61ab912c17e288e3032918893957",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD9QibOsdpuv1tr\nWgDnIBOTrStqZE1ac5B7O94v50nxUzBar16hYbqKSwFoV9vXcqDdR9ralM+pQVul\nZcZhPO+3pkHa9JFbwpCdmFWf5xYRLa8W0P7zGUF6+CO7TgLhVomhE07AWzIcUefg\ndnhYDVxRXnpkhCUhhniLky0OXo8TM3+vqdbNQGUVnbFLvVl+lBO+p9ykwjcSBK22\nF86nVFrPm1d14UPo4FuGy5cXADZVN8/9MSTp8TRtbcviCQq35s8asIb/HTwT5mIa\nFqewAxXgwWnqXrCVx8Vb+1l7gWFNihBwL8k8BKQu+eqaWtms+YocCtvAZGZp8Sgq\nIfBtqpt9AgMBAAECggEAAZ4DBm3fUba6HDjiaZdsWJSSAudqEQpM4WST+iVVdQuN\ncv7MsWYg3VI2S5bIChuqyE71qFCr9M48ihVYy3UqqLcQk5fdN8NJzh/TaCZ/HxP2\nGsSx5BaEswbTn5YTcaHuVg98AMF0U/b37piDEzjenoxmZq7rV8f2jBmf/4f+DObT\niOeUBIuqerymkoeBUjtkcJ2bauwtWn4XfrXx0Q58iJtXg2gzUjvC00Um3u9vFGdx\nb/Z5YUdOhCai2YX6TaRbZUb6ObCnpC4KYgoFSVN6o1qkbl46Upqxh5a1sNVTRvWh\nxxkgIQsxtchzI72ZJxbBXHWEbLDQgqMnVLtDtIskFwKBgQD+qDnINuB5Hts/nxTb\nQB4zYbrcr3UphYG6wtUPfWzmesb40yJTkfqwYnVQU7ugetzTlEUkKnZthRabyFR1\nR84mA5uH575dQLCzQ9WLn/bpUlbN3dlNppH34pkJa1DuhMdEUNw3ULsL6EFMlNog\nN7GXD+bz4b/hOyNtBRLvKNS5UwKBgQD+mAmkr6Xycj68zfLoOvclyXmsItC1DZ2Q\n5E+TbQGz5Fn0WiCsLKORbl4kdCvNT8obqh97i/tcfwiVPZiNG0bSTGDYwc3/pw4w\neGqBszYZFW63kca4+284qAiGyOpXFUey5s13gxlroq99Lbrm6nrAc0mY1QPS5jdF\nJ8C+tcot7wKBgQDrPoIqRy90FCIbkpxUsdV0R7qz9M25rqAZ47OonIgGHbNC1t/l\n7Xt0h2+x5bf01qq6NUTt1OAT6hbpj9UdhliUW07I7Da5tHHHGEnjssEH5s1TXbZI\n+i/rmwMeZWmc/UGLBVt5KfWwWTxBP1yE2I4Qa1tBPfDgYp4mLsK/9asVCwKBgEmp\nj9C4iZk2ePSD2i5bMTsbqjql8CESiW5swKF1PrLf9S8ADMgEOmdPualue2XyGhYb\nCPTkMZw3nTIhGkxpgfpC4xqUKJg5q59Wl+pjAdoMG3a9lPPcu/d2ltD4vOTpYU9f\n/D8CDY7ZCVF8s8EwQsgAE2FG8M5Kkd9OezQywQa9AoGBAIOvqwGRMVAZipptSjOt\nY4D1N1ygjiwR8kkiF2ZZ6hABRltWByZlyDjYjHhxB+L41FAbeXqLQOTbvXJAcAp8\nb7lCmTyvX+XB3m/nJJNsLoRngdoa6vQPHSsg+sBra88pagUn0wqtn5rSNVyOc6ho\nTSAXqPhQJwfgcm9ZY9rPvCcS\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-i4akg@firestore-84b9d.iam.gserviceaccount.com",
    "client_id": "101771609023129086028",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i4akg%40firestore-84b9d.iam.gserviceaccount.com"
}


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
module.exports = admin