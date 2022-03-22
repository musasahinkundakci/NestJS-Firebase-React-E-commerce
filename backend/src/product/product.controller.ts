import { Controller, Get, Post, Body, Delete, Request, UseInterceptors, UploadedFiles, Req } from '@nestjs/common';
import { AnyFilesInterceptor, FilesInterceptor, MulterModule } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { diskStorage } from 'multer';
import { Multer } from "multer"
import path from 'path';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    @Get()
    async getProducts(@Req() req: any) {
        try {
            console.log(req.user.user_id)
            console.log("ımhere")
            return await this.productService.getProducts()
        } catch (error) {
            console.log(error)
        }
    }
    @Post("add")
    @UseInterceptors(
        FilesInterceptor('files', 20, {
            storage: diskStorage({
                destination: './files',
                filename: (req, file, cb) => {
                    console.log(file)
                    return cb(null, file.originalname)
                },
            }),
        }),
    )
    async addProduct(@Req() req: any, @UploadedFiles() files, @Body("name") name: string, @Body("category") category: object, @Body("quantity") quantity: number, @Body("price_per_unit") price_per_unit: number) {
        try {
            const images = []
            files.map(file => images.push(file.originalname))
            console.log(`category=>${category}`)
            const result = await this.productService.addProduct(name, quantity, price_per_unit, images, category, req.user.user_id)
            return result
        } catch (error) {
            console.log(error)
        }
    }
    @Post('upload')
    @UseInterceptors(
        FilesInterceptor('files', 20, {
            storage: diskStorage({
                destination: './files',
                filename: (req, file, cb) => {
                    console.log(file)
                    return cb(null, file.fieldname + "-" + Date.now() + ".jpg")
                },
            }),
        }),
    )
    uploadFile(@UploadedFiles() files) {

        const images = []
        files.map(file => images.push(file.originalname))
        console.log(images)
        return {}
    }

    @Delete("delete")
    async deleteProduct(@Body("id") id: string) {
        try {
            const res = await this.productService.deleteProduct(id)
            return res
        } catch (error) {
            console.log(error)
        }
    }
    @Post("update")
    async updateProduct(
        @Body("id") id: string, @Body("name") name: string, @Body("quantity") quantity: number, @Body("price_per_unit") price_per_unit: number
    ) {
        try {
            const res = await this.productService.updateProduct(id, name, quantity, price_per_unit)
            return res
        } catch (error) {
            console.log(error)
        }
    }

}

