import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
// import { CreaterAdminGuard } from '../guards/admin.guard';
import { Product } from './models/product.model';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post('create')
  @UseInterceptors(FileInterceptor("photo"))
  create(@Body() createPostDto: CreateProductDto, @UploadedFile() photo:any) {
    
    return this.productService.create(createPostDto, photo)
  }

  @Get('all')
  async findAllCompany():Promise<Product[]>{
      return this.productService.findAllProduct()
  }

  @Get('one/:id')
  async findById(@Param("id") id:string):Promise<Product>{
      return this.productService.findById(+id)
  }

  // @UseGuards(CreaterAdminGuard)
  @Delete("/:id")
  async deleteById(@Param('id') id:string):Promise<String>{
      return this.productService.deleteById(+id)
  }
  
  // @UseGuards(CreaterAdminGuard)
  @Put("update/:id")
  @UseInterceptors(FileInterceptor("photo"))
  async updateById(@Param('id') id:string, @Body() updateProductDto: UpdateProductDto, @UploadedFile() photo:any){
      return this.productService.updateById(+id,updateProductDto, photo)
  }
  @Get('/search')
  async searchProducts(@Query('keyword') keyword: string): Promise<Product[]> {
    return this.productService.searchProducts(keyword);
  }
}