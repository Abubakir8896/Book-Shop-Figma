import { Controller, Get, Post, Body,Param,Res, UseGuards, HttpCode, Delete,Put, Req } from '@nestjs/common';
import { response, Response } from 'express';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './models/customer.model';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
// import { CustomerGuard } from '../guards/customer.guard';
import { LoginDto } from './dto/customer-login.dto';
// import { CreaterAdminGuard } from '../guards/admin.guard';
import { UpdateCustomerDto } from './dto/update-customer.dto';
// import { SuperAdminGuard } from '../guards/isSuperAdmin.guard';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('signup')
  async registration(@Body() createCustoomerDto: CreateCustomerDto,
  @Res({passthrough: true}) res: Response){
    return this.customerService.registration(createCustoomerDto, res)
  }

    //-------------------------------------------------

  @Get('activate/:link')
  activate(@Param('link') link:string){
    return this.customerService.activate(link);
  };
    
  //----------------------------------------------------

  // @UseGuards(CustomerGuard)
  @Post('logout')
  logout(@CookieGetter('refresh_token') refreshToken:string,
  @Res({passthrough:true}) res:Response,
  ){return this.customerService.logout(refreshToken,res)}
  
//-------------------------------------------------------

  @Post(":id/refresh")
  refresh(
    @Param('id') id:string,
    @CookieGetter('refresh_token') refreshToken:string,
    @Res({passthrough:true}) res:Response
  ){
    return this.customerService.refreshToken(+id, refreshToken, res);
  }


  //----------------------------------------------------------

  @Post('signin')
    login(
        @Body() loginDto:LoginDto,
        @Res({passthrough:true}) res:Response
    ){
        return this.customerService.login(loginDto,res)
    }

    //---------------------------------------------------------

    // @UseGuards(CreaterAdminGuard)
    @Get('all')
    async findAllCompany():Promise<Customer[]>{
        return this.customerService.findAllCustomers()
    }

    //----------------------------------------------------------
    // @UseGuards(CustomerGuard)
    @Get('one/:id')
    async getOneCustomer(@Param('id') id:string):Promise<Customer>{
      return this.customerService.findById(+id);
    }

    //-----------------------------------------------------------
    // @UseGuards(CustomerGuard)
    @Put('update')
    updateAdminById (@Body() updateCustomerDto: UpdateCustomerDto, @Req() req: Request,) {
      return this.customerService.updateAdminById(updateCustomerDto, req)
    }

    // @UseGuards(SuperAdminGuard)
    @Delete("/:id")
    async deleteById(@Param('id') id:string):Promise<String>{
        return this.customerService.deleteById(+id)
    }

}

