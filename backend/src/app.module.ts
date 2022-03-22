import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleWare } from './middleware/auth.middleware';
import { AdminModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [AdminModule, UserModule, CategoryModule,],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, UserService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleWare).forRoutes(ProductController)
  }
}
