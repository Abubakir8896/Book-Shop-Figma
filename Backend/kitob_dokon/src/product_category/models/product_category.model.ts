import {ApiProperty} from '@nestjs/swagger'
import { Table, Model, Column , DataType,  ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'
import { Product } from '../../product/models/product.model';

interface Product_CategoryAttr{
name:string;
}

@Table({tableName: 'product_category'})
export class ProductCategory extends Model<ProductCategory, Product_CategoryAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @HasMany(() => Product)
    products: Product[]
}
