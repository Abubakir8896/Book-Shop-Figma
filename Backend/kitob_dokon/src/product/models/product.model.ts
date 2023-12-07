import { Table, Model, Column , DataType, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'
import { ProductCategory } from './../../product_category/models/product_category.model';

interface ProductAttr{
    title:string
    pages:string
    year:string
    price:string
    country:string
    author:string
    description:string
    photo: string
    category_id:string
}

@Table({tableName: 'product'})
export class Product extends Model<Product, ProductAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @Column({
        type: DataType.STRING
    })
    title: string

    @Column({
        type: DataType.STRING
    })
    pages: string

    @Column({
        type: DataType.STRING
    })
    year: string

    @Column({
        type: DataType.STRING
    })
    price: string

    @Column({
        type: DataType.STRING
    })
    country: string

    @Column({
        type: DataType.STRING
    })
    author: string

    @Column({
        type: DataType.STRING
    })
    description: string

    @Column({
        type: DataType.STRING
    })
    photo: string

    @ForeignKey(()  => ProductCategory)
    @Column({type:DataType.INTEGER})
    category_id:number

    @BelongsTo(() => ProductCategory)
    category:ProductCategory
}
