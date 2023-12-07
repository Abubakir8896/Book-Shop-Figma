import { IsNotEmpty, IsNumber, IsString, IsDateString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    pages:string

    @IsNotEmpty()
    year:string

    @IsNotEmpty()
    price:string

    @IsString()
    @IsNotEmpty()
    country:string

    @IsString()
    @IsNotEmpty()
    author:string

    @IsString()
    @IsNotEmpty()
    description:string
}
