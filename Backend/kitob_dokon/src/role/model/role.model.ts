
import { Table, Model, Column , DataType, HasMany} from 'sequelize-typescript'
import { Customer } from '../../customer/models/customer.model';

interface RoleAttr{
name:string;
description:string
}

@Table({tableName: 'role'})
export class Role extends Model<Role, RoleAttr>{
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

    @Column({
        type: DataType.STRING
    })
    description: string;

    @HasMany(() => Customer)
    admins: Customer[]
}
