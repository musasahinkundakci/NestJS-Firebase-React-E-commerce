import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    logger: any
    constructor(private readonly categoryService: CategoryService) {
        this.logger = new Logger("ProductController")
        this.categoryService.getFireStore()
    }
    @Get("")
    async getCategories() {
        console.log("category")
        try {
            const categories = await this.categoryService.getCategoriesS()
            this.logger.log("Fetched!")
            return categories
        } catch (error) {
            console.log(error)
            this.logger.log("ersror")
            return "error"
        }
    }
    @Post("/add")
    async addCategory(@Body("name") name: string, @Body("description") description: string) {
        try {
            console.log(name)
            const response = await this.categoryService.addCategory(name, description)
            this.logger.log("Added")
            return response
        } catch (error) {
            console.log(error)
            this.logger.log("error")
            return "error"
        }
    }
}
