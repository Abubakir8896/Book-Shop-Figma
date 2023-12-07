import { IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class UpdateProductCategoryDto {
    @IsNotEmpty()
    @IsString()
    name?:string
}
