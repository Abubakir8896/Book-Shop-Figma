import { IsNotEmpty, IsNumber, IsString, IsEmail, IsPhoneNumber, IsDateString } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    username:string

    @IsNotEmpty()
    @IsString()
    password:string
}
