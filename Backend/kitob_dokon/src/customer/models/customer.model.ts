import { Table, Model, Column , DataType, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import { Role } from '../../role/model/role.model'

interface CustomerAttr{
    first_name: string
    last_name: string
    username: string
    hashed_password: string
    email: string
    phone: string
    photo_link: string
    is_active:boolean
    adress:string
    hashed_refresh_token:string,
    activation_link:string
}

@Table({tableName: 'customers'})
export class Customer extends Model<Customer, CustomerAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @Column({
        type: DataType.STRING
    })
    first_name: string

    @Column({
        type: DataType.STRING
    })
    last_name: string

    @Column({
        type: DataType.STRING,
        unique:true
    })
    username: string

    @Column({
        type: DataType.STRING
    })
    hashed_password: string

    @Column({
        type: DataType.STRING,
    })
    email: string

    @Column({
        type: DataType.STRING
    })
    user_photo: string

    @Column({
        type: DataType.STRING,
    })
    phone: string

    @Column({
        type: DataType.BOOLEAN,
        defaultValue:false
    })
    is_active: boolean
    
    @Column({
        type: DataType.STRING
    })
    hashed_refresh_token: string
    
    @Column({
        type: DataType.STRING,
    })
    activation_link:string

    @Column({
        type: DataType.STRING
    })
    addres:string

    @ForeignKey(()  => Role)
    @Column({type:DataType.INTEGER, defaultValue:1})
    role_id:number

    @BelongsTo(() => Role)
    role:Role
}

