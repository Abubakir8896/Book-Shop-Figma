import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { RoleModule } from './role/role.module';
import { ProductCategoryModule } from './product_category/product_category.module';
@Module({
  imports: [
  ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      models: [],
      autoLoadModels: true,
    }),
    CustomerModule,
    ProductModule,
    RoleModule,
    ProductCategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
