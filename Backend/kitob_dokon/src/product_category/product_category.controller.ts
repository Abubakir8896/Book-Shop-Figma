import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { ProductCategory } from './models/product_category.model';
import { ProductCategoryService } from './product_category.service';

@Controller('productcategory')
export class ProductCategoryController {
    constructor(private readonly ProductCategoryService:ProductCategoryService){}
    @Post('create')
    async createRole(@Body() createProductCategoryDto:CreateProductCategoryDto):Promise<ProductCategory>{
        return this.ProductCategoryService.createCategory(createProductCategoryDto)    
    }

    @Get('all')
    async findAllCompany():Promise<ProductCategory[]>{
        return this.ProductCategoryService.findAllCategory()
    }

    @Get('one/:id')
    async findById(@Param("id") id:string):Promise<ProductCategory>{
        return this.ProductCategoryService.findById(+id)
    }

    @Delete("/:id")
    async deleteById(@Param('id') id:string):Promise<String>{
        return this.ProductCategoryService.deleteById(+id)
    }
    
    @Put("update/:id")
    async updateById(@Param('id') id:string, @Body() updateProductCategoryDto:UpdateProductCategoryDto){
        return this.ProductCategoryService.updateById(+id,updateProductCategoryDto)
    }
}
