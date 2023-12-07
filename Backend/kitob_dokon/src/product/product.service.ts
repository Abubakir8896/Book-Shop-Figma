import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FileService } from '../files/file.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';
import { Op } from 'sequelize';

@Injectable()
export class ProductService 
{
    constructor(@InjectModel(Product)  private  productRepo: typeof Product,
    private readonly fileService: FileService){}
  async create(createProductDto: CreateProductDto, photo:any) {
    const fileName = await this.fileService.createFile(photo)
    const product = await this.productRepo.create({...createProductDto, photo:fileName});
    return product
  }
  
  async findAllProduct():Promise<Product[]>{
    return  this.productRepo.findAll()
  }
  
  async findById(id:number):Promise<Product>{
    return this.productRepo.findByPk(id,{include:{all:true}})
  }
  
  async deleteById(id:number):Promise<string>{
    const product = await  this.productRepo.destroy({where:{id}})
    return "Success"
  }
  
  async updateById(id:number, updateProductDto:UpdateProductDto, photo:any){
  const fileName = await this.fileService.createFile(photo)
  const product = await this.productRepo.update({...updateProductDto, photo:fileName},{where: {id},returning:true});
  return product[1][0]
}

  async searchProducts(keyword: string): Promise<Product[]> {
    const product =  await this.productRepo.findAll({
      where: {
        title: {
          [Op.like]: `%${keyword}%`,
        },
      },
    });
    return product
  }
}